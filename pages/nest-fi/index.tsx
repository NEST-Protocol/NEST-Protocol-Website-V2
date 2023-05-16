import {Box, Heading, HStack, Stack, Text, chakra, Button, useMediaQuery} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import Head from "next/head";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const title = "NESTFi | NEST Protocol";
  const description = "NESTFi is a decentralized perpetual exchange. NESTFi offers 100% trading fees as commission for referrers";

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

  const pcPage = (
    <Stack bgPosition={"center"} bgSize={'cover'} bgImage={'/image/NEST_Fi/NESTFi_bg.jpg'}>
      { SEO }
      <Navigation/>
      <Stack h={'100%'} align={"center"}>
        <Stack w={'100%'} h={'100%'} spacing={0}>
          <Stack py={'134px'}>
            <Stack spacing={'40px'} align={"center"}>
              <Heading fontSize={'50px'} textAlign={"center"}>NESTFi<br/> is a decentralized<br/> perpetual exchange.</Heading>
              <Text textAlign={"center"} fontWeight={'600'} fontSize={'21px'}>NESTFi offers 100% trading fees<br/> as commission for referrers.</Text>
            </Stack>
          </Stack>
          <Stack bg={'rgba(255,255,255, 0.8)'} align={"center"} textAlign={"center"} py={'92px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>NESTFi&apos;s economic model is deflationary</Heading>
            <chakra.img src={'/image/NEST_Fi/02-icon-01@2x.png'} w={'100px'} alt={''} py={'20px'}/>
            <Text fontSize={'25px'} fontWeight={'bold'}>We believe people cannot beat the market, <br/>therefore, in the long run, the more users trade on NESTFi,<br/> the more $NEST will be burned by the system,<br/> which will make NEST deflationary</Text>
            <Text fontWeight={600} fontSize={'15px'}>NESTFi&apos;s cost is low</Text>
            <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>NESTFi has almost no server costs, no asset custody costs,<br/> and no market makers costs when compared to centralized exchanges.</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>NESTFi&apos;s product features</Text>
            <Stack textAlign={"start"}>
              <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>· Market order & Limit order</Text>
              <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>· Stop loss (SL) & Take profit (TP)</Text>
              <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>· Position adjustment</Text>
            </Stack>
          </Stack>
          <Stack align={"center"} py={'136px'} spacing={'57px'}>
            <Heading fontSize={'50px'}>What does NESTFi solve?</Heading>
            <HStack spacing={'44px'}>
              <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Stack align={"center"} h={'120px'} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/02-icon-02@2x.png'} alt={''} h={'98px'}/>
                </Stack>
                <Text fontSize={'18px'} fontWeight={'bold'}>Decentralized</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>Trading requires neither market makers nor LPs, smart contracts are the biggest seller in the system</Text>
              </Stack>
              <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Stack align={"center"} h={'120px'} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/02-icon-03@2x.png'} alt={''} h={'88px'} w={'88px'}/>
                </Stack>
                <Text fontSize={'18px'} fontWeight={'bold'}>Replace Market Makers</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>The martingale network can perfectly replace the role of market makers in derivatives trading through smart contracts</Text>
              </Stack>
              <Stack px={'30px'} pt={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Stack align={"center"} h={'120px'} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/02-icon-04@2x.png'} alt={''} h={'87px'} w={'94px'}/>
                </Stack>
                <Text fontSize={'18px'} fontWeight={'bold'}>Unlimited Supply</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>You won’t have to worry about a shortage of market liquidity making trading difficult.<br/>
                  Any transaction based on martingale information flow that traders require can be fulfilled.</Text>
              </Stack>
            </HStack>
          </Stack>
          <Stack align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'}>Dapps in NESTFi</Heading>
            <HStack w={'full'}>
              <Stack w={'50%'} align={"center"} justify={"center"}>
                <chakra.img src={'/image/NEST_Fi/Mockup_white.png'} h={'400px'}/>
              </Stack>
              <Stack w={'50%'} bg={'white'} align={"center"}>
                <Stack w={'400px'} py={'155px'} borderRadius={'20px'}>
                  <Text fontSize={'25px'} fontWeight={600}>NESTFi</Text>
                  <Text fontSize={'15px'} fontWeight={600}>Trade BTC/USDT and ETH/USDT perpetual futures directly from your wallet with 0 slippage and up to 50x leverage.</Text>
                  <Box pt={'25px'}>
                    <Button w={'160px'} onClick={() => {
                      window.open('https://finance.nestprotocol.org/#/futures', '_blank')
                    }}>
                      Trade on NESTFi
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </HStack>
          </Stack>
          <Stack h={'138px'}/>
        </Stack>
      </Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack h={'100%'} bgImage={'/image/NEST_Fi/02-Phone-bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      { SEO }
      <NavigationMobile/>
      <Stack align={"center"} pt={'180px'} pb={'220px'}>
        <Text fontWeight={'bold'} textAlign={"center"} fontSize={'25px'}>NESTFi<br/> is a decentralized<br/> perpetual exchange.</Text>
        <Text fontSize={'12px'} textAlign={"center"} fontWeight={'600'}>NESTFi offers 100% trading fees<br/> as commission for referrers.</Text>
      </Stack>
      <Stack align={"center"} py={'40px'} bg={'rgba(255,255,255,0.7)'} px={'24px'}>
        <Text fontWeight={'bold'} fontSize={'25px'} align={"center"}>NESTFi&apos;s economic model<br/> is deflationary</Text>
        <chakra.img src={'/image/NEST_Fi/02-icon-01@2x.png'} w={'50px'} py={'40px'} alt={''}/>
        <Text fontSize={'16px'} fontWeight={'bold'} textAlign={"center"}>We believe people cannot beat the market,<br/>
          therefore, in the long run,<br/> the more users trade on NESTFi,<br/>
          the more $NEST will be burned by the system,<br/>
          which will make NEST deflationary</Text>
        <Text fontWeight={'600'} fontSize={'12.5px'}>NESTFi&apos;s cost is low</Text>
        <Text fontWeight={'600'} fontSize={'12.5px'} textAlign={"center"} color={'#7D7D7D'}>NESTFi has almost no server costs,<br/> no asset custody costs,
          and no market makers costs<br/> when compared to centralized exchanges.</Text>
        <Text fontWeight={'600'} fontSize={'12.5px'}>NESTFi&apos;s product features</Text>
        <Text fontWeight={'600'} fontSize={'12.5px'} textAlign={"center"} color={'#7D7D7D'}>
          · Market order & Limit order<br/>
          · Stop loss (SL) & Take profit (TP)<br/>
          · Position adjustment
        </Text>
      </Stack>
      <Stack align={"center"} pt={'62px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>What does NESTFi solve?</Text>
        <Stack px={'24px'} pt={'38px'} w={'full'}>
          <Stack px={'33px'} bg={'white'} borderRadius={'20px'} align={"center"} pt={'50px'}>
            <chakra.img src={'/image/NEST_Fi/02-icon-02@2x.png'} w={'150px'} alt={''}/>
            <Stack py={'50px'} w={'full'} textAlign={"center"}>
              <Text fontWeight={'bold'} fontSize={'16px'}>Decentralized</Text>
              <Text fontWeight={'600'} fontSize={'12.5px'}>Trading requires neither market makers nor LPs, smart contracts are the biggest seller in the system</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack px={'24px'} py={'24px'} w={'full'}>
          <Stack px={'33px'} pt={'50px'} bg={'white'} borderRadius={'20px'} align={"center"}>
            <Stack>
              <chakra.img src={'/image/NEST_Fi/02-icon-03@2x.png'} w={'68px'} alt={''}/>
            </Stack>
            <Stack py={'50px'} w={'full'} textAlign={"center"}>
              <Text fontWeight={'bold'} fontSize={'16px'}>Replace Market Makers</Text>
              <Text fontWeight={'600'} fontSize={'12.5px'}>The martingale network can perfectly replace the role of market makers in derivatives trading through smart contracts</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack px={'24px'} w={'full'}>
          <Stack px={'33px'} pt={'50px'} bg={'white'} borderRadius={'20px'} align={"center"}>
            <Stack>
              <chakra.img src={'/image/NEST_Fi/02-icon-04@2x.png'} w={'68px'} alt={''}/>
            </Stack>
            <Stack py={'50px'} w={'full'} textAlign={"center"}>
              <Text fontWeight={'bold'} fontSize={'16px'}>Unlimited Supply</Text>
              <Text fontWeight={'600'} fontSize={'12.5px'}>You won’t have to worry about a shortage of market liquidity making trading difficult.<br/>
                Any transaction based on martingale information flow that traders require can be fulfilled.</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack align={"center"} pt={'62px'}>
        <chakra.img src={'/image/NEST_Fi/Mockup_white.png'} w={'180px'} alt={''}/>
      </Stack>
      <Stack align={"center"} bg={'rgba(255,255,255, 0.8)'} py={'30px'}>
        <Text fontWeight={'600'} fontSize={'16px'}>NESTFi</Text>
        <Text textAlign={"center"} fontWeight={'600'} fontSize={'12.5px'}>Trade BTC/USDT and ETH/USDT<br/> perpetual futures directly from your wallet<br/> with 0 slippage<br/> and up to 50x leverage.</Text>
        <Stack pt={'30px'}>
          <Button onClick={() => {
            window.open('https://finance.nestprotocol.org/#/futures', '_blank')
          }}>Trade on NESTFi</Button>
        </Stack>
      </Stack>
      {/*<Stack align={"center"} py={'40px'}>*/}
      {/*  <chakra.img src={'/image/NEST_Fi/iPhone_2.webp'} w={'180px'} alt={''}/>*/}
      {/*</Stack>*/}
      {/*<Stack align={"center"} bg={'rgba(255,255,255, 0.8)'} py={'30px'}>*/}
      {/*  <Text fontWeight={'600'} fontSize={'16px'}>NESTFi - Options</Text>*/}
      {/*  <Text textAlign={"center"} fontWeight={'600'} fontSize={'12.5px'}>Open Options with flexible choices on*/}
      {/*    exercise date,<br/>direction and strike price, and no commission</Text>*/}
      {/*  <Stack pt={'30px'}>*/}
      {/*    <Button onClick={() => {*/}
      {/*      window.open('https://finance.nestprotocol.org/#/options', '_blank')*/}
      {/*    }}>Open Options</Button>*/}
      {/*  </Stack>*/}
      {/*</Stack>*/}
      <Stack h={'62px'}/>
      <FooterMobile/>
    </Stack>
  )

  if (isMobile) {
    return mobilePage
  } else {
    return pcPage
  }

}

export default Page