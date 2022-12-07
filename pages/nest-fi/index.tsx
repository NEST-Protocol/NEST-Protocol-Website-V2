import {Box, Heading, HStack, Stack, Text, chakra, Button, useMediaQuery} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const pcPage = (
    <Stack bgPosition={"center"} bgSize={'cover'} bgImage={'/image/NEST_Fi/NESTFi_bg.jpg'}>
      <Navigation/>
      <Stack h={'100%'} align={"center"}>
        <Stack w={'100%'} h={'100%'} spacing={0}>
          <Stack py={'134px'}>
            <Stack spacing={'40px'} align={"center"}>
              <Heading fontSize={'50px'} textAlign={"center"}>NESTFi<br/>the decentralized<br/>financial market<br/>based
                on OMM</Heading>
              <Text textAlign={"center"} fontWeight={'600'} fontSize={'21px'}>NESTFi (NESTFinancial Market) provides
                futures<br/>and options with infinite liquidity now.</Text>
            </Stack>
          </Stack>
          <Stack bg={'rgba(255,255,255, 0.8)'} align={"center"} textAlign={"center"} py={'92px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>What is OMM?</Heading>
            <chakra.img src={'/image/NEST_Fi/02-icon-01@2x.png'} w={'100px'} alt={''} py={'20px'}/>
            <Text fontSize={'25px'} fontWeight={'bold'}>From P2P to OMM, a new settlement paradigm</Text>
            <Text fontWeight={600} fontSize={'15px'}>OMM(Omnipotent Market Maker) is a new trading and settlement
              paradigm:<br/>everyone trades and settles stochastic assets with NEST system rather than
              individuals.</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>First constraint</Text>
            <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>c(X) ≥ E(X)<br/>The production cost of
              stochastic asset is not less than<br/>the expected value of this stochastic asset.</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>Second constraint</Text>
            <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>E(X) ≥ E(F(X))<br/>The expected value of the
              programmed stochastic<br/>asset will be not higher than its cost.</Text>
          </Stack>
          <Stack align={"center"} py={'136px'} spacing={'57px'}>
            <Heading fontSize={'50px'}>What does OMM solve?</Heading>
            <HStack spacing={'44px'}>
              <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Stack align={"center"} h={'120px'} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/02-icon-02@2x.png'} alt={''} h={'98px'}/>
                </Stack>
                <Text fontSize={'18px'} fontWeight={'bold'}>Valid Settlement</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>ETH cannot make valid<br/>settlement for all
                  transactions;<br/>however, OMM can settle all<br/>transactions.</Text>
              </Stack>
              <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Stack align={"center"} h={'120px'} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/02-icon-03@2x.png'} alt={''} h={'88px'} w={'88px'}/>
                </Stack>
                <Text fontSize={'18px'} fontWeight={'bold'}>Market Clearing</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>OMM can structure atomic<br/>liquidation, which means that
                  all<br/>excess return can be cleared.</Text>
              </Stack>
              <Stack px={'30px'} py={'53px'} bg={"white"} w={'308px'} h={'352px'} borderRadius={'20px'}>
                <Stack align={"center"} h={'120px'} justify={"center"}>
                  <chakra.img src={'/image/NEST_Fi/02-icon-04@2x.png'} alt={''} h={'87px'} w={'94px'}/>
                </Stack>
                <Text fontSize={'18px'} fontWeight={'bold'}>Infinite Liquidity</Text>
                <Text fontWeight={'600'} fontSize={'13px'}>The liquidity will not be limited<br/>by the LP’s pool
                  size,
                  theoretically<br/>OMM can provide infinite liquidity</Text>
              </Stack>
            </HStack>
          </Stack>
          <Stack align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'}>Dapps in NESTFi</Heading>
            <HStack w={'full'}>
              <Stack w={'50%'} align={"center"} justify={"center"}>
                <chakra.img src={'/image/NEST_Fi/iPhone_1.webp'} h={'400px'}/>
              </Stack>
              <Stack w={'50%'} bg={'white'} align={"center"}>
                <Stack w={'400px'} py={'155px'} borderRadius={'20px'}>
                  <Text fontSize={'25px'} fontWeight={600}>NESTFi - Futures</Text>
                  <Text fontSize={'15px'} fontWeight={600}>Trade BTC/USDT and ETH/USDT futures directly<br/>from your
                    wallet without trading fee.</Text>
                  <Box pt={'25px'}>
                    <Button w={'160px'} onClick={() => {
                      window.open('https://finance.nestprotocol.org/#/futures', '_blank')
                    }}>
                      Open Futures
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </HStack>
            <HStack w={'full'} pt={'40px'}>
              <Stack w={'50%'} bg={'white'} align={"center"}>
                <Stack py={'155px'} borderRadius={'20px'}>
                  <Text fontSize={'25px'} fontWeight={600}>NESTFi - Options</Text>
                  <Text fontSize={'15px'} fontWeight={600}>Open Options with flexible choices on exercise date,<br/>direction
                    and strike price, and no commission.</Text>
                  <Box pt={'25px'}>
                    <Button w={'160px'} onClick={() => {
                      window.open('https://finance.nestprotocol.org/#/options', '_blank')
                    }}>
                      Open Options
                    </Button>
                  </Box>
                </Stack>
              </Stack>
              <Stack w={'50%'} align={"center"} justify={"center"}>
                <chakra.img src={'/image/NEST_Fi/iPhone_2.webp'} h={'400px'}/>
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
      <NavigationMobile/>
      <Stack align={"center"} pt={'180px'} pb={'220px'}>
        <Text fontWeight={'bold'} textAlign={"center"} fontSize={'25px'}>NESTFi<br/>the decentralized<br/>financial
          market<br/>based on OMM</Text>
        <Text fontSize={'12px'} textAlign={"center"} fontWeight={'600'}>NESTFi (NESTFinancial Market)<br/>provides
          futures and options<br/>with infinite liquidity now.</Text>
      </Stack>
      <Stack align={"center"} py={'40px'} bg={'rgba(255,255,255,0.7)'}>
        <Text fontWeight={'bold'} fontSize={'25px'}>What is OMM?</Text>
        <chakra.img src={'/image/NEST_Fi/02-icon-01@2x.png'} w={'50px'} py={'40px'} alt={''}/>
        <Text fontSize={'16px'} fontWeight={'bold'} textAlign={"center"}>From P2P to OMM, <br/>a new settlement
          paradigm</Text>
        <Text fontSize={'12.5px'} fontWeight={600} textAlign={"center"}>OMM(Omnipotent Market Maker) is<br/>a new
          trading and settlement paradigm:<br/>everyone trades and settles<br/>stochastic assets with NEST
          system<br/>rather than individuals.</Text>
        <Text fontWeight={'600'} fontSize={'12.5px'}>First constraint:</Text>
        <Text fontWeight={'600'} fontSize={'12.5px'} textAlign={"center"} color={'#7D7D7D'}>c(X) ≥ E(X)<br/>The
          production cost of stochastic asset<br/>is not less than the expected<br/>value of this stochastic
          asset</Text>
        <Text fontWeight={'600'} fontSize={'12.5px'}>Second constraint:</Text>
        <Text fontWeight={'600'} fontSize={'12.5px'} textAlign={"center"} color={'#7D7D7D'}>E(X) ≥ E(F(X))<br/>
          The expected value of the<br/>
          programmed stochastic asset<br/>
          will be not higher than its cost.</Text>
      </Stack>
      <Stack align={"center"} pt={'62px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>What does OMM solve?</Text>
        <Stack px={'24px'} pt={'38px'} w={'full'}>
          <Stack px={'33px'} bg={'white'} borderRadius={'20px'} align={"center"} pt={'50px'}>
            <chakra.img src={'/image/NEST_Fi/02-icon-02@2x.png'} w={'150px'} alt={''}/>
            <Stack py={'50px'} w={'full'}>
              <Text fontWeight={'bold'} fontSize={'16px'}>Valid Settlement</Text>
              <Text fontWeight={'600'} fontSize={'12.5px'}>ETH cannot make valid settlement for<br/>all
                transactions; however, OMM can<br/>settle all transactions.</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack px={'24px'} py={'24px'} w={'full'}>
          <Stack px={'33px'} pt={'50px'} bg={'white'} borderRadius={'20px'} align={"center"}>
            <Stack>
              <chakra.img src={'/image/NEST_Fi/02-icon-03@2x.png'} w={'68px'} alt={''}/>
            </Stack>
            <Stack py={'50px'} w={'full'}>
              <Text fontWeight={'bold'} fontSize={'16px'}>Market Clearing</Text>
              <Text fontWeight={'600'} fontSize={'12.5px'}>OMM can structure atomic<br/>liquidation, which means
                that all<br/>excess return can be cleared.</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack px={'24px'} w={'full'}>
          <Stack px={'33px'} pt={'50px'} bg={'white'} borderRadius={'20px'} align={"center"}>
            <Stack>
              <chakra.img src={'/image/NEST_Fi/02-icon-04@2x.png'} w={'68px'} alt={''}/>
            </Stack>
            <Stack py={'50px'} w={'full'}>
              <Text fontWeight={'bold'} fontSize={'16px'}>Infinite Liquidity</Text>
              <Text fontWeight={'600'} fontSize={'12.5px'}>The liquidity will not be limited<br/>by the LP’s pool
                size, theoretically<br/>OMM can provide infinite liquidity</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack align={"center"} pt={'62px'}>
        <chakra.img src={'/image/NEST_Fi/iPhone_1.webp'} w={'180px'} alt={''}/>
      </Stack>
      <Stack align={"center"} bg={'rgba(255,255,255, 0.8)'} py={'30px'}>
        <Text fontWeight={'600'} fontSize={'16px'}>NESTFi - Futures</Text>
        <Text textAlign={"center"} fontWeight={'600'} fontSize={'12.5px'}>Trade BTC/USDT and ETH/USDT futures
          directly<br/>from your wallet without trading fee</Text>
        <Stack pt={'30px'}>
          <Button onClick={() => {
            window.open('https://finance.nestprotocol.org/#/futures', '_blank')
          }}>Open Futures</Button>
        </Stack>
      </Stack>
      <Stack align={"center"} py={'40px'}>
        <chakra.img src={'/image/NEST_Fi/iPhone_2.webp'} w={'180px'} alt={''}/>
      </Stack>
      <Stack align={"center"} bg={'rgba(255,255,255, 0.8)'} py={'30px'}>
        <Text fontWeight={'600'} fontSize={'16px'}>NESTFi - Options</Text>
        <Text textAlign={"center"} fontWeight={'600'} fontSize={'12.5px'}>Open Options with flexible choices on
          exercise date,<br/>direction and strike price, and no commission</Text>
        <Stack pt={'30px'}>
          <Button onClick={() => {
            window.open('https://finance.nestprotocol.org/#/options', '_blank')
          }}>Open Options</Button>
        </Stack>
      </Stack>
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