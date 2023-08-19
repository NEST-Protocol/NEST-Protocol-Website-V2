import {
  Button,
  HStack,
  Modal, ModalContent,
  ModalOverlay,
  Spacer,
  Stack,
  Text, Link,
  useDisclosure,
  useMediaQuery
} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Head from "next/head";
import Footer from "../../components/Footer";
import {
  erc20ABI, mainnet,
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
import {useEffect, useState} from "react";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import {NEST_SWITCH_ABI} from "../../lib/abi";
import {NEST_ADDRESS, NEST_SWITCH_ADDRESS, NEW_NEST_ADDRESS} from "../../lib/address";
import useSWR from "swr";
import {MerkleTree} from "merkletreejs"
import {keccak256} from "@ethersproject/keccak256"
import {useToast} from '@chakra-ui/react'

const Switch = () => {
  const toast = useToast()
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  const title = "NEST Protocol | NEST Replacement"
  const description = "NEST Protocol is the stochastic computer based on PVM, enables the generation and programming of stochastic assets."
  const {connect, connectors} = useConnect({
    // @ts-ignore
    connector: new InjectedConnector({
      chains: [mainnet],
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
    token: NEST_ADDRESS[chain?.id ?? mainnet.id],
    cacheTime: 1_000,
    watch: true,
    enabled: !!address
  })
  // need allowanceRefetch when address and chain.id changed
  const {data: allowanceData, refetch: allowanceRefetch} = useContractRead({
    abi: erc20ABI,
    address: NEST_ADDRESS[chain?.id ?? mainnet.id],
    functionName: 'allowance',
    args: [
      address!,
      NEST_SWITCH_ADDRESS[chain?.id ?? mainnet.id],
    ],
    cacheTime: 1_000,
    watch: true,
    enabled: !!address,
  })
  // need refetchApprovePrepare when chain.id changed, balanceOfNEST changed
  const {config: approvePrepareConfig, refetch: refetchApprovePrepare,} = usePrepareContractWrite({
    address: NEST_ADDRESS[chain?.id ?? mainnet.id],
    abi: erc20ABI,
    functionName: 'approve',
    args: [
      NEST_SWITCH_ADDRESS[chain?.id ?? mainnet.id],
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
    address: NEST_SWITCH_ADDRESS[chain?.id ?? mainnet.id],
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
    address: NEST_SWITCH_ADDRESS[chain?.id ?? mainnet.id],
    abi: NEST_SWITCH_ABI,
    functionName: 'withdrawNew',
    args: [
      proof
    ],
    enabled: !!address && checkData?.received !== 'true'
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
          chainId: mainnet.id,
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
  const [sentAmount, setSentAmount] = useState<number>(0);
  const {isOpen, onOpen, onClose} = useDisclosure()

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
    if (!sentAmount && balanceOfNEST && balanceOfNEST?.value > 0) {
      setSentAmount(Number(balanceOfNEST?.formatted.replace(',', '')))
    }
  }, [address, chain?.id, balanceOfNEST, sentAmount])

  useEffect(() => {
    if (switchOldStatus == 'error' || switchOldStatus === 'success') {
      setTimeout(() => {
        switchOldReset()
      }, 3_000)
    }
  }, [switchOldStatus, waitSwitchOldStatus])

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
    if (withdrawNewStatus === 'success' || waitWithdrawNewStatus === 'success') {
      setReceived(true)
    }
  }, [withdrawNewStatus, waitWithdrawNewStatus])

  useEffect(() => {
    if (address && checkData) {
      setSent(JSON.parse(checkData.sent))
      setReceived(JSON.parse(checkData.received))
      setBlock(JSON.parse(checkData.block))
      setReceivedAmount(JSON.parse(checkData.receivedAmount))
      setSentAmount(JSON.parse(checkData.sentAmount))
      if (!JSON.parse(checkData.received)) {
        const can = nodesData.map((i: string) => i.toLowerCase()).includes(address.toLowerCase())
        setPass(JSON.parse(checkData.pass) && can)
      } else {
        setPass(JSON.parse(checkData.pass))
      }
    }
  }, [checkData, nodesData, address])

  const addTokenToMetamask = async (address: string, filename: string) => {
    // add token to metamask
    try {
      // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.
      // @ts-ignore
      const wasAdded = await window?.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: address, // The address of the token.
            symbol: 'NEST', // A ticker symbol or shorthand, up to 5 characters.
            decimals: 18, // The number of decimals in the token.
            image: `https://bafybeidwmzhy6njm66meh5g5tyuva3sl6yaz7ncjfquv4or7xfctjj3ylq.ipfs.nftstorage.link/${filename}.svg`,
          },
        },
      });

      if (wasAdded) {
        console.log('Thanks for your interest!');
      } else {
        console.log('Your loss!');
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        <Stack pt={'40px'} pb={'80px'} w={'full'} spacing={0}>
          <Stack textAlign={"center"} pt={'24px'} spacing={'16px'}>
            <Text fontSize={'24px'} fontWeight={700} lineHeight={'32px'}>Replace your NEST 1.0 to NEST 2.0 at a ratio of
              1:1</Text>
            <HStack>
              <Text fontSize={'16px'} fontWeight={400} color={'rgba(3,3,8, 0.6)'}
                    lineHeight={'22px'}>A single address can only submit a request for a replacement token once.</Text>
            </HStack>
            <HStack spacing={'4px'} justify={'center'}>
              <Link href={'https://www.nestprotocol.org/blogs/Guide-of-NEST-2.0-token-replacement-on-Ethereum'}
                    isExternal color={'#EAAA00'}>Guide</Link>
              <Stack w={'17px'} h={'16px'}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.878 7.76435C12.0081 7.89452 12.0081 8.10557 11.878 8.23575L6.2211 13.8926C6.09093 14.0228 5.87987 14.0228 5.7497 13.8926L5.26443 13.4073C5.13425 13.2772 5.13425 13.0661 5.26443 12.9359L10.2003 8.00005L5.26443 3.06416C5.13425 2.93399 5.13425 2.72293 5.26443 2.59276L5.7497 2.10749C5.87987 1.97731 6.09093 1.97732 6.2211 2.10749L11.878 7.76435Z"
                        fill="#EAAA00"/>
                </svg>
              </Stack>
            </HStack>
          </Stack>
          {
            isCheckLoading ? (
              <Stack textAlign={"center"}>
                <Text>...</Text>
              </Stack>
            ) : (
              <HStack justifyContent={"center"} py={'24px'} w={'full'}>
                {
                  address && (
                    block ? (
                      <Stack w={'full'} px={'20px'} py={'24px'} borderRadius={'12px'}
                             border={'1px solid #FF1B00'} spacing={'12px'}
                             background={'#FFD8CC'}>
                        <HStack spacing={'16px'}>
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
                        </HStack>
                        <HStack ml={'56px'}>
                          <Button minH={'36px'} px={'12px'} onClick={() => {
                            window.location.href = 'https://t.me/nest_chat'
                          }}>
                            <HStack>
                              <Stack h={'14px'} w={'14px'}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd"
                                        d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337ZM14.5781 6.80976C14.6552 5.97754 13.7301 6.32022 13.7301 6.32022C13.0471 6.58882 12.3427 6.86179 11.6307 7.13771C9.42285 7.99324 7.14193 8.87712 5.19891 9.747C4.14535 10.1142 4.76207 10.4813 4.76207 10.4813L6.43235 10.9709C7.20323 11.1912 7.61438 10.9464 7.61438 10.9464L11.2119 8.62107C12.4967 7.78885 12.1884 8.47421 11.88 8.76794L9.18185 11.2156C8.77071 11.5583 8.97628 11.852 9.15616 11.9989C9.66594 12.4262 10.92 13.208 11.4675 13.5493C11.61 13.6382 11.7046 13.6971 11.7258 13.7123C11.8543 13.8102 12.5481 14.2508 13.0106 14.1529C13.4732 14.055 13.5246 13.492 13.5246 13.492L14.1413 9.64911C14.2338 8.98196 14.3399 8.34071 14.4246 7.82855C14.5047 7.34479 14.5656 6.97621 14.5781 6.80976Z"
                                        fill="#333333"/>
                                </svg>
                              </Stack>
                              <Text fontSize={'12px'} lineHeight={'16px'} fontWeight={'700'}>Contact us</Text>
                            </HStack>
                          </Button>
                        </HStack>
                      </Stack>
                    ) : (
                      sent ? (
                        pass ? (
                          received ? (
                            <HStack borderRadius={'12px'} bg={'#CFF5D0'} border={'1px solid #2ECD3C'}
                                    px={'20px'} py={'24px'} w={'full'} gap={'16px'}>
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
                                  claimed<br/>{receivedAmount.toLocaleString()} NEST2.0</Text>
                              </Stack>
                            </HStack>
                          ) : (
                            <HStack borderRadius={'12px'} bg={'#CFF5D0'} border={'1px solid #2ECD3C'} align={"start"}
                                    px={'20px'} py={'24px'} w={'full'} gap={'16px'}>
                              <Stack h={'58px'} w={'40px'} justify={"center"}>
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
                                      fontWeight={700}>{sentAmount?.toLocaleString()} NEST 2.0</Text>
                                <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={400}
                                      color={'rgba(3, 3, 8, 0.60)'}>Available for Claim</Text>
                                <Button onClick={withdrawNew} isDisabled={!withdrawNew} px={'12px'} minH={'36px'}
                                        fontSize={'12px'} lineHeight={'16px'}>
                                  {withdrawNewStatus == 'idle' && 'Claim NEST2.0'}
                                  {(withdrawNewStatus == 'loading' || waitWithdrawNewStatus === 'loading') && 'Withdrawing'}
                                  {waitWithdrawNewStatus === 'success' && 'Withdraw success'}
                                  {(withdrawNewStatus == 'error' || waitWithdrawNewStatus === 'error') && 'Withdraw error'}
                                </Button>
                              </Stack>
                            </HStack>
                          )
                        ) : (
                          <Stack px={'20px'} py={'24px'} bg={'rgba(234, 170, 0, 0.40)'}
                                 border={'1px solid #EAAA00'} w={'full'} spacing={'12px'}
                                 borderRadius={'12px'}>
                            <HStack spacing={'16px'}>
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
                                      lineHeight={'28px'}>You have submitted {sentAmount?.toLocaleString()} NEST for
                                  replacement!</Text>
                                <Text fontSize={'16px'} fontWeight={400} maxW={'500px'} textAlign={"start"}
                                      color={'rgba(3, 3, 8, 0.60)'}
                                      lineHeight={'22px'}>Application will be reviewed within 1 business day and your
                                  token can be replaced upon approval.</Text>
                              </Stack>
                            </HStack>
                            <HStack>
                              <Button px={'12px'} ml={'56px'} minH={'36px'} fontSize={'12px'} fontWeight={'700'}
                                      lineHeight={'16px'}
                                      onClick={() => {
                                        window.location.href = 'https://t.me/nest_chat'
                                      }}>
                                <HStack spacing={'8px'}>
                                  <Stack w={'14px'} h={'14px'}>
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
                        )
                      ) : (
                        <HStack bg={'rgba(255,255,255,0.8)'} px={'20px'} py={'24px'} borderRadius={'12px'}
                                w={'full'} gap={'16px'}>
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
                              <Button isDisabled={!switchOld} onClick={switchOld} px={'12px'} minH={'36px'}
                                      fontSize={'12px'} borderRadius={'8px'} lineHeight={'16px'}>
                                {switchOldStatus == 'idle' && 'Submit'}
                                {(switchOldStatus == 'loading' || waitSwitchOldStatus === 'loading') && 'Submitting'}
                                {waitSwitchOldStatus === 'success' && 'Submit success'}
                                {(switchOldStatus == 'error' || waitSwitchOldStatus === 'error') && 'Submit error'}
                              </Button>
                            ) : (
                              <Button onClick={onOpen} variant={'solid'} px={'12px'} minH={'36px'} fontSize={'12px'}
                                      lineHeight={'16px'} borderRadius={'8px'}
                                      isDisabled={!approve || balanceOfNEST?.value === BigInt(0)}>
                                Approve
                              </Button>
                            )
                          }
                        </HStack>
                      )
                    )
                  )
                }
              </HStack>
            )
          }
          <Stack p={'20px'} spacing={'12px'} align={"center"} borderRadius={'12px'} bgColor={'white'}>
            <Stack w={'48px'} h={'48px'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g opacity="0.6">
                  <path
                    d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                    fill="black"/>
                  <path
                    d="M36 19.4065C36 20.1756 35.8484 21.0986 35.6967 22.1753L33.2704 34.6347C33.2704 34.9424 32.9671 35.0962 32.8155 35.0962H29.7826C29.4793 35.0962 29.176 34.7885 29.3277 34.4809L31.754 22.1753C31.9056 21.4062 31.9056 20.7909 31.9056 20.3295C31.9056 17.2531 30.2375 15.561 26.5981 15.561C22.2004 15.561 19.1676 18.0222 18.2577 22.9444L15.9831 34.7885C15.9831 35.0962 15.6798 35.25 15.5281 35.25H12.4953C12.192 35.25 11.8887 34.9424 12.0403 34.6347L16.2864 12.6385C16.2864 12.3308 16.5896 12.177 16.7413 12.177H19.6225C19.9258 12.177 20.2291 12.4846 20.0774 12.7923L19.9258 13.7152C19.7741 14.1767 20.3807 14.4843 20.684 14.1767C22.6554 12.6385 25.0817 12.0232 27.8113 12.0232C32.9671 11.7155 36 14.4843 36 19.4065Z"
                    fill="white"/>
                </g>
              </svg>
            </Stack>
            <HStack px={'12px'} py={'8px'} spacing={'4px'} borderRadius={'8px'}
                    onClick={() => addTokenToMetamask(NEST_ADDRESS[chain?.id || mainnet.id], 'old')}
                    border={'1px solid rgba(28, 28, 35, 0.08)'}>
              <Stack w={'13px'} h={'12px'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M6.51578 2C6.79192 2.00036 7.01549 2.22451 7.01512 2.50065L7.00597 9.50065C7.00561 9.7768 6.78146 10.0004 6.50532 10C6.22918 9.99964 6.00561 9.77549 6.00598 9.49935L6.01513 2.49935C6.01549 2.2232 6.23964 1.99964 6.51578 2Z"
                        fill="#030308" fillOpacity="0.6"/>
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H10C10.2761 5.5 10.5 5.72386 10.5 6C10.5 6.27614 10.2761 6.5 10 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z"
                        fill="#030308" fillOpacity="0.6"/>
                </svg>
              </Stack>
              <Text fontSize={'12px'} lineHeight={'16px'} fontWeight={'400'} color={'#030308'}>Add NEST1.0 to
                wallet</Text>
            </HStack>
            <HStack align={'end'}>
              <Text color={'#03030899'} textAlign={'center'} fontSize={'12px'} fontWeight={'400'} lineHeight={'16px'}>
                NEST1.0 (ETH)<br/>
                {NEST_ADDRESS[chain?.id || mainnet.id]}
              </Text>
              <Stack w={'12px'} h={'12px'} mb={'2px'}
                     onClick={() => {
                       navigator.clipboard.writeText(NEST_ADDRESS[chain?.id || mainnet.id])
                       toast({
                         duration: 3000,
                         position: 'top',
                         render: () => (
                           <Stack color='#171A1F' w={'120px'} px={'12px'} py={'8px'} bg='white' fontSize={'14px'}
                                  lineHeight={'20px'}
                                  fontWeight={'700'} borderRadius={'6px'}>
                             <Text>Copy success!</Text>
                           </Stack>
                         ),
                       })
                     }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <g clipPath="url(#clip0_2170_12380)">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M3.95312 1.75C3.84094 1.75 3.75 1.84094 3.75 1.95312V2.75H8.04688C8.71134 2.75 9.25 3.28866 9.25 3.95312V8.25H10.0469C10.1591 8.25 10.25 8.15906 10.25 8.04688V1.95312C10.25 1.84094 10.1591 1.75 10.0469 1.75H3.95312ZM9.25 9.25H10.0469C10.7113 9.25 11.25 8.71134 11.25 8.04688V1.95312C11.25 1.28866 10.7113 0.75 10.0469 0.75H3.95312C3.28866 0.75 2.75 1.28866 2.75 1.95312V2.75H1.95312C1.28866 2.75 0.75 3.28866 0.75 3.95312V10.0469C0.75 10.7113 1.28866 11.25 1.95312 11.25H8.04688C8.71134 11.25 9.25 10.7113 9.25 10.0469V9.25ZM1.95312 3.75C1.84094 3.75 1.75 3.84094 1.75 3.95312V10.0469C1.75 10.1591 1.84094 10.25 1.95312 10.25H8.04688C8.15906 10.25 8.25 10.1591 8.25 10.0469V3.95312C8.25 3.84094 8.15906 3.75 8.04688 3.75H1.95312Z"
                          fill="#030308" fillOpacity="0.6"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2170_12380">
                      <rect width="12" height="12" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Stack>
            </HStack>
          </Stack>
          <Stack align={"center"}>
            <Stack h={'24px'} w={'12px'}>
              <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 24L11.7735 14H0.226497L6 24ZM5 0L5 15H7L7 0L5 0Z" fill="#EAAA00"/>
              </svg>
            </Stack>
          </Stack>
          <Stack p={'20px'} spacing={'12px'} align={"center"} borderRadius={'12px'} bgColor={'white'}>
            <Stack w={'48px'} h={'48px'}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.8182 47.9996C33.868 47.9996 43.6364 38.2313 43.6364 26.1815C43.6364 14.1316 33.868 4.36328 21.8182 4.36328C9.76833 4.36328 0 14.1316 0 26.1815C0 38.2313 9.76833 47.9996 21.8182 47.9996Z"
                  fill="black"/>
                <path
                  d="M32.7274 22.0057C32.7274 22.7049 32.5895 23.5439 32.4516 24.5227L30.2459 35.8495C30.2459 36.1291 29.9702 36.269 29.8323 36.269H27.0752C26.7995 36.269 26.5238 35.9893 26.6616 35.7096L28.8673 24.5227C29.0052 23.8236 29.0052 23.2642 29.0052 22.8447C29.0052 20.048 27.4888 18.5098 24.1802 18.5098C20.1823 18.5098 17.4252 20.7472 16.598 25.2219L14.5301 35.9893C14.5301 36.269 14.2544 36.4088 14.1166 36.4088H11.3594C11.0837 36.4088 10.808 36.1291 10.9458 35.8495L14.8059 15.8529C14.8059 15.5732 15.0816 15.4334 15.2194 15.4334H17.8387C18.1144 15.4334 18.3902 15.7131 18.2523 15.9927L18.1144 16.8317C17.9766 17.2512 18.528 17.5309 18.8037 17.2513C20.5959 15.8529 22.8016 15.2935 25.283 15.2935C29.9702 15.0139 32.7274 17.5309 32.7274 22.0057Z"
                  fill="white"/>
                <circle cx="39.2722" cy="8.72727" r="8.72727" fill="#EB5D2A"/>
                <path
                  d="M37.752 13.001H32.7617V11.9512L34.5537 10.1396C35.0843 9.59603 35.431 9.22005 35.5938 9.01172C35.7565 8.80013 35.8737 8.60482 35.9453 8.42578C36.0169 8.24674 36.0527 8.0612 36.0527 7.86914C36.0527 7.58268 35.973 7.36947 35.8135 7.22949C35.6572 7.08952 35.4473 7.01953 35.1836 7.01953C34.9069 7.01953 34.6383 7.08301 34.3779 7.20996C34.1175 7.33691 33.8457 7.51758 33.5625 7.75195L32.7422 6.78027C33.0938 6.48079 33.3851 6.26921 33.6162 6.14551C33.8473 6.02181 34.0996 5.92741 34.373 5.8623C34.6465 5.79395 34.9525 5.75977 35.291 5.75977C35.737 5.75977 36.1309 5.84115 36.4727 6.00391C36.8145 6.16667 37.0798 6.39453 37.2686 6.6875C37.4574 6.98047 37.5518 7.31576 37.5518 7.69336C37.5518 8.02214 37.4932 8.33138 37.376 8.62109C37.262 8.90755 37.083 9.20215 36.8389 9.50488C36.598 9.80762 36.1715 10.2389 35.5596 10.7988L34.6416 11.6631V11.7314H37.752V13.001ZM38.6455 12.3027C38.6455 12.0293 38.7188 11.8226 38.8652 11.6826C39.0117 11.5426 39.2249 11.4727 39.5049 11.4727C39.7751 11.4727 39.9834 11.5443 40.1299 11.6875C40.2796 11.8307 40.3545 12.0358 40.3545 12.3027C40.3545 12.5599 40.2796 12.7633 40.1299 12.9131C39.9801 13.0596 39.7718 13.1328 39.5049 13.1328C39.2314 13.1328 39.0199 13.0612 38.8701 12.918C38.7204 12.7715 38.6455 12.5664 38.6455 12.3027ZM46.2773 9.43164C46.2773 10.6784 46.0723 11.6012 45.6621 12.2002C45.2552 12.7992 44.627 13.0986 43.7773 13.0986C42.9538 13.0986 42.332 12.7894 41.9121 12.1709C41.4954 11.5524 41.2871 10.6393 41.2871 9.43164C41.2871 8.17188 41.4906 7.24414 41.8975 6.64844C42.3044 6.04948 42.931 5.75 43.7773 5.75C44.6009 5.75 45.2227 6.0625 45.6426 6.6875C46.0658 7.3125 46.2773 8.22721 46.2773 9.43164ZM42.7861 9.43164C42.7861 10.3073 42.861 10.9355 43.0107 11.3164C43.1637 11.694 43.4193 11.8828 43.7773 11.8828C44.1289 11.8828 44.3828 11.6908 44.5391 11.3066C44.6953 10.9225 44.7734 10.2975 44.7734 9.43164C44.7734 8.55599 44.6937 7.92773 44.5342 7.54688C44.3779 7.16276 44.1257 6.9707 43.7773 6.9707C43.4225 6.9707 43.1686 7.16276 43.0156 7.54688C42.8626 7.92773 42.7861 8.55599 42.7861 9.43164Z"
                  fill="white"/>
              </svg>
            </Stack>
            <HStack px={'12px'} py={'8px'} spacing={'4px'} borderRadius={'8px'}
                    onClick={() => addTokenToMetamask(NEW_NEST_ADDRESS[chain?.id || mainnet.id], 'n')}
                    border={'1px solid rgba(28, 28, 35, 0.08)'}>
              <Stack w={'13px'} h={'12px'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M6.51578 2C6.79192 2.00036 7.01549 2.22451 7.01512 2.50065L7.00597 9.50065C7.00561 9.7768 6.78146 10.0004 6.50532 10C6.22918 9.99964 6.00561 9.77549 6.00598 9.49935L6.01513 2.49935C6.01549 2.2232 6.23964 1.99964 6.51578 2Z"
                        fill="#030308" fillOpacity="0.6"/>
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H10C10.2761 5.5 10.5 5.72386 10.5 6C10.5 6.27614 10.2761 6.5 10 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z"
                        fill="#030308" fillOpacity="0.6"/>
                </svg>
              </Stack>
              <Text fontSize={'12px'} lineHeight={'16px'} fontWeight={'400'} color={'#030308'}>Add NEST2.0 to
                wallet</Text>
            </HStack>
            <HStack align={'end'}>
              <Text color={'#030308'} textAlign={'center'} fontSize={'12px'} fontWeight={'700'} lineHeight={'16px'}>
                NEST2.0 (ETH)<br/>
                {NEW_NEST_ADDRESS[chain?.id || mainnet.id]}
              </Text>
              <Stack w={'12px'} h={'12px'} mb={'2px'} onClick={() => {
                navigator.clipboard.writeText(NEW_NEST_ADDRESS[chain?.id || mainnet.id])
                toast({
                  duration: 3000,
                  position: 'top',
                  render: () => (
                    <Stack color='#171A1F' w={'120px'} px={'12px'} py={'8px'} bg='white' fontSize={'14px'}
                           lineHeight={'20px'}
                           fontWeight={'700'} borderRadius={'6px'}>
                      <Text>Copy success!</Text>
                    </Stack>
                  ),
                })
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <g clipPath="url(#clip0_2170_12380)">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M3.95312 1.75C3.84094 1.75 3.75 1.84094 3.75 1.95312V2.75H8.04688C8.71134 2.75 9.25 3.28866 9.25 3.95312V8.25H10.0469C10.1591 8.25 10.25 8.15906 10.25 8.04688V1.95312C10.25 1.84094 10.1591 1.75 10.0469 1.75H3.95312ZM9.25 9.25H10.0469C10.7113 9.25 11.25 8.71134 11.25 8.04688V1.95312C11.25 1.28866 10.7113 0.75 10.0469 0.75H3.95312C3.28866 0.75 2.75 1.28866 2.75 1.95312V2.75H1.95312C1.28866 2.75 0.75 3.28866 0.75 3.95312V10.0469C0.75 10.7113 1.28866 11.25 1.95312 11.25H8.04688C8.71134 11.25 9.25 10.7113 9.25 10.0469V9.25ZM1.95312 3.75C1.84094 3.75 1.75 3.84094 1.75 3.95312V10.0469C1.75 10.1591 1.84094 10.25 1.95312 10.25H8.04688C8.15906 10.25 8.25 10.1591 8.25 10.0469V3.95312C8.25 3.84094 8.15906 3.75 8.04688 3.75H1.95312Z"
                          fill="#030308" fillOpacity="0.6"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2170_12380">
                      <rect width="12" height="12" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Stack>
            </HStack>
          </Stack>
          {
            !address && (
              <HStack pt={'24px'} justify={"center"}>
                <Button onClick={() => connect({
                  chainId: mainnet.id,
                })}>
                  Connect Wallet
                </Button>
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
            <HStack fontSize={'16px'} fontWeight={400} justifyContent={"center"} mt={'24px'} lineHeight={'22px'}
                    spacing={'4px'}>
              <Text color={'rgba(3,3,8, 0.6)'}>A single address can only submit a request for a replacement token
                once.</Text>
              <Link href={'https://www.nestprotocol.org/blogs/Guide-of-NEST-2.0-token-replacement-on-Ethereum'}
                    isExternal color={'#EAAA00'} ml={'4px'}>
                Guide
              </Link>
              <Stack w={'16px'} h={'16px'}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M11.378 7.76435C11.5081 7.89452 11.5081 8.10557 11.378 8.23575L5.7211 13.8926C5.59093 14.0228 5.37987 14.0228 5.2497 13.8926L4.76443 13.4073C4.63425 13.2772 4.63425 13.0661 4.76443 12.9359L9.70031 8.00005L4.76443 3.06416C4.63425 2.93399 4.63425 2.72293 4.76443 2.59276L5.2497 2.10749C5.37987 1.97731 5.59093 1.97732 5.7211 2.10749L11.378 7.76435Z"
                        fill="#EAAA00"/>
                </svg>
              </Stack>
            </HStack>
            <HStack align={"center"} justify={"center"} w={'1200px'}>
              <Stack w={'full'}>
                <HStack w={'full'} spacing={'24px'} mt={'44px'} justifyContent={"center"}>
                  <Stack w={'full'} p={'20px'} spacing={'20px'} bg={'rgba(255, 255, 255, 0.80)'} borderRadius={'12px'}
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
                    <HStack py={'8px'} px={'12px'} borderRadius={'8px'} border={'1px solid rgba(28, 28, 35, 0.08)'}
                            onClick={() => addTokenToMetamask(NEST_ADDRESS[chain?.id || mainnet.id], 'old')}
                            cursor={'pointer'}>
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
                    <HStack>
                      <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'} color={'rgba(3, 3, 8, 0.60)'}>NEST1.0
                        (ETH): {NEST_ADDRESS[chain?.id || mainnet.id]}</Text>
                      <Stack w={'15px'} h={'14px'} cursor={'pointer'} onClick={() => {
                        navigator.clipboard.writeText(NEST_ADDRESS[chain?.id || mainnet.id])
                        toast({
                          duration: 3000,
                          position: 'top',
                          render: () => (
                            <Stack color='#171A1F' w={'120px'} px={'12px'} py={'8px'} bg='white' fontSize={'14px'}
                                   lineHeight={'20px'}
                                   fontWeight={'700'} borderRadius={'6px'}>
                              <Text>Copy success!</Text>
                            </Stack>
                          ),
                        })
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M5.11198 2.04167C4.9811 2.04167 4.875 2.14777 4.875 2.27865V3.20833H9.88802C10.6632 3.20833 11.2917 3.83677 11.2917 4.61198V9.625H12.2214C12.3522 9.625 12.4583 9.5189 12.4583 9.38802V2.27865C12.4583 2.14777 12.3522 2.04167 12.2214 2.04167H5.11198ZM11.2917 10.7917H12.2214C12.9966 10.7917 13.625 10.1632 13.625 9.38802V2.27865C13.625 1.50343 12.9966 0.875 12.2214 0.875H5.11198C4.33677 0.875 3.70833 1.50343 3.70833 2.27865V3.20833H2.77865C2.00343 3.20833 1.375 3.83677 1.375 4.61198V11.7214C1.375 12.4966 2.00343 13.125 2.77865 13.125H9.88802C10.6632 13.125 11.2917 12.4966 11.2917 11.7214V10.7917ZM2.77865 4.375C2.64777 4.375 2.54167 4.4811 2.54167 4.61198V11.7214C2.54167 11.8522 2.64777 11.9583 2.77865 11.9583H9.88802C10.0189 11.9583 10.125 11.8522 10.125 11.7214V4.61198C10.125 4.4811 10.0189 4.375 9.88802 4.375H2.77865Z"
                                fill="#030308" fillOpacity="0.6"/>
                        </svg>
                      </Stack>
                    </HStack>
                  </Stack>
                  <Stack width={'41px'} h={'12px'}>
                    <svg width="41" height="12" viewBox="0 0 41 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40.5 6L30.5 0.2265L30.5 11.7735L40.5 6ZM0.5 7L31.5 7L31.5 5L0.5 5L0.5 7Z"
                            fill="#EAAA00"/>
                    </svg>
                  </Stack>
                  <Stack w={'full'} p={'20px'} spacing={'20px'} bg={'rgba(255, 255, 255, 0.80)'} borderRadius={'12px'}
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
                    <HStack py={'8px'} px={'12px'} borderRadius={'8px'} border={'1px solid rgba(28, 28, 35, 0.08)'}
                            onClick={() => addTokenToMetamask(NEW_NEST_ADDRESS[chain?.id || mainnet.id], 'n')}
                            cursor={'pointer'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M6.51578 2C6.79192 2.00036 7.01549 2.22451 7.01512 2.50065L7.00597 9.50065C7.00561 9.7768 6.78146 10.0004 6.50532 10C6.22918 9.99964 6.00561 9.77549 6.00598 9.49935L6.01513 2.49935C6.01549 2.2232 6.23964 1.99964 6.51578 2Z"
                              fill="#030308" fillOpacity="0.6"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H10C10.2761 5.5 10.5 5.72386 10.5 6C10.5 6.27614 10.2761 6.5 10 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z"
                              fill="#030308" fillOpacity="0.6"/>
                      </svg>
                      <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'} color={'#030308'}>Add NEST2.0 to
                        wallet</Text>
                    </HStack>
                    <HStack>
                      <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'} color={'#030308'}>NEST2.0 (ETH):
                        {NEW_NEST_ADDRESS[chain?.id || mainnet.id]}</Text>
                      <Stack w={'15px'} h={'14px'} cursor={'pointer'} onClick={() => {
                        navigator.clipboard.writeText(NEW_NEST_ADDRESS[chain?.id || mainnet.id])
                        toast({
                          duration: 3000,
                          position: 'top',
                          render: () => (
                            <Stack color='#171A1F' w={'120px'} px={'12px'} py={'8px'} bg='white' fontSize={'14px'}
                                   lineHeight={'20px'}
                                   fontWeight={'700'} borderRadius={'6px'}>
                              <Text>Copy success!</Text>
                            </Stack>
                          ),
                        })
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M5.11198 2.04167C4.9811 2.04167 4.875 2.14777 4.875 2.27865V3.20833H9.88802C10.6632 3.20833 11.2917 3.83677 11.2917 4.61198V9.625H12.2214C12.3522 9.625 12.4583 9.5189 12.4583 9.38802V2.27865C12.4583 2.14777 12.3522 2.04167 12.2214 2.04167H5.11198ZM11.2917 10.7917H12.2214C12.9966 10.7917 13.625 10.1632 13.625 9.38802V2.27865C13.625 1.50343 12.9966 0.875 12.2214 0.875H5.11198C4.33677 0.875 3.70833 1.50343 3.70833 2.27865V3.20833H2.77865C2.00343 3.20833 1.375 3.83677 1.375 4.61198V11.7214C1.375 12.4966 2.00343 13.125 2.77865 13.125H9.88802C10.6632 13.125 11.2917 12.4966 11.2917 11.7214V10.7917ZM2.77865 4.375C2.64777 4.375 2.54167 4.4811 2.54167 4.61198V11.7214C2.54167 11.8522 2.64777 11.9583 2.77865 11.9583H9.88802C10.0189 11.9583 10.125 11.8522 10.125 11.7214V4.61198C10.125 4.4811 10.0189 4.375 9.88802 4.375H2.77865Z"
                                fill="#030308" fillOpacity="0.6"/>
                        </svg>
                      </Stack>
                    </HStack>
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
                              <HStack h={'48px'} spacing={'12px'} px={'24px'} borderRadius={'12px'} bgColor={'#EAAA00'}
                                      cursor={'pointer'}
                                      onClick={() => {
                                        window.location.href = 'https://t.me/nest_chat'
                                      }}
                              >
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
                                              fontWeight={700}>{sentAmount?.toLocaleString()} NEST 2.0</Text>
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
                                            lineHeight={'28px'}>You have submitted {sentAmount?.toLocaleString()} NEST
                                        for replacement!</Text>
                                      <Text fontSize={'16px'} fontWeight={400} maxW={'500px'} textAlign={"start"}
                                            color={'rgba(3, 3, 8, 0.60)'}
                                            lineHeight={'22px'}>Application will be reviewed within 1 business day and
                                        your token can be replaced upon approval.</Text>
                                    </Stack>
                                    <Spacer/>
                                    <Button px={'24px'} onClick={() => {
                                      window.location.href = 'https://t.me/nest_chat'
                                    }}>
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
                                      <Button onClick={onOpen} variant={'solid'}
                                              isDisabled={!approve || balanceOfNEST?.value === BigInt(0)}>
                                        Approve
                                      </Button>
                                    )
                                  }
                                </HStack>
                              )
                            ) : (
                              <Button onClick={() => connect({
                                chainId: mainnet.id,
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
    <>
      {
        isMobile ? mobilePage : pcPage
      }
      <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick>
        <ModalOverlay/>
        <ModalContent borderRadius={'12px'} w={'350px'}>
          <Stack p={'20px'} spacing={'16px'} align={"center"}>
            <Stack w={'48px'} h={'48px'} mt={'48px'}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#F0F1F5"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M29.5 24.5V26.0192V30C29.5 30.8284 30.1716 31.5 31 31.5C31.8284 31.5 32.5 30.8284 32.5 30V24.5H29.5ZM27.5 26.0192V24.5V22.5V16.5H16.5V29.5C16.5 30.6046 17.3954 31.5 18.5 31.5H27.8368C27.6208 31.0454 27.5 30.5368 27.5 30V26.0192ZM31 33.5H28H18.5C16.2909 33.5 14.5 31.7091 14.5 29.5V15.5C14.5 14.9477 14.9477 14.5 15.5 14.5H28.5C29.0523 14.5 29.5 14.9477 29.5 15.5V22.5H33.5C34.0523 22.5 34.5 22.9477 34.5 23.5V30C34.5 31.933 32.933 33.5 31 33.5ZM19 20.5C19 20.2239 19.2239 20 19.5 20H24.5C24.7761 20 25 20.2239 25 20.5V21.5C25 21.7761 24.7761 22 24.5 22H19.5C19.2239 22 19 21.7761 19 21.5V20.5ZM19.5 24C19.2239 24 19 24.2239 19 24.5V25.5C19 25.7761 19.2239 26 19.5 26H24.5C24.7761 26 25 25.7761 25 25.5V24.5C25 24.2239 24.7761 24 24.5 24H19.5Z"
                      fill="#030308"/>
              </svg>
            </Stack>
            <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'} color={'#030308'}>
              Attention Please
            </Text>
            <Text fontSize={'12px'} lineHeight={'16px'} fontWeight={'400'} color={'#030308'} textAlign={"center"}>
              A single address can only submit a token replacement application once. Make sure to approve all of the
              NEST1.0 at once.
            </Text>
            <Button onClick={() => {
              approve?.()
              onClose()
            }} variant={'solid'} w={'full'}
                    isDisabled={!approve || balanceOfNEST?.value === BigInt(0)}>
              {approveStatus == 'idle' && 'Approve'}
              {(approveStatus == 'loading' || waitApproveStatus === 'loading') && 'Approving'}
              {waitApproveStatus === 'success' && 'Approve success'}
              {(approveStatus == 'error' || waitApproveStatus === 'error') && 'Approve error'}
            </Button>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Switch