import {
  Heading,
  Stack,
  useMediaQuery,
  Text,
  chakra,
  Link,
  Wrap,
  WrapItem,
  HStack,
  Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody
} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import useSWR from 'swr'

const Wheretobuy = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const {
    data,
  } = useSWR('https://api.huobi.pro/market/detail?symbol=nestusdt', (url) => fetch(url).then(res => res.json()))

  const pcPage = (
    <Stack bgSize={'cover'} bgImage={"/image/NEST_Fi/NESTFi_bg.jpg"} bgPosition={"center"}>
      <Navigation/>
      <Stack w={'100%'} h={'100%'} spacing={0} pb={'64px'} align={"center"} pt={'140px'}>
        <Stack spacing={'16px'} pb={'40px'} align={"center"}>
          <Heading fontSize={'48px'} lineHeight={'60px'} fontWeight={'700'}>Where to buy $NEST</Heading>
          <Text fontSize={'16px'} textAlign={"center"} lineHeight={'22px'} px={'40px'} fontWeight={'700'} color={'rgba(3, 3, 8, 0.6)'}>You
            can buy $NEST from exchanges or wallets directly.<br/>
            You can also manage your assets across multiple chains.</Text>
        </Stack>
        <Stack p={'40px'} bg={'#CFF5D0'} border={'1px solid #2ECD3C'} borderRadius={'12px'} spacing={'16px'}>
          <Stack direction={'row'} align={"center"}>
            <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}>CURRENT NEST PRICE (USD)</Text>
            <Popover>
              <PopoverTrigger>
                <chakra.img src={'/image/Wheretobuy/info.svg'}/>
              </PopoverTrigger>
              <PopoverContent bg={'rgba(3, 3, 8, 1)'} p={'12px'} w={'135px'} borderRadius={'6px'}>
                <Stack align={"center"} spacing={'4px'}>
                  <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'} color={'white'}>Data source:</Text>
                  <Text fontSize={'12px'} lineHeight={'16px'} fontWeight={'400'} color={'rgba(234, 170, 0, 1)'}>api.huobi.pro</Text>
                </Stack>
              </PopoverContent>
            </Popover>
          </Stack>
          <Text fontSize={'48px'} lineHeight={'60px'} fontWeight={'700'}>${data?.tick?.close || '-'}</Text>
          {/*<Stack direction={'row'} align={"center"}>*/}
          {/*  <Text fontSize={'20px'} fontWeight={'700'} lineHeight={'28px'}>0.04 %</Text>*/}
          {/*  <chakra.img src={'/image/Wheretobuy/up.svg'}/>*/}
          {/*  <Text fontSize={'16px'} fontWeight={'700'} lineHeight={'22px'} color={'rgba(3, 3, 8, 0.6)'}>(LAST 24*/}
          {/*    HOURS)</Text>*/}
          {/*</Stack>*/}
        </Stack>
        <Stack h={'80px'}></Stack>
        <Wrap direction={'row'} spacing={'24px'} align={"center"} justify={"center"}>
          <WrapItem w={'788px'} h={'full'}>
            <Stack bg={'white'} py={'40px'} h={'full'} px={'24px'} spacing={0} borderRadius={'12px'}>
              <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={'700'}>Centralized and Decentralized
                Exchanges</Text>
              <Stack spacing={0} h={'120px'}>
                <Text pt={'12px'} fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'} color={'rgba(3, 3, 8, 0.6)'}>CEXs
                  are
                  businesses that let you buy crypto using traditional currencies. They have custody over any
                  $NEST you buy until you send it to a wallet you control. If you want more control, buy $NEST
                  peer-to-peer.
                  With a DEX, you can trade without giving control of your funds to a centralized company.</Text>
                <Link pt={'12px'} fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}
                      style={{opacity: 0}}
                      color={'rgba(234, 170, 0, 1)'}>Learn
                  more {">"}</Link>
              </Stack>
              <Stack direction={'row'} gap={'12px'} pt={'40px'}>
                {
                  [
                    {
                      icon: '/image/Wheretobuy/coinbase.svg',
                      link: 'https://www.coinbase.com/price/nest-protocol',
                    },
                    {
                      icon: '/image/Wheretobuy/huobi.svg',
                      link: 'https://www.huobi.com/en-us/exchange/nest_usdt/',
                    },
                    {
                      icon: '/image/Wheretobuy/mexc.svg',
                      link: 'https://www.mexc.com/exchange/NEST_USDT',
                    },
                    {
                      icon: '/image/Wheretobuy/bibox.svg',
                      link: 'https://www.bibox.com/en/exchange/basic/NEST_USDT',
                    },
                    {
                      icon: '/image/Wheretobuy/gate.svg',
                      link: 'https://www.gate.io/trade/NEST_USDT',
                    },
                  ].map((item, index) => (
                    <Link href={item.link} isExternal key={index}
                          _hover={{bg: 'rgba(240, 241, 245, 1)', borderRadius: 'full'}}>
                      <chakra.img src={item.icon} h={'48px'}/>
                    </Link>
                  ))
                }
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem w={'788px'} h={'full'}>
            <Stack bg={'white'} py={'40px'} h={'full'} px={'24px'} borderRadius={'12px'} spacing={0}>
              <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={'700'}>Supporting Multiple Chains</Text>
              <Stack spacing={0} h={'120px'}>
                <Text pt={'12px'} fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'} color={'rgba(3, 3, 8, 0.6)'}>Users
                  can
                  achieve blockchain interoperability through different bridges, transferring assets from one chain to
                  another without intermediaries. You can manage your $NEST assets on ERC-20 and BEP-20 through the
                  cross-chain bridge Poly Network and MapProtocol.</Text>
                <Link pt={'12px'} fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}
                      href={'/blogs/how-to-manage-your-nest-on-different-chain'}
                      color={'rgba(234, 170, 0, 1)'}>Learn
                  more {">"}</Link>
              </Stack>
              <Stack direction={'row'} gap={'12px'} pt={'40px'}>
                {
                  [
                    {
                      icon: '/image/Wheretobuy/polynetwork.svg',
                      link: 'https://poly.network/',
                    },
                    {
                      icon: '/image/Wheretobuy/mapprotocol.svg',
                      link: 'https://www.mapprotocol.io/',
                    },
                  ].map((item, index) => (
                    <Link href={item.link} isExternal key={index}
                          _hover={{bg: 'rgba(240, 241, 245, 1)', borderRadius: 'full'}}>
                      <chakra.img src={item.icon} h={'48px'}/>
                    </Link>
                  ))
                }
              </Stack>
            </Stack>
          </WrapItem>
        </Wrap>
      </Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack h={'100%'} bgImage={'/image/NEST_Fi/02-Phone-bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      <NavigationMobile/>
      <Stack w={'100%'} h={'100%'} spacing={0} pb={'80px'} align={"center"} pt={'90px'}>
        <Stack spacing={'16px'} pb={'40px'} align={"center"}>
          <Heading fontSize={'24px'} lineHeight={'32px'} textAlign={"center"} fontWeight={'700'}>Where to buy
            $NEST</Heading>
          <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'} color={'rgba(3, 3, 8, 0.6)'}
                textAlign={"center"}>You can buy $NEST
            from exchanges or wallets directly.<br/>
            You can also manage your assets across multiple chains.</Text>
        </Stack>
        <Stack p={'20px'} bg={'#CFF5D0'} border={'1px solid #2ECD3C'} borderRadius={'12px'} spacing={'16px'}>
          <Stack direction={'row'} align={"center"}>
            <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>CURRENT NEST PRICE (USD)</Text>
            <Popover>
              <PopoverTrigger>
                <chakra.img src={'/image/Wheretobuy/info.svg'}/>
              </PopoverTrigger>
              <PopoverContent bg={'rgba(3, 3, 8, 1)'} p={'12px'} w={'135px'} borderRadius={'6px'}>
                <Stack align={"center"} spacing={'4px'}>
                  <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'} color={'white'}>Data source:</Text>
                  <Text fontSize={'12px'} lineHeight={'16px'} fontWeight={'400'} color={'rgba(234, 170, 0, 1)'}>api.huobi.pro</Text>
                </Stack>
              </PopoverContent>
            </Popover>
          </Stack>
          <Text fontSize={'28px'} lineHeight={'40px'} textAlign={"center"}
                fontWeight={'700'}>${data?.tick?.close || '-'}</Text>
          {/*<Stack direction={'row'} align={"center"} justify={"center"}>*/}
          {/*  <Text fontSize={'18px'} fontWeight={'700'} lineHeight={'24px'}>0.04%</Text>*/}
          {/*  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*    <path fill-rule="evenodd" clip-rule="evenodd"*/}
          {/*          d="M5.46967 0.528636C5.76256 0.268287 6.23744 0.268287 6.53033 0.528636L11.0303 4.52864C11.3232 4.78899 11.3232 5.2111 11.0303 5.47145C10.7374 5.73179 10.2626 5.73179 9.96967 5.47145L6.75 2.60952V13C6.75 13.3682 6.41421 13.6667 6 13.6667C5.58579 13.6667 5.25 13.3682 5.25 13V2.60952L2.03033 5.47145C1.73744 5.73179 1.26256 5.73179 0.96967 5.47145C0.676777 5.2111 0.676777 4.78899 0.96967 4.52864L5.46967 0.528636Z"*/}
          {/*          fill="#2ECD3C"/>*/}
          {/*  </svg>*/}
          {/*  <Text fontSize={'14px'} fontWeight={'700'} lineHeight={'20px'} color={'rgba(3, 3, 8, 0.6)'}>(LAST 24*/}
          {/*    HOURS)</Text>*/}
          {/*</Stack>*/}
        </Stack>
        <Stack h={'80px'}></Stack>
        <Stack spacing={'24px'} px={'20px'}>
          <Stack bg={'white'} w={'full'} py={'40px'} px={'24px'} borderRadius={'12px'} spacing={0}>
            <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={'700'} textAlign={"center"}>Centralized and
              Decentralized
              Exchanges</Text>
            <Text pt={'12px'} fontSize={'14px'} textAlign={"center"} lineHeight={'20px'} fontWeight={'700'}
                  color={'rgba(3, 3, 8, 0.6)'}>CEXs
              are
              businesses that let you buy crypto using traditional currencies. They have custody over any
              $NEST you buy until you send it to a wallet you control. If you want more control, buy $NEST peer-to-peer.
              With a DEX, you can trade without giving control of your funds to a centralized company.</Text>
            <HStack justify={"center"} pt={'32px'} spacing={'10px'}>
              {
                [
                  {
                    icon: '/image/Wheretobuy/coinbase.svg',
                    link: 'https://www.coinbase.com/price/nest-protocol',
                  },
                  {
                    icon: '/image/Wheretobuy/huobi.svg',
                    link: 'https://www.huobi.com/en-us/exchange/nest_usdt/',
                  },
                  {
                    icon: '/image/Wheretobuy/mexc.svg',
                    link: 'https://www.mexc.com/exchange/NEST_USDT',
                  },
                ].map((item, index) => (
                  <Link href={item.link} isExternal key={index}
                        _hover={{bg: 'rgba(240, 241, 245, 1)', borderRadius: 'full'}}>
                    <chakra.img src={item.icon} h={'48px'}/>
                  </Link>
                ))
              }
            </HStack>
            <HStack justify={"center"} pt={'12px'} spacing={'10px'}>
              {
                [
                  {
                    icon: '/image/Wheretobuy/bibox.svg',
                    link: 'https://www.bibox.com/en/exchange/basic/NEST_USDT',
                  },
                  {
                    icon: '/image/Wheretobuy/gate.svg',
                    link: 'https://www.gate.io/trade/NEST_USDT',
                  }
                ].map((item, index) => (
                  <Link href={item.link} isExternal key={index}
                        _hover={{bg: 'rgba(240, 241, 245, 1)', borderRadius: 'full'}}>
                    <chakra.img src={item.icon} h={'48px'}/>
                  </Link>
                ))
              }
            </HStack>
          </Stack>
          <Stack bg={'white'} w={'full'} py={'40px'} px={'24px'} borderRadius={'12px'} spacing={0}>
            <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={'700'} textAlign={"center"}>Supporting Multiple
              Chains</Text>
            <Text pt={'12px'} fontSize={'14px'} lineHeight={'20px'} textAlign={"center"} fontWeight={'700'}
                  color={'rgba(3, 3, 8, 0.6)'}>Users can
              achieve blockchain interoperability through different bridges, transferring assets from one chain to
              another without intermediaries. You can manage your $NEST assets on ERC-20 and BEP-20 through the
              cross-chain bridge Poly Network and MapProtocol.</Text>
            <Link pt={'12px'} fontSize={'14px'} lineHeight={'20px'} textAlign={"center"} fontWeight={'700'}
                  href={'/blogs/how-to-manage-your-nest-on-different-chain'}
                  color={'rgba(234, 170, 0, 1)'}>Learn more {">"}
            </Link>
            <Stack spacing={'12px'} align={"center"} pt={'32px'}>
              {
                [
                  {
                    icon: '/image/Wheretobuy/polynetwork.svg',
                    link: 'https://poly.network/',
                  },
                  {
                    icon: '/image/Wheretobuy/mapprotocol.svg',
                    link: 'https://www.mapprotocol.io/',
                  },
                ].map((item, index) => (
                  <Link href={item.link} isExternal key={index}
                        _hover={{bg: 'rgba(240, 241, 245, 1)', borderRadius: 'full'}}>
                    <chakra.img src={item.icon} h={'48px'}/>
                  </Link>
                ))
              }
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <FooterMobile/>
    </Stack>
  )

  if (isMobile) {
    return mobilePage
  } else {
    return (
      pcPage
    )
  }
}

export default Wheretobuy