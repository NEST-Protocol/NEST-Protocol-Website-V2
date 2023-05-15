import {Heading, Stack, useMediaQuery, Text} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";

const Wheretobuy = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const pcPage = (
    <Stack bgSize={'cover'} bgImage={"image/Home/Home_bg.jpg"} bgPosition={"center"}>
      <Navigation/>
      <Stack w={'100%'} h={'100%'} spacing={0} pb={'64px'} align={"center"} pt={'140px'}>
        <Stack spacing={'16px'} pb={'40px'} align={"center"}>
          <Heading fontSize={'48px'} lineHeight={'60px'} fontWeight={'700'}>Where to buy $NEST</Heading>
          <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'} color={'rgba(3, 3, 8, 0.6)'}>You can buy $NEST
            from exchanges or wallets directly.
            You can also manage your assets across multiple chains.</Text>
        </Stack>
        <Stack p={'40px'} bg={'#CFF5D0'} border={'1px solid #2ECD3C'} borderRadius={'12px'} spacing={'16px'}>
          <Stack direction={'row'} align={"center"}>
            <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}>CURRENT NEST PRICE (USD)</Text>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7 12.4167C9.99154 12.4167 12.4167 9.99154 12.4167 7C12.4167 4.00846 9.99154 1.58333 7 1.58333C4.00846 1.58333 1.58333 4.00846 1.58333 7C1.58333 9.99154 4.00846 12.4167 7 12.4167ZM13.75 7C13.75 10.7279 10.7279 13.75 7 13.75C3.27208 13.75 0.25 10.7279 0.25 7C0.25 3.27208 3.27208 0.25 7 0.25C10.7279 0.25 13.75 3.27208 13.75 7ZM6.33333 6.33333C6.33333 6.14924 6.48257 6 6.66667 6H7.33333C7.51743 6 7.66667 6.14924 7.66667 6.33333L7.66667 10.3333C7.66667 10.5174 7.51743 10.6667 7.33333 10.6667H6.66667C6.48257 10.6667 6.33333 10.5174 6.33333 10.3333L6.33333 6.33333ZM6.58333 3.5C6.39924 3.5 6.25 3.64924 6.25 3.83333V4.66667C6.25 4.85076 6.39924 5 6.58333 5H7.41667C7.60076 5 7.75 4.85076 7.75 4.66667V3.83333C7.75 3.64924 7.60076 3.5 7.41667 3.5H6.58333Z"
                    fill="#030308" fill-opacity="0.6"/>
            </svg>
          </Stack>
          <Text fontSize={'48px'} lineHeight={'60px'} fontWeight={'700'}>$0.01593</Text>
          <Stack direction={'row'} align={"center"}>
            <Text fontSize={'20px'} fontWeight={'700'} lineHeight={'28px'}>0.04%</Text>
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.46967 0.528636C5.76256 0.268287 6.23744 0.268287 6.53033 0.528636L11.0303 4.52864C11.3232 4.78899 11.3232 5.2111 11.0303 5.47145C10.7374 5.73179 10.2626 5.73179 9.96967 5.47145L6.75 2.60952V13C6.75 13.3682 6.41421 13.6667 6 13.6667C5.58579 13.6667 5.25 13.3682 5.25 13V2.60952L2.03033 5.47145C1.73744 5.73179 1.26256 5.73179 0.96967 5.47145C0.676777 5.2111 0.676777 4.78899 0.96967 4.52864L5.46967 0.528636Z"
                    fill="#2ECD3C"/>
            </svg>
            <Text fontSize={'16px'} fontWeight={'700'} lineHeight={'22px'} color={'rgba(3, 3, 8, 0.6)'}>(LAST 24
              HOURS)</Text>
          </Stack>

        </Stack>
        <Stack h={'80px'}></Stack>
        <Stack direction={'row'} spacing={'24px'}>
          <Stack bg={'white'} w={'788px'} py={'40px'} px={'24px'} borderRadius={'12px'}>
            <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={'700'}>Centralized and Decentralized
              Exchanges</Text>
            <Text pt={'12px'} fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'} color={'rgba(3, 3, 8, 0.6)'}>CEXs are
              businesses that let you buy crypto using traditional currencies. They have custody over any
              $NEST you buy until you send it to a wallet you control. If you want more control, buy $NEST peer-to-peer.
              With a DEX, you can trade without giving control of your funds to a centralized company.</Text>
            <Stack direction={'row'}>

            </Stack>
          </Stack>
          <Stack bg={'white'} w={'788px'} py={'40px'} px={'24px'} borderRadius={'12px'}>
            <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={'700'}>Supporting Multiple Chains</Text>
            <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'} color={'rgba(3, 3, 8, 0.6)'}>Users can
              achieve blockchain interoperability through different bridges, transferring assets from one chain to
              another without intermediaries. You can manage your $NEST assets on ERC-20 and BEP-20 through the
              cross-chain bridge Poly Network and MapProtocol.</Text>
            <Text pt={'12px'} fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'} color={'rgba(234, 170, 0, 1)'}>Learn more {">"}</Text>
          </Stack>
        </Stack>
      </Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack h={'100%'} bgImage={'/image/Home/01-Phone-bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      <NavigationMobile/>
      <Stack w={'100%'} h={'100%'} spacing={0} pb={'80px'} align={"center"} pt={'90px'}>
        <Stack spacing={'16px'} pb={'40px'} align={"center"}>
          <Heading fontSize={'24px'} lineHeight={'32px'} textAlign={"center"} fontWeight={'700'}>Where to buy $NEST</Heading>
          <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'} color={'rgba(3, 3, 8, 0.6)'} textAlign={"center"}>You can buy $NEST
            from exchanges or wallets directly.<br/>
            You can also manage your assets across multiple chains.</Text>
        </Stack>
        <Stack p={'20px'} bg={'#CFF5D0'} border={'1px solid #2ECD3C'} borderRadius={'12px'} spacing={'16px'}>
          <Stack direction={'row'} align={"center"}>
            <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>CURRENT NEST PRICE (USD)</Text>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7 12.4167C9.99154 12.4167 12.4167 9.99154 12.4167 7C12.4167 4.00846 9.99154 1.58333 7 1.58333C4.00846 1.58333 1.58333 4.00846 1.58333 7C1.58333 9.99154 4.00846 12.4167 7 12.4167ZM13.75 7C13.75 10.7279 10.7279 13.75 7 13.75C3.27208 13.75 0.25 10.7279 0.25 7C0.25 3.27208 3.27208 0.25 7 0.25C10.7279 0.25 13.75 3.27208 13.75 7ZM6.33333 6.33333C6.33333 6.14924 6.48257 6 6.66667 6H7.33333C7.51743 6 7.66667 6.14924 7.66667 6.33333L7.66667 10.3333C7.66667 10.5174 7.51743 10.6667 7.33333 10.6667H6.66667C6.48257 10.6667 6.33333 10.5174 6.33333 10.3333L6.33333 6.33333ZM6.58333 3.5C6.39924 3.5 6.25 3.64924 6.25 3.83333V4.66667C6.25 4.85076 6.39924 5 6.58333 5H7.41667C7.60076 5 7.75 4.85076 7.75 4.66667V3.83333C7.75 3.64924 7.60076 3.5 7.41667 3.5H6.58333Z"
                    fill="#030308" fill-opacity="0.6"/>
            </svg>
          </Stack>
          <Text fontSize={'28px'} lineHeight={'40px'} textAlign={"center"} fontWeight={'700'}>$0.01593</Text>
          <Stack direction={'row'} align={"center"} justify={"center"}>
            <Text fontSize={'18px'} fontWeight={'700'} lineHeight={'24px'}>0.04%</Text>
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.46967 0.528636C5.76256 0.268287 6.23744 0.268287 6.53033 0.528636L11.0303 4.52864C11.3232 4.78899 11.3232 5.2111 11.0303 5.47145C10.7374 5.73179 10.2626 5.73179 9.96967 5.47145L6.75 2.60952V13C6.75 13.3682 6.41421 13.6667 6 13.6667C5.58579 13.6667 5.25 13.3682 5.25 13V2.60952L2.03033 5.47145C1.73744 5.73179 1.26256 5.73179 0.96967 5.47145C0.676777 5.2111 0.676777 4.78899 0.96967 4.52864L5.46967 0.528636Z"
                    fill="#2ECD3C"/>
            </svg>
            <Text fontSize={'14px'} fontWeight={'700'} lineHeight={'20px'} color={'rgba(3, 3, 8, 0.6)'}>(LAST 24
              HOURS)</Text>
          </Stack>
        </Stack>
        <Stack h={'80px'}></Stack>
        <Stack spacing={'24px'} px={'20px'}>
          <Stack bg={'white'} w={'full'} py={'40px'} px={'24px'} borderRadius={'12px'}>
            <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={'700'} textAlign={"center"}>Centralized and Decentralized
              Exchanges</Text>
            <Text pt={'12px'} fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'} color={'rgba(3, 3, 8, 0.6)'}>CEXs are
              businesses that let you buy crypto using traditional currencies. They have custody over any
              $NEST you buy until you send it to a wallet you control. If you want more control, buy $NEST peer-to-peer.
              With a DEX, you can trade without giving control of your funds to a centralized company.</Text>
            <Stack direction={'row'}>
            </Stack>
          </Stack>
          <Stack bg={'white'} w={'full'} py={'40px'} px={'24px'} borderRadius={'12px'}>
            <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={'700'} textAlign={"center"}>Supporting Multiple Chains</Text>
            <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'} color={'rgba(3, 3, 8, 0.6)'}>Users can
              achieve blockchain interoperability through different bridges, transferring assets from one chain to
              another without intermediaries. You can manage your $NEST assets on ERC-20 and BEP-20 through the
              cross-chain bridge Poly Network and MapProtocol.</Text>
            <Text pt={'12px'} fontSize={'14px'} lineHeight={'20px'} textAlign={"center"} fontWeight={'700'} color={'rgba(234, 170, 0, 1)'}>Learn more {">"}</Text>
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