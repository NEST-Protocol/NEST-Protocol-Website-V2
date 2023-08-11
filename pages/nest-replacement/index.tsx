import {Button, HStack, Link, Spacer, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Head from "next/head";
import Footer from "../../components/Footer";
import {
  erc20ABI,
  useAccount,
  useBalance,
  useConnect,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction
} from "wagmi";
import {InjectedConnector} from 'wagmi/connectors/injected'
import {bscTestnet} from "@wagmi/chains";
import {useEffect, useState} from "react";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import {NEST_SWITCH_ABI} from "../../lib/abi";
import {NEST_ADDRESS, NEST_SWITCH_ADDRESS} from "../../lib/address";
import useSWR from "swr";
import {MerkleTree} from "merkletreejs"
import {keccak256} from "@ethersproject/keccak256"

const Switch = () => {
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  const title = "NEST Protocol | NEST Replacement"
  const description = "NEST Protocol is the stochastic computer based on PVM, enables the generation and programming of stochastic assets."
  const {connect, connectors} = useConnect({
    // @ts-ignore
    connector: new InjectedConnector({
      chains: [bscTestnet],
      options: {
        shimDisconnect: true,
      }
    }),
  })
  const {chain} = useNetwork()
  const {address} = useAccount()
  const {
    data: checkData,
    isLoading: isCheckLoading,
    mutate: mutateInfo,
  } = useSWR(address ? `https://api.nestfi.net/api/users/switch/info?address=${address}&chainId=${chain?.id}` : undefined, (url: string) => fetch(url).then(res => res.json()).then(res => res.value), {
    refreshInterval: 2_000,
  })
  // need refetchBalance when chain.id changed
  const {data: balanceOfNEST, refetch: refetchBalance} = useBalance({
    address: address,
    token: NEST_ADDRESS[chain?.id ?? bscTestnet.id],
    cacheTime: 1_000,
    watch: true,
    enabled: !!address
  })
  // need allowanceRefetch when address and chain.id changed
  const {data: allowanceData, refetch: allowanceRefetch} = useContractRead({
    abi: erc20ABI,
    address: NEST_ADDRESS[chain?.id ?? bscTestnet.id],
    functionName: 'allowance',
    args: [
      address!,
      NEST_SWITCH_ADDRESS[chain?.id ?? bscTestnet.id],
    ],
    cacheTime: 1_000,
    watch: true,
    enabled: !!address,
  })
  // need refetchApprovePrepare when chain.id changed, balanceOfNEST changed
  const {config: approvePrepareConfig, refetch: refetchApprovePrepare,} = usePrepareContractWrite({
    address: NEST_ADDRESS[chain?.id ?? bscTestnet.id],
    abi: erc20ABI,
    functionName: 'approve',
    args: [
      NEST_SWITCH_ADDRESS[chain?.id ?? bscTestnet.id],
      balanceOfNEST?.value || BigInt(10000000000000000)
    ],
    enabled: !!address && !!balanceOfNEST?.value
  })
  const {
    data: approveData,
    write: approve,
    status: approveStatus,
    reset: resetApprove,
  } = useContractWrite(approvePrepareConfig)
  const {status: waitApproveStatus} = useWaitForTransaction({
    hash: approveData?.hash,
    cacheTime: 3_000,
  })
  // need refetchSwitchOldPrepare when balanceOfNEST changed and approved value changed
  const {
    config: switchOldPrepareConfig,
    status: switchOldPrepareStatus,
    refetch: refetchSwitchOldPrepare
  } = usePrepareContractWrite({
    address: NEST_SWITCH_ADDRESS[chain?.id ?? bscTestnet.id],
    abi: NEST_SWITCH_ABI,
    functionName: 'switchOld',
    args: [
      balanceOfNEST?.value
    ],
    enabled: !!address && !!balanceOfNEST?.value && balanceOfNEST?.value > 0
  })
  const {
    data: switchOldData,
    write: switchOld,
    status: switchOldStatus,
    reset: switchOldReset,
  } = useContractWrite(switchOldPrepareConfig)
  const {status: waitSwitchOldStatus} = useWaitForTransaction({
    hash: switchOldData?.hash,
    cacheTime: 3_000,
  })
  const [proof, setProof] = useState<string[]>([])
  const {
    config: withdrawNewPrepareConfig,
    refetch: refetchWithdrawNewPrepare,
    status: withdrawNewStatusPrepare
  } = usePrepareContractWrite({
    address: NEST_SWITCH_ADDRESS[chain?.id ?? bscTestnet.id],
    abi: NEST_SWITCH_ABI,
    functionName: 'withdrawNew',
    args: [
      proof
    ],
    enabled: !!address && proof.length > 0 && checkData?.received !== 'true'
  })
  const {
    data: withdrawNewData,
    write: withdrawNew,
    status: withdrawNewStatus,
    reset: resetWithdrawNew,
  } = useContractWrite(withdrawNewPrepareConfig)
  const {status: waitWithdrawNewStatus} = useWaitForTransaction({
    hash: withdrawNewData?.hash,
    cacheTime: 3_000,
  })

  useEffect(() => {
    if (!address) {
      try {
        connect({
          chainId: 97,
        })
      } catch (e) {
        console.log(e)
      }
    }
  }, [address])
  const [block, setBlock] = useState(false);
  const [sent, setSent] = useState(false);
  const [pass, setPass] = useState(false);
  const [received, setReceived] = useState(false);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [sentAmount, setSentAmount] = useState(0);

  /**
   block
   pass
   received
   receivedAmount
   sent
   sentAmount
   */
  const {
    data: nodesData,
  } = useSWR(chain?.id ? `https://api.nestfi.net/api/users/pass/list?chainId=${chain?.id}` : undefined, (url: string) => fetch(url).then(res => res.json()), {
    refreshInterval: 10_000,
  })

  useEffect(() => {
    if (pass && proof.length > 0 && checkData?.received !== 'true' && withdrawNewStatusPrepare === 'error') {
      setTimeout(() => {
        refetchWithdrawNewPrepare()
      }, 3_000)
    }
  }, [withdrawNewStatusPrepare, pass, proof, checkData])

  useEffect(() => {
    setSent(false)
    setPass(false)
    setBlock(false)
    setReceived(false)
    setReceivedAmount(0)
    setSentAmount(0)
    refetchBalance()
    allowanceRefetch()
    mutateInfo()
  }, [address, chain?.id])

  useEffect(() => {
    if (switchOldStatus == 'error' || switchOldStatus === 'success') {
      setTimeout(() => {
        switchOldReset()
      }, 3_000)
    }
  }, [switchOldStatus, waitSwitchOldStatus])

  useEffect(() => {
    if (withdrawNewStatus === 'error' || withdrawNewStatus === 'success') {
      setTimeout(() => {
        resetWithdrawNew()
      }, 3_000)
    }
  }, [withdrawNewStatus])

  useEffect(() => {
    refetchApprovePrepare()
  }, [address, chain?.id, balanceOfNEST])

  useEffect(() => {
    if (approveStatus === 'success') {
      allowanceRefetch();
    }
  }, [approveStatus])

  useEffect(() => {
    if (address && nodesData) {
      const leaves = nodesData.map((x: string) => keccak256(x))
      const tree = new MerkleTree(leaves, keccak256, {
        sortPairs: true,
      })
      const root = tree.getHexRoot()
      const leaf = keccak256(address)
      const proof = tree.getHexProof(leaf)
      const verified = tree.verify(proof, leaf, root)
      if (verified) {
        setProof(proof)
      } else {
        setProof([])
      }
    } else {
      setProof([])
    }
  }, [nodesData, address])

  useEffect(() => {
    if (withdrawNewStatus === 'error') {
      setTimeout(() => {
        resetWithdrawNew()
      }, 3_000)
    }
  }, [resetWithdrawNew, withdrawNewStatus])

  useEffect(() => {
    if (switchOldStatus === 'error' || waitApproveStatus === 'success') {
      setTimeout(() => {
        refetchSwitchOldPrepare()
      }, 1_000)
    }
  }, [switchOldStatus, waitApproveStatus])

  useEffect(() => {
    if (switchOldPrepareStatus === "error" && allowanceData && allowanceData >= (balanceOfNEST?.value || 0)) {
      refetchSwitchOldPrepare()
    }
  }, [switchOldPrepareStatus, balanceOfNEST, allowanceData])

  useEffect(() => {
    if (approveStatus === 'success' || approveStatus === 'error') {
      setTimeout(() => {
        resetApprove()
      }, 3000)
    }
  }, [approveStatus, resetApprove])

  useEffect(() => {
    if (switchOldStatus === 'success' || waitSwitchOldStatus === 'success') {
      setSent(true)
    }
  }, [switchOldStatus, waitSwitchOldStatus])

  useEffect(() => {
    if (withdrawNewStatus === 'success' && waitWithdrawNewStatus === 'success') {
      setReceived(true)
    }
  }, [withdrawNewStatus, waitWithdrawNewStatus])

  useEffect(() => {
    if (checkData) {
      setSent(JSON.parse(checkData.sent))
      setPass(JSON.parse(checkData.pass))
      setReceived(JSON.parse(checkData.received))
      setBlock(JSON.parse(checkData.block))
      setReceivedAmount(JSON.parse(checkData.receivedAmount))
      setSentAmount(JSON.parse(checkData.sentAmount))
      if (checkData.proof) {
        setProof(checkData.proof)
      }
    }
  }, [checkData])

  const SEO = (
    <Head>
      <title>{title}</title>
      <meta name="og:title" content={title}/>
      <meta name="twitter:title" content={title}/>
      <meta name="description" content={description}/>
      <meta name="og:description" content={description}/>
      <meta name="twitter:description" content={description}/>
    </Head>
  )

  const mobilePage = (
    <Stack bgSize={'cover'} bgImage={"image/Swap/bg.png"} bgPosition={"center"} minH={'100vh'}>
      {SEO}
      <NavigationMobile/>
      <Stack align={"center"} w={'full'} px={'20px'}>
        <Stack py={'60px'} w={'full'}>
          <HStack justifyContent={"center"}>
            <Stack w={'224px'} h={'72px'}>
              <svg width="224" height="72" viewBox="0 0 224 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M184 72C201.673 72 216 57.6731 216 40C216 22.3269 201.673 8 184 8C166.327 8 152 22.3269 152 40C152 57.6731 166.327 72 184 72Z"
                  fill="black"/>
                <path
                  d="M200 33.8754C200 34.9009 199.798 36.1314 199.596 37.5671L196.361 54.1796C196.361 54.5898 195.956 54.7949 195.754 54.7949H191.71C191.306 54.7949 190.901 54.3847 191.104 53.9745L194.339 37.5671C194.541 36.5416 194.541 35.7212 194.541 35.106C194.541 31.0041 192.317 28.7481 187.464 28.7481C181.601 28.7481 177.557 32.0296 176.344 38.5925L173.311 54.3847C173.311 54.7949 172.906 55 172.704 55H168.66C168.256 55 167.852 54.5898 168.054 54.1796L173.715 24.8513C173.715 24.4411 174.12 24.236 174.322 24.236H178.163C178.568 24.236 178.972 24.6462 178.77 25.0564L178.568 26.2869C178.366 26.9022 179.174 27.3124 179.579 26.9022C182.207 24.8513 185.442 24.0309 189.082 24.0309C195.956 23.6207 200 27.3124 200 33.8754Z"
                  fill="white"/>
                <g opacity="0.6">
                  <path
                    d="M32 72C49.6731 72 64 57.6731 64 40C64 22.3269 49.6731 8 32 8C14.3269 8 0 22.3269 0 40C0 57.6731 14.3269 72 32 72Z"
                    fill="black"/>
                  <path
                    d="M48 33.8754C48 34.9009 47.7978 36.1314 47.5956 37.5671L44.3606 54.1796C44.3606 54.5898 43.9562 54.7949 43.754 54.7949H39.7102C39.3058 54.7949 38.9014 54.3847 39.1036 53.9745L42.3386 37.5671C42.5408 36.5416 42.5408 35.7212 42.5408 35.106C42.5408 31.0041 40.3167 28.7481 35.4641 28.7481C29.6006 28.7481 25.5568 32.0296 24.3436 38.5925L21.3108 54.3847C21.3108 54.7949 20.9064 55 20.7042 55H16.6604C16.256 55 15.8516 54.5898 16.0538 54.1796L21.7151 24.8513C21.7151 24.4411 22.1195 24.236 22.3217 24.236H26.1633C26.5677 24.236 26.9721 24.6462 26.7699 25.0564L26.5677 26.2869C26.3655 26.9022 27.1743 27.3124 27.5787 26.9022C30.2072 24.8513 33.4422 24.0309 37.0817 24.0309C43.9562 23.6207 48 27.3124 48 33.8754Z"
                    fill="white"/>
                </g>
                <path d="M128 40L118 34.2265V45.7735L128 40ZM88 41H119V39H88V41Z" fill="#EAAA00"/>
                <circle cx="212" cy="12" r="12" fill="#EB5D2A"/>
                <path
                  d="M203.732 16V14.74L206.972 11.68C207.228 11.448 207.416 11.24 207.536 11.056C207.656 10.872 207.736 10.704 207.776 10.552C207.824 10.4 207.848 10.26 207.848 10.132C207.848 9.796 207.732 9.54 207.5 9.364C207.276 9.18 206.944 9.088 206.504 9.088C206.152 9.088 205.824 9.156 205.52 9.292C205.224 9.428 204.972 9.64 204.764 9.928L203.348 9.016C203.668 8.536 204.116 8.156 204.692 7.876C205.268 7.596 205.932 7.456 206.684 7.456C207.308 7.456 207.852 7.56 208.316 7.768C208.788 7.968 209.152 8.252 209.408 8.62C209.672 8.988 209.804 9.428 209.804 9.94C209.804 10.212 209.768 10.484 209.696 10.756C209.632 11.02 209.496 11.3 209.288 11.596C209.088 11.892 208.792 12.224 208.4 12.592L205.712 15.124L205.34 14.416H210.08V16H203.732ZM212.103 16.096C211.783 16.096 211.507 15.988 211.275 15.772C211.051 15.548 210.939 15.264 210.939 14.92C210.939 14.576 211.051 14.3 211.275 14.092C211.507 13.876 211.783 13.768 212.103 13.768C212.431 13.768 212.707 13.876 212.931 14.092C213.155 14.3 213.267 14.576 213.267 14.92C213.267 15.264 213.155 15.548 212.931 15.772C212.707 15.988 212.431 16.096 212.103 16.096ZM217.588 16.144C216.9 16.144 216.284 15.976 215.74 15.64C215.196 15.296 214.768 14.8 214.456 14.152C214.144 13.504 213.988 12.72 213.988 11.8C213.988 10.88 214.144 10.096 214.456 9.448C214.768 8.8 215.196 8.308 215.74 7.972C216.284 7.628 216.9 7.456 217.588 7.456C218.284 7.456 218.9 7.628 219.436 7.972C219.98 8.308 220.408 8.8 220.72 9.448C221.032 10.096 221.188 10.88 221.188 11.8C221.188 12.72 221.032 13.504 220.72 14.152C220.408 14.8 219.98 15.296 219.436 15.64C218.9 15.976 218.284 16.144 217.588 16.144ZM217.588 14.5C217.916 14.5 218.2 14.408 218.44 14.224C218.688 14.04 218.88 13.748 219.016 13.348C219.16 12.948 219.232 12.432 219.232 11.8C219.232 11.168 219.16 10.652 219.016 10.252C218.88 9.852 218.688 9.56 218.44 9.376C218.2 9.192 217.916 9.1 217.588 9.1C217.268 9.1 216.984 9.192 216.736 9.376C216.496 9.56 216.304 9.852 216.16 10.252C216.024 10.652 215.956 11.168 215.956 11.8C215.956 12.432 216.024 12.948 216.16 13.348C216.304 13.748 216.496 14.04 216.736 14.224C216.984 14.408 217.268 14.5 217.588 14.5Z"
                  fill="white"/>
              </svg>
            </Stack>
          </HStack>
          <Stack textAlign={"center"} pt={'24px'} spacing={'16px'}>
            <Text fontSize={'24px'} fontWeight={700} lineHeight={'32px'}>Replace your NEST 1.0 to NEST 2.0 at a ratio of
              1:1</Text>
            <Link href={''} isExternal cursor={'pointer'}>
              <HStack pt={'8px'} spacing={'8px'} background={'rgba(255, 255, 255, 0.80)'} py={'12px'} px={'20px'}
                      w={'full'} justify={"center"}
                      borderRadius={'12px'}>
                <Text fontSize={'16px'} fontWeight={400} lineHeight={'22px'} color={'#EAAA00'}>Why should you replace
                  your NEST 1.0 tokens?</Text>
                <Stack w={'17px'} h={'16px'}>
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11.878 7.76435C12.0081 7.89452 12.0081 8.10557 11.878 8.23575L6.2211 13.8926C6.09093 14.0228 5.87987 14.0228 5.7497 13.8926L5.26443 13.4073C5.13425 13.2772 5.13425 13.0661 5.26443 12.9359L10.2003 8.00005L5.26443 3.06416C5.13425 2.93399 5.13425 2.72293 5.26443 2.59276L5.7497 2.10749C5.87987 1.97731 6.09093 1.97732 6.2211 2.10749L11.878 7.76435Z"
                          fill="#EAAA00"/>
                  </svg>
                </Stack>
              </HStack>
            </Link>
            <Text fontSize={'16px'} fontWeight={400} color={'rgba(3,3,8, 0.6)'}
                  lineHeight={'22px'}>Each address is only eligible for a single replacement. To save on your gas fees,
              kindly
              authorize the entire NEST1.0 amount for the replacement in one go.</Text>
          </Stack>
          {
            isCheckLoading ? (
              <Stack textAlign={"center"} pt={'40px'}>
                <Text>...</Text>
              </Stack>
            ) : (
              <HStack justifyContent={"center"} pt={'40px'}>
                {
                  address ? (
                    sent ? (
                      pass ? (
                        received ? (
                          <HStack borderRadius={'12px'} bg={'#CFF5D0'} border={'1px solid #2ECD3C'} px={'20px'}
                                  py={'24px'} w={'full'} gap={'24px'}>
                            <Stack h={'40px'} w={'40px'}>
                              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M32.9639 32.9639C29.6462 36.2816 25.0629 38.3337 20.0003 38.3337C14.9378 38.3337 10.3544 36.2816 7.0367 32.9639C3.71902 29.6462 1.66699 25.0629 1.66699 20.0003C1.66699 14.9378 3.71902 10.3544 7.0367 7.0367C10.3544 3.71902 14.9378 1.66699 20.0003 1.66699C25.0629 1.66699 29.6462 3.71902 32.9639 7.0367C36.2816 10.3544 38.3337 14.9378 38.3337 20.0003C38.3337 25.0629 36.2816 29.6462 32.9639 32.9639ZM29.5122 16.1788C30.163 15.528 30.163 14.4727 29.5122 13.8218C28.8613 13.1709 27.806 13.1709 27.1551 13.8218L18.3337 22.6433L14.5122 18.8218C13.8613 18.1709 12.806 18.1709 12.1551 18.8218C11.5043 19.4727 11.5043 20.528 12.1551 21.1788L17.1551 26.1788C17.806 26.8297 18.8613 26.8297 19.5122 26.1788L29.5122 16.1788Z"
                                      fill="#2ECD3C"/>
                              </svg>
                            </Stack>
                            <Stack spacing={'8px'}>
                              <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={700}>You have finished the NEST
                                token replacement, thanks for your support.</Text>
                            </Stack>
                          </HStack>
                        ) : (
                          <Stack borderRadius={'12px'} bg={'#CFF5D0'} border={'1px solid #2ECD3C'} px={'20px'}
                                 w={'full'}
                                 py={'24px'} gap={'12px'}>
                            <HStack>
                              <Stack h={'40px'} w={'40px'}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M32.9639 32.9639C29.6462 36.2816 25.0629 38.3337 20.0003 38.3337C14.9378 38.3337 10.3544 36.2816 7.0367 32.9639C3.71902 29.6462 1.66699 25.0629 1.66699 20.0003C1.66699 14.9378 3.71902 10.3544 7.0367 7.0367C10.3544 3.71902 14.9378 1.66699 20.0003 1.66699C25.0629 1.66699 29.6462 3.71902 32.9639 7.0367C36.2816 10.3544 38.3337 14.9378 38.3337 20.0003C38.3337 25.0629 36.2816 29.6462 32.9639 32.9639ZM29.5122 16.1788C30.163 15.528 30.163 14.4727 29.5122 13.8218C28.8613 13.1709 27.806 13.1709 27.1551 13.8218L18.3337 22.6433L14.5122 18.8218C13.8613 18.1709 12.806 18.1709 12.1551 18.8218C11.5043 19.4727 11.5043 20.528 12.1551 21.1788L17.1551 26.1788C17.806 26.8297 18.8613 26.8297 19.5122 26.1788L29.5122 16.1788Z"
                                        fill="#2ECD3C"/>
                                </svg>
                              </Stack>
                              <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={700}>Replaced successfully!</Text>
                            </HStack>
                            <HStack pl={'40px'}>
                              <Button onClick={withdrawNew} isDisabled={!withdrawNew} size={'sm'} minH={'36px'}
                                      fontSize={'12px'} lineHeight={'16px'}>
                                {withdrawNewStatus == 'idle' && 'Withdraw NEST2.0'}
                                {(withdrawNewStatus == 'loading' || waitWithdrawNewStatus === 'loading') && 'Withdrawing'}
                                {waitWithdrawNewStatus === 'success' && 'Withdraw success'}
                                {(withdrawNewStatus == 'error' || waitWithdrawNewStatus === 'error') && 'Withdraw error'}
                              </Button>
                            </HStack>
                          </Stack>
                        )
                      ) : (
                        <Stack>
                          <Stack px={'40px'} py={'24px'} bg={'rgba(234, 170, 0, 0.40)'} border={'1px solid #EAAA00'}
                                 w={'full'} borderRadius={'12px'} spacing={'12px'}>
                            <HStack spacing={'24px'}>
                              <Stack h={'40px'} w={'40px'}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M1.66699 20.0003C1.66699 9.8751 9.8751 1.66699 20.0003 1.66699C30.1256 1.66699 38.3337 9.8751 38.3337 20.0003C38.3337 30.1256 30.1256 38.3337 20.0003 38.3337C9.8751 38.3337 1.66699 30.1256 1.66699 20.0003ZM21.6739 10.0006C21.674 9.08012 20.9279 8.33385 20.0074 8.33376C19.0869 8.33367 18.3407 9.07979 18.3406 10.0003L18.3396 20.0076C18.3395 20.4497 18.5151 20.8737 18.8277 21.1863L25.8939 28.2524C26.5448 28.9033 27.6 28.9033 28.2509 28.2524C28.9018 27.6016 28.9018 26.5463 28.2509 25.8954L21.673 19.3175L21.6739 10.0006Z"
                                        fill="#EAAA00"/>
                                </svg>
                              </Stack>
                              <Stack>
                                <Text color={'#030308'} fontSize={'20px'} fontWeight={700}
                                      lineHeight={'28px'}>Your token replacement application has been submitted. Please
                                  await the outcome.</Text>
                                <Text fontSize={'16px'} fontWeight={400}
                                      lineHeight={'22px'}>After one business day, you will be eligible to 1:1 withdraw
                                  NEST 2.0 tokens, if you find that you still do not have access to withdraw NEST 2.0,
                                  please contact us!</Text>
                              </Stack>
                            </HStack>
                            <HStack spacing={'24px'}>
                              <Stack h={'40px'} w={'40px'}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                </svg>
                              </Stack>
                              <Button px={'24px'} size={'sm'} minH={'36px'} fontSize={'12px'} lineHeight={'16px'}>
                                <HStack spacing={'12px'}>
                                  <Stack w={'20px'} h={'20px'}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337ZM14.5791 6.80976C14.6562 5.97754 13.7311 6.32022 13.7311 6.32022C13.0481 6.58882 12.3437 6.86179 11.6316 7.13771C9.42383 7.99324 7.1429 8.87712 5.19989 9.747C4.14633 10.1142 4.76305 10.4813 4.76305 10.4813L6.43333 10.9709C7.20421 11.1912 7.61535 10.9464 7.61535 10.9464L11.2129 8.62107C12.4977 7.78885 12.1893 8.47421 11.881 8.76794L9.18283 11.2156C8.77169 11.5583 8.97726 11.852 9.15714 11.9989C9.66692 12.4262 10.921 13.208 11.4685 13.5493C11.6109 13.6382 11.7056 13.6971 11.7268 13.7123C11.8553 13.8102 12.5491 14.2508 13.0116 14.1529C13.4742 14.055 13.5255 13.492 13.5255 13.492L14.1423 9.64911C14.2348 8.98196 14.3409 8.34071 14.4256 7.82855C14.5056 7.34479 14.5666 6.97621 14.5791 6.80976Z"
                                            fill="#333333"/>
                                    </svg>
                                  </Stack>
                                  <Text>Contact us</Text>
                                </HStack>
                              </Button>
                            </HStack>
                          </Stack>
                        </Stack>
                      )
                    ) : (
                      <Stack>
                        <HStack bg={'rgba(255,255,255,0.8)'} px={'20px'} py={'24px'} borderRadius={'12px'} gap={'24px'}
                                w={'full'}>
                          <Stack h={'40px'} w={'40px'}>
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd"
                                    d="M2.16699 19.9998C2.16699 9.87461 10.3751 1.6665 20.5003 1.6665C30.6256 1.6665 38.8337 9.87461 38.8337 19.9998C38.8337 30.1251 30.6256 38.3332 20.5003 38.3332C10.3751 38.3332 2.16699 30.1251 2.16699 19.9998ZM11.3337 17.4998C11.3337 16.5794 12.0799 15.8332 13.0003 15.8332H23.9766L20.9885 12.845C20.3376 12.1941 20.3376 11.1389 20.9885 10.488C21.6394 9.83712 22.6946 9.83712 23.3455 10.488L29.1788 16.3213C29.8297 16.9722 29.8297 18.0275 29.1788 18.6783C29.019 18.8381 28.8349 18.9587 28.6383 19.04C28.444 19.1206 28.2312 19.1655 28.008 19.1665L28.0003 19.1665H13.0003C12.0799 19.1665 11.3337 18.4203 11.3337 17.4998ZM11.4601 21.8619C11.3786 22.0584 11.3337 22.2739 11.3337 22.4998C11.3337 22.9554 11.5165 23.3683 11.8127 23.6692C11.8161 23.6726 11.8195 23.676 11.8228 23.6794L17.6551 29.5117C18.306 30.1626 19.3613 30.1626 20.0122 29.5117C20.663 28.8608 20.663 27.8055 20.0122 27.1547L17.024 24.1665H28.0003C28.9208 24.1665 29.667 23.4203 29.667 22.4998C29.667 21.5794 28.9208 20.8332 28.0003 20.8332H13.0003C12.9978 20.8332 12.9952 20.8332 12.9926 20.8332C12.5401 20.8352 12.1301 21.0177 11.831 21.3123C11.8248 21.3183 11.8188 21.3244 11.8127 21.3305C11.6574 21.4881 11.5399 21.669 11.4601 21.8619Z"
                                    fill="#030308"/>
                            </svg>
                          </Stack>
                          <Stack spacing={'8px'}>
                            <Text fontSize={'20px'} fontWeight={700}
                                  lineHeight={'28px'}>{Number(balanceOfNEST?.formatted).toLocaleString('en-US', {
                              maximumFractionDigits: 2,
                            })} NEST</Text>
                            <Text fontSize={'16px'} fontWeight={400} lineHeight={'22px'}
                                  color={'rgba(3,3,8,0.6)'}>Replacement Limit</Text>
                          </Stack>
                          <Spacer/>
                          {
                            allowanceData && allowanceData >= (balanceOfNEST?.value || 0) ? (
                              <Button isDisabled={!switchOld} onClick={switchOld} size={'sm'} minH={'36px'} px={'12px'}
                                      fontSize={'12px'} lineHeight={'16px'}>
                                {switchOldStatus == 'idle' && 'Submit'}
                                {(switchOldStatus == 'loading' || waitSwitchOldStatus === 'loading') && 'Submitting'}
                                {waitSwitchOldStatus === 'success' && 'Submit success'}
                                {(switchOldStatus == 'error' || waitSwitchOldStatus === 'error') && 'Submit error'}
                              </Button>
                            ) : (
                              <Button onClick={approve} isDisabled={!approve} size={'sm'} minH={'36px'}
                                      fontSize={'12px'} lineHeight={'16px'}>
                                {approveStatus == 'idle' && 'Approve'}
                                {(approveStatus == 'loading' || waitApproveStatus === 'loading') && 'Approving'}
                                {waitApproveStatus === 'success' && 'Approve success'}
                                {(approveStatus == 'error' || waitApproveStatus === 'error') && 'Approve error'}
                              </Button>
                            )
                          }
                        </HStack>
                      </Stack>
                    )
                  ) : (
                    <Button onClick={() => connect({
                      chainId: 97,
                    })}>
                      Connect Wallet
                    </Button>
                  )
                }
              </HStack>
            )
          }
        </Stack>
      </Stack>
      <Spacer/>
      <FooterMobile/>
    </Stack>
  )

  const pcPage = (
    <Stack bgSize={'cover'} bgImage={"image/Swap/bg.png"} bgPosition={"center"} minH={'100vh'}>
      {SEO}
      <Navigation/>
      <Stack align={"center"} w={'full'} px={'40px'}>
        <Stack py={'120px'} maxW={'1600px'}>
          <Stack textAlign={"center"} pt={'24px'} spacing={0}>
            <Text fontSize={'48px'} fontWeight={700} lineHeight={'60px'}>Replace your NEST 1.0 to NEST 2.0 at a ratio of
              1:1</Text>
            <Text fontSize={'16px'} fontWeight={400} color={'rgba(3,3,8, 0.6)'} mt={'24px'}
                  lineHeight={'22px'}>A single address can only submit a request for a replacement token once.</Text>
            <HStack align={"center"} justify={"center"}>
              <Stack>
                <HStack spacing={'24px'} mt={'44px'} justifyContent={"center"}>
                  <Stack p={'20px'} spacing={'20px'} bg={'rgba(255, 255, 255, 0.80)'} borderRadius={'12px'}
                         align={"center"}>
                    <Stack w={'80px'} h={'80px'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <g opacity="0.6">
                          <path
                            d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                            fill="black"/>
                          <path
                            d="M60 32.3442C60 33.6261 59.7473 35.1643 59.4945 36.9588L55.4507 57.7245C55.4507 58.2373 54.9452 58.4936 54.6925 58.4936H49.6377C49.1322 58.4936 48.6267 57.9809 48.8795 57.4682L52.9233 36.9588C53.176 35.677 53.176 34.6515 53.176 33.8824C53.176 28.7551 50.3959 25.9351 44.3302 25.9351C37.0007 25.9351 31.946 30.0369 30.4295 38.2407L26.6384 57.9809C26.6384 58.4936 26.133 58.75 25.8802 58.75H20.8254C20.32 58.75 19.8145 58.2373 20.0672 57.7245L27.1439 21.0641C27.1439 20.5514 27.6494 20.295 27.9021 20.295H32.7042C33.2097 20.295 33.7151 20.8077 33.4624 21.3205L33.2097 22.8587C32.9569 23.6278 33.9679 24.1405 34.4734 23.6278C37.759 21.0641 41.8028 20.0386 46.3521 20.0386C54.9452 19.5259 60 24.1405 60 32.3442Z"
                            fill="white"/>
                        </g>
                      </svg>
                    </Stack>
                    <HStack py={'8px'} px={'12px'} borderRadius={'8px'} border={'1px solid rgba(28, 28, 35, 0.08)'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M6.51578 2C6.79192 2.00036 7.01549 2.22451 7.01512 2.50065L7.00597 9.50065C7.00561 9.7768 6.78146 10.0004 6.50532 10C6.22918 9.99964 6.00561 9.77549 6.00598 9.49935L6.01513 2.49935C6.01549 2.2232 6.23964 1.99964 6.51578 2Z"
                              fill="#030308" fillOpacity="0.6"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H10C10.2761 5.5 10.5 5.72386 10.5 6C10.5 6.27614 10.2761 6.5 10 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z"
                              fill="#030308" fillOpacity="0.6"/>
                      </svg>
                      <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'} color={'#030308'}>Add NEST1.0 to
                        wallet</Text>
                    </HStack>
                    <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'} color={'rgba(3, 3, 8, 0.60)'}>NEST1.0
                      (ETH): 0x04abeda201850ac0124161f037efd70c74ddc74c</Text>
                  </Stack>
                  <Stack width={'41px'} h={'12px'}>
                    <svg width="41" height="12" viewBox="0 0 41 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40.5 6L30.5 0.2265L30.5 11.7735L40.5 6ZM0.5 7L31.5 7L31.5 5L0.5 5L0.5 7Z"
                            fill="#EAAA00"/>
                    </svg>
                  </Stack>
                  <Stack p={'20px'} spacing={'20px'} bg={'rgba(255, 255, 255, 0.80)'} borderRadius={'12px'}
                         align={"center"}>
                    <Stack w={'80px'} h={'80px'}>
                      <svg width="89" height="88" viewBox="0 0 89 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M40.5 88C62.5914 88 80.5 70.0914 80.5 48C80.5 25.9086 62.5914 8 40.5 8C18.4086 8 0.5 25.9086 0.5 48C0.5 70.0914 18.4086 88 40.5 88Z"
                          fill="black"/>
                        <path
                          d="M60.5 40.3442C60.5 41.6261 60.2473 43.1643 59.9945 44.9588L55.9507 65.7245C55.9507 66.2373 55.4452 66.4936 55.1925 66.4936H50.1377C49.6322 66.4936 49.1267 65.9809 49.3795 65.4682L53.4233 44.9588C53.676 43.677 53.676 42.6515 53.676 41.8824C53.676 36.7551 50.8959 33.9351 44.8302 33.9351C37.5007 33.9351 32.446 38.0369 30.9295 46.2407L27.1384 65.9809C27.1384 66.4936 26.633 66.75 26.3802 66.75H21.3254C20.82 66.75 20.3145 66.2373 20.5672 65.7245L27.6439 29.0641C27.6439 28.5514 28.1494 28.295 28.4021 28.295H33.2042C33.7097 28.295 34.2151 28.8077 33.9624 29.3205L33.7097 30.8587C33.4569 31.6278 34.4679 32.1405 34.9734 31.6278C38.259 29.0641 42.3028 28.0386 46.8521 28.0386C55.4452 27.5259 60.5 32.1405 60.5 40.3442Z"
                          fill="white"/>
                        <circle cx="72.5" cy="16" r="16" fill="#EB5D2A"/>
                        <path
                          d="M62.2706 21V19.53L66.0506 15.96C66.3493 15.6893 66.5686 15.4467 66.7086 15.232C66.8486 15.0173 66.9419 14.8213 66.9886 14.644C67.0446 14.4667 67.0726 14.3033 67.0726 14.154C67.0726 13.762 66.9373 13.4633 66.6666 13.258C66.4053 13.0433 66.0179 12.936 65.5046 12.936C65.0939 12.936 64.7113 13.0153 64.3566 13.174C64.0113 13.3327 63.7173 13.58 63.4746 13.916L61.8226 12.852C62.1959 12.292 62.7186 11.8487 63.3906 11.522C64.0626 11.1953 64.8373 11.032 65.7146 11.032C66.4426 11.032 67.0773 11.1533 67.6186 11.396C68.1693 11.6293 68.5939 11.9607 68.8926 12.39C69.2006 12.8193 69.3546 13.3327 69.3546 13.93C69.3546 14.2473 69.3126 14.5647 69.2286 14.882C69.1539 15.19 68.9953 15.5167 68.7526 15.862C68.5193 16.2073 68.1739 16.5947 67.7166 17.024L64.5806 19.978L64.1466 19.152H69.6766V21H62.2706ZM72.0371 21.112C71.6638 21.112 71.3418 20.986 71.0711 20.734C70.8098 20.4727 70.6791 20.1413 70.6791 19.74C70.6791 19.3387 70.8098 19.0167 71.0711 18.774C71.3418 18.522 71.6638 18.396 72.0371 18.396C72.4198 18.396 72.7418 18.522 73.0031 18.774C73.2645 19.0167 73.3951 19.3387 73.3951 19.74C73.3951 20.1413 73.2645 20.4727 73.0031 20.734C72.7418 20.986 72.4198 21.112 72.0371 21.112ZM78.4355 21.168C77.6328 21.168 76.9141 20.972 76.2795 20.58C75.6448 20.1787 75.1455 19.6 74.7815 18.844C74.4175 18.088 74.2355 17.1733 74.2355 16.1C74.2355 15.0267 74.4175 14.112 74.7815 13.356C75.1455 12.6 75.6448 12.026 76.2795 11.634C76.9141 11.2327 77.6328 11.032 78.4355 11.032C79.2475 11.032 79.9661 11.2327 80.5915 11.634C81.2261 12.026 81.7255 12.6 82.0895 13.356C82.4535 14.112 82.6355 15.0267 82.6355 16.1C82.6355 17.1733 82.4535 18.088 82.0895 18.844C81.7255 19.6 81.2261 20.1787 80.5915 20.58C79.9661 20.972 79.2475 21.168 78.4355 21.168ZM78.4355 19.25C78.8181 19.25 79.1495 19.1427 79.4295 18.928C79.7188 18.7133 79.9428 18.3727 80.1015 17.906C80.2695 17.4393 80.3535 16.8373 80.3535 16.1C80.3535 15.3627 80.2695 14.7607 80.1015 14.294C79.9428 13.8273 79.7188 13.4867 79.4295 13.272C79.1495 13.0573 78.8181 12.95 78.4355 12.95C78.0621 12.95 77.7308 13.0573 77.4415 13.272C77.1615 13.4867 76.9375 13.8273 76.7695 14.294C76.6108 14.7607 76.5315 15.3627 76.5315 16.1C76.5315 16.8373 76.6108 17.4393 76.7695 17.906C76.9375 18.3727 77.1615 18.7133 77.4415 18.928C77.7308 19.1427 78.0621 19.25 78.4355 19.25Z"
                          fill="white"/>
                      </svg>
                    </Stack>
                    <HStack py={'8px'} px={'12px'} borderRadius={'8px'} border={'1px solid rgba(28, 28, 35, 0.08)'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M6.51578 2C6.79192 2.00036 7.01549 2.22451 7.01512 2.50065L7.00597 9.50065C7.00561 9.7768 6.78146 10.0004 6.50532 10C6.22918 9.99964 6.00561 9.77549 6.00598 9.49935L6.01513 2.49935C6.01549 2.2232 6.23964 1.99964 6.51578 2Z"
                              fill="#030308" fillOpacity="0.6"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H10C10.2761 5.5 10.5 5.72386 10.5 6C10.5 6.27614 10.2761 6.5 10 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z"
                              fill="#030308" fillOpacity="0.6"/>
                      </svg>
                      <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'} color={'#030308'}>Add NEST1.0 to
                        wallet</Text>
                    </HStack>
                    <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'} color={'#030308'}>NEST2.0 (ETH):
                      0xcd6926193308d3B371FdD6A6219067E550000000</Text>
                  </Stack>
                </HStack>
                <Stack mt={'40px'}>
                  {
                    isCheckLoading ? (
                      <Stack textAlign={"center"}>
                        <Text>...</Text>
                      </Stack>
                    ) : (
                      <HStack justifyContent={"center"} w={'full'}>
                        {
                          block ? (
                            <HStack w={'full'} px={'40px'} py={'40px'} borderRadius={'12px'}
                                    border={'1px solid #FF1B00'}
                                    background={'#FFD8CC'} spacing={'24px'}>
                              <Stack w={'40px'} h={'40px'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                     fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M38.3327 20.0003C38.3327 30.1255 30.1246 38.3337 19.9993 38.3337C9.87412 38.3337 1.66602 30.1255 1.66602 20.0003C1.66602 9.8751 9.87412 1.66699 19.9993 1.66699C30.1246 1.66699 38.3327 9.8751 38.3327 20.0003ZM16.464 14.1079C15.8131 13.457 14.7578 13.457 14.1069 14.1079C13.4561 14.7587 13.4561 15.814 14.1069 16.4649L17.6423 20.0003L14.1067 23.5359C13.4558 24.1868 13.4558 25.2421 14.1067 25.893C14.7576 26.5438 15.8128 26.5438 16.4637 25.893L19.9994 22.3573L23.535 25.893C24.1859 26.5438 25.2412 26.5438 25.892 25.893C26.5429 25.2421 26.5429 24.1868 25.892 23.5359L22.3564 20.0003L25.8918 16.4649C26.5427 15.814 26.5427 14.7587 25.8918 14.1079C25.2409 13.457 24.1856 13.457 23.5348 14.1079L19.9994 17.6433L16.464 14.1079Z"
                                        fill="#FF1B00"/>
                                </svg>
                              </Stack>
                              <Stack textAlign={"start"}>
                                <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={'700'} color={'#030308'}>Replacement
                                  application failed</Text>
                                <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'400'} color={'#03030899'}>Contact
                                  us for more information</Text>
                              </Stack>
                              <Spacer/>
                              {/*TODO*/}
                              <HStack h={'48px'} spacing={'12px'} px={'24px'} borderRadius={'12px'} bgColor={'#EAAA00'} cursor={'pointer'}>
                                <Stack h={'20px'} w={'20px'}>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337ZM14.5781 6.80976C14.6552 5.97754 13.7301 6.32022 13.7301 6.32022C13.0471 6.58882 12.3427 6.86179 11.6307 7.13771C9.42285 7.99324 7.14193 8.87712 5.19891 9.747C4.14535 10.1142 4.76207 10.4813 4.76207 10.4813L6.43235 10.9709C7.20323 11.1912 7.61438 10.9464 7.61438 10.9464L11.2119 8.62107C12.4967 7.78885 12.1884 8.47421 11.88 8.76794L9.18185 11.2156C8.77071 11.5583 8.97628 11.852 9.15616 11.9989C9.66594 12.4262 10.92 13.208 11.4675 13.5493C11.61 13.6382 11.7046 13.6971 11.7258 13.7123C11.8543 13.8102 12.5481 14.2508 13.0106 14.1529C13.4732 14.055 13.5246 13.492 13.5246 13.492L14.1413 9.64911C14.2338 8.98196 14.3399 8.34071 14.4246 7.82855C14.5047 7.34479 14.5656 6.97621 14.5781 6.80976Z"
                                          fill="#333333"/>
                                  </svg>
                                </Stack>
                                <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}>Contact us</Text>
                              </HStack>
                            </HStack>
                          ) : (
                            address ? (
                              sent ? (
                                pass ? (
                                  received ? (
                                    <HStack borderRadius={'12px'} bg={'#CFF5D0'} border={'1px solid #2ECD3C'}
                                            px={'40px'}
                                            py={'24px'} w={'full'}
                                            gap={'24px'}>
                                      <Stack w={'40px'} h={'40px'}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                          <path fillRule="evenodd" clipRule="evenodd"
                                                d="M32.9639 32.9639C29.6462 36.2816 25.0629 38.3337 20.0003 38.3337C14.9378 38.3337 10.3544 36.2816 7.0367 32.9639C3.71902 29.6462 1.66699 25.0629 1.66699 20.0003C1.66699 14.9378 3.71902 10.3544 7.0367 7.0367C10.3544 3.71902 14.9378 1.66699 20.0003 1.66699C25.0629 1.66699 29.6462 3.71902 32.9639 7.0367C36.2816 10.3544 38.3337 14.9378 38.3337 20.0003C38.3337 25.0629 36.2816 29.6462 32.9639 32.9639ZM29.5122 16.1788C30.163 15.528 30.163 14.4727 29.5122 13.8218C28.8613 13.1709 27.806 13.1709 27.1551 13.8218L18.3337 22.6433L14.5122 18.8218C13.8613 18.1709 12.806 18.1709 12.1551 18.8218C11.5043 19.4727 11.5043 20.528 12.1551 21.1788L17.1551 26.1788C17.806 26.8297 18.8613 26.8297 19.5122 26.1788L29.5122 16.1788Z"
                                                fill="#2ECD3C"/>
                                        </svg>
                                      </Stack>
                                      <Stack spacing={'8px'}>
                                        <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={700}>Successfully
                                          claimed {receivedAmount.toLocaleString()} NEST2.0</Text>
                                      </Stack>
                                    </HStack>
                                  ) : (
                                    <HStack borderRadius={'12px'} bg={'#CFF5D0'} border={'1px solid #2ECD3C'}
                                            px={'40px'}
                                            py={'24px'} w={'full'} gap={'24px'}>
                                      <Stack h={'40px'} w={'40px'}>
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                          <path fillRule="evenodd" clipRule="evenodd"
                                                d="M32.9639 32.9639C29.6462 36.2816 25.0629 38.3337 20.0003 38.3337C14.9378 38.3337 10.3544 36.2816 7.0367 32.9639C3.71902 29.6462 1.66699 25.0629 1.66699 20.0003C1.66699 14.9378 3.71902 10.3544 7.0367 7.0367C10.3544 3.71902 14.9378 1.66699 20.0003 1.66699C25.0629 1.66699 29.6462 3.71902 32.9639 7.0367C36.2816 10.3544 38.3337 14.9378 38.3337 20.0003C38.3337 25.0629 36.2816 29.6462 32.9639 32.9639ZM29.5122 16.1788C30.163 15.528 30.163 14.4727 29.5122 13.8218C28.8613 13.1709 27.806 13.1709 27.1551 13.8218L18.3337 22.6433L14.5122 18.8218C13.8613 18.1709 12.806 18.1709 12.1551 18.8218C11.5043 19.4727 11.5043 20.528 12.1551 21.1788L17.1551 26.1788C17.806 26.8297 18.8613 26.8297 19.5122 26.1788L29.5122 16.1788Z"
                                                fill="#2ECD3C"/>
                                        </svg>
                                      </Stack>
                                      <Stack spacing={'8px'} align={"start"}>
                                        {/*Balance*/}
                                        <Text fontSize={'20px'} lineHeight={'28px'}
                                              fontWeight={700}>{sentAmount.toLocaleString()} NEST 2.0</Text>
                                        <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={400}
                                              color={'rgba(3, 3, 8, 0.60)'}>Available for Claim</Text>
                                      </Stack>
                                      <Spacer/>
                                      <Button onClick={withdrawNew} isDisabled={!withdrawNew}>
                                        {withdrawNewStatus == 'idle' && 'Claim NEST2.0'}
                                        {(withdrawNewStatus == 'loading' || waitWithdrawNewStatus === 'loading') && 'Withdrawing'}
                                        {waitWithdrawNewStatus === 'success' && 'Withdraw success'}
                                        {(withdrawNewStatus == 'error' || waitWithdrawNewStatus === 'error') && 'Withdraw error'}
                                      </Button>
                                    </HStack>
                                  )
                                ) : (
                                  <HStack px={'40px'} py={'24px'} bg={'rgba(234, 170, 0, 0.40)'}
                                          border={'1px solid #EAAA00'} w={'full'}
                                          minW={'540px'} borderRadius={'12px'} spacing={'24px'}>
                                    <Stack w={'40px'} h={'40px'}>
                                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                           xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M1.66699 20.0003C1.66699 9.8751 9.8751 1.66699 20.0003 1.66699C30.1256 1.66699 38.3337 9.8751 38.3337 20.0003C38.3337 30.1256 30.1256 38.3337 20.0003 38.3337C9.8751 38.3337 1.66699 30.1256 1.66699 20.0003ZM21.6739 10.0006C21.674 9.08012 20.9279 8.33385 20.0074 8.33376C19.0869 8.33367 18.3407 9.07979 18.3406 10.0003L18.3396 20.0076C18.3395 20.4497 18.5151 20.8737 18.8277 21.1863L25.8939 28.2524C26.5448 28.9033 27.6 28.9033 28.2509 28.2524C28.9018 27.6016 28.9018 26.5463 28.2509 25.8954L21.673 19.3175L21.6739 10.0006Z"
                                              fill="#EAAA00"/>
                                      </svg>
                                    </Stack>
                                    <Stack align={"start"}>
                                      <Text color={'#030308'} fontSize={'20px'} fontWeight={700} textAlign={"start"}
                                            lineHeight={'28px'}>Submit 12,555 NEST 1.0 application</Text>
                                      <Text fontSize={'16px'} fontWeight={400} maxW={'500px'} textAlign={"start"}
                                            color={'rgba(3, 3, 8, 0.60)'}
                                            lineHeight={'22px'}>Application will be reviewed within 1 business day and
                                        your token can be replaced upon approval.</Text>
                                    </Stack>
                                    <Spacer/>
                                    <Button px={'24px'}>
                                      <HStack spacing={'12px'}>
                                        <Stack w={'20px'} h={'20px'}>
                                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337ZM14.5791 6.80976C14.6562 5.97754 13.7311 6.32022 13.7311 6.32022C13.0481 6.58882 12.3437 6.86179 11.6316 7.13771C9.42383 7.99324 7.1429 8.87712 5.19989 9.747C4.14633 10.1142 4.76305 10.4813 4.76305 10.4813L6.43333 10.9709C7.20421 11.1912 7.61535 10.9464 7.61535 10.9464L11.2129 8.62107C12.4977 7.78885 12.1893 8.47421 11.881 8.76794L9.18283 11.2156C8.77169 11.5583 8.97726 11.852 9.15714 11.9989C9.66692 12.4262 10.921 13.208 11.4685 13.5493C11.6109 13.6382 11.7056 13.6971 11.7268 13.7123C11.8553 13.8102 12.5491 14.2508 13.0116 14.1529C13.4742 14.055 13.5255 13.492 13.5255 13.492L14.1423 9.64911C14.2348 8.98196 14.3409 8.34071 14.4256 7.82855C14.5056 7.34479 14.5666 6.97621 14.5791 6.80976Z"
                                                  fill="#333333"/>
                                          </svg>
                                        </Stack>
                                        <Text>Contact us</Text>
                                      </HStack>
                                    </Button>
                                  </HStack>
                                )
                              ) : (
                                <HStack bg={'rgba(255,255,255,0.8)'} px={'40px'} py={'24px'} borderRadius={'12px'}
                                        w={'full'} gap={'24px'}>
                                  <Stack h={'40px'} w={'40px'}>
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd"
                                            d="M2.16699 19.9998C2.16699 9.87461 10.3751 1.6665 20.5003 1.6665C30.6256 1.6665 38.8337 9.87461 38.8337 19.9998C38.8337 30.1251 30.6256 38.3332 20.5003 38.3332C10.3751 38.3332 2.16699 30.1251 2.16699 19.9998ZM11.3337 17.4998C11.3337 16.5794 12.0799 15.8332 13.0003 15.8332H23.9766L20.9885 12.845C20.3376 12.1941 20.3376 11.1389 20.9885 10.488C21.6394 9.83712 22.6946 9.83712 23.3455 10.488L29.1788 16.3213C29.8297 16.9722 29.8297 18.0275 29.1788 18.6783C29.019 18.8381 28.8349 18.9587 28.6383 19.04C28.444 19.1206 28.2312 19.1655 28.008 19.1665L28.0003 19.1665H13.0003C12.0799 19.1665 11.3337 18.4203 11.3337 17.4998ZM11.4601 21.8619C11.3786 22.0584 11.3337 22.2739 11.3337 22.4998C11.3337 22.9554 11.5165 23.3683 11.8127 23.6692C11.8161 23.6726 11.8195 23.676 11.8228 23.6794L17.6551 29.5117C18.306 30.1626 19.3613 30.1626 20.0122 29.5117C20.663 28.8608 20.663 27.8055 20.0122 27.1547L17.024 24.1665H28.0003C28.9208 24.1665 29.667 23.4203 29.667 22.4998C29.667 21.5794 28.9208 20.8332 28.0003 20.8332H13.0003C12.9978 20.8332 12.9952 20.8332 12.9926 20.8332C12.5401 20.8352 12.1301 21.0177 11.831 21.3123C11.8248 21.3183 11.8188 21.3244 11.8127 21.3305C11.6574 21.4881 11.5399 21.669 11.4601 21.8619Z"
                                            fill="#030308"/>
                                    </svg>
                                  </Stack>
                                  <Stack spacing={'8px'} minW={'150px'} textAlign={"start"}>
                                    <Text fontSize={'20px'} fontWeight={700}
                                          lineHeight={'28px'}>{Number(balanceOfNEST?.formatted).toLocaleString('en-US', {
                                      maximumFractionDigits: 2,
                                    })} NEST</Text>
                                    <Text fontSize={'16px'} fontWeight={400} lineHeight={'22px'}
                                          color={'rgba(3,3,8,0.6)'}>NEST1.0 Balance</Text>
                                  </Stack>
                                  <Spacer/>
                                  {
                                    allowanceData && allowanceData >= (balanceOfNEST?.value || 0) ? (
                                      <Button isDisabled={!switchOld} onClick={switchOld}>
                                        {switchOldStatus == 'idle' && 'Submit'}
                                        {(switchOldStatus == 'loading' || waitSwitchOldStatus === 'loading') && 'Submitting'}
                                        {waitSwitchOldStatus === 'success' && 'Submit success'}
                                        {(switchOldStatus == 'error' || waitSwitchOldStatus === 'error') && 'Submit error'}
                                      </Button>
                                    ) : (
                                      <Button onClick={() => approve?.()} variant={'solid'}
                                              isDisabled={!approve || balanceOfNEST?.value === BigInt(0)}>
                                        {approveStatus == 'idle' && 'Approve'}
                                        {(approveStatus == 'loading' || waitApproveStatus === 'loading') && 'Approving'}
                                        {waitApproveStatus === 'success' && 'Approve success'}
                                        {(approveStatus == 'error' || waitApproveStatus === 'error') && 'Approve error'}
                                      </Button>
                                    )
                                  }
                                </HStack>
                              )
                            ) : (
                              <Button onClick={() => connect({
                                chainId: 97,
                              })}>
                                Connect Wallet
                              </Button>
                            )
                          )
                        }
                      </HStack>
                    )
                  }
                </Stack>
              </Stack>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
      <Spacer/>
      <Footer/>
    </Stack>
  )

  return (
    isMobile ? mobilePage : pcPage
  )
}

export default Switch