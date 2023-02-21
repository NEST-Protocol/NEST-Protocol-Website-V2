import {Button, Heading, HStack, Link, Stack, Text, useMediaQuery, Wrap, WrapItem, chakra} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import {ChevronRightIcon} from "@chakra-ui/icons";
import Head from "next/head";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const array1 = [
    {image: '/image/PVM/01_icon@2x.png', title: 'Decentralized exchange', body: `derivatives exchanges need to solve technical support, asset custody , liquidity support and marketing. use the NEST protoco, you only need to focus on marketing.`},
    {image: '/image/PVM/02_icon@2x.png', title: 'Metaverse and GameFi', body: `NEST provides a series of martingale functions, such fair games around deterministic mathematical relations, probability relations, and random processes can be developed by calling the NEST functions, so as to realize the unified value measurement of different games.`},
    {image: '/image/PVM/03_icon@2x.png', title: 'Lottery, prop synthesis, etc', body: `Some basic designs based on randomness can be realized with only some distribution functions.`},
  ]
  const title = "NESTCraft | NEST Protocol";
  const description = "NESTCraft, the martingale function library";

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
    <Stack bgImage={'/image/PVM/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      {SEO}
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} spacing={'30px'} py={'160px'}>
        <Heading fontSize={'50px'}>
          NESTCraft,<br/> the martingale function library
        </Heading>
        <Text fontSize={'18px'} fontWeight={'bold'}>
          NESTCraft, which is a combination of martingales functions<br/> similar to the Ethereum virtual machine,<br/> will greatly broaden the scope of NEST&apos;s application,<br/> transforming it into a chain infrastructure that will enable anyone<br/> to create more NEST-based applications.
        </Text>
        <HStack spacing={'48px'}>
          <Button as={Link} href={'/docs/Concept/PVM'} bg={'#EAAA00'} h={'34px'} w={'160px'} borderRadius={'17px'} fontWeight={'bold'} color={'#003232'}>Developer
            Doc</Button>
          <Button as={Link} href={'https://github.com/NEST-Protocol'} bg={'#EAAA00'} h={'34px'} w={'160px'} borderRadius={'17px'} fontWeight={'bold'}
                  color={'#003232'}>Github</Button>
        </HStack>
      </Stack>

      <HStack py={'162px'} px={'104px'} bg={'rgba(255,255,255, 0.8)'} spacing={'160px'}>
        <Stack w={'50%'} minW={'50%'}>
          <chakra.img src={'/image/PVM/flow_chart.svg'} />
        </Stack>
        <Stack>
          <Text fontSize={'25px'} fontWeight={'600'}>Schematic of NESTCraft</Text>
          <Text fontSize={'15px'} fontWeight={'600'}>When NEST gains more liquidity, we can use the NEST/USD oracle to convert the underlying assets of the transaction from X NESTs to X USD of NESTs, which will meet the needs of many attempts to establish hedging positions based on the fiat currency standard.</Text>
          <HStack fontSize={'15px'} fontWeight={'600'} color={'#00A0E9'} pt={'24px'}>
            <Link w={'200px'} color={'00A0E9'} href={'/docs/Concept/PVM'}>NESTCraft Mechanism <ChevronRightIcon/></Link>
            <Link w={'200px'} color={'00A0E9'} href={'/doc/ennestwhitepaper.pdf'}>Whitepaper <ChevronRightIcon/></Link>
          </HStack>
        </Stack>
      </HStack>

      <Stack align={"center"} textAlign={"center"} spacing={'36px'} py={'138px'}>
        <Heading fontSize={'50px'}>
          NESTCraft<br/>Applications
        </Heading>
        <Text fontSize={'25px'} fontWeight={'600'} maxW={'container.md'}>A given random information flow can be transformed by various functions to obtain a series of martingales, which can be used for the NEST martingale transactions. NESTcraft can continue to expand the basic function library accordingto the needs of the on chain world, thereby improving the application range of the NEST. This is a basic feature of the NEST’s greater scalability</Text>
        <Wrap spacing={'44px'}>
          {
            array1.map((item, index) => (
              <WrapItem key={index} w={'308px'} py={'40px'} borderRadius={'20px'} bg={'rgba(255,255,255,0.8)'}
                        border={'1px solid #EEEEEE'}>
                {/*<Stack spacing={'20px'}>*/}
                {/*  <chakra.img src={item.image} h={'74px'}  objectFit={'contain'}/>*/}
                {/*  <Text fontSize={'13px'} fontWeight={'600'} px={'40px'}></Text>*/}
                {/*  <Text fontSize={'13px'} fontWeight={'600'} px={'40px'}></Text>*/}
                {/*</Stack>*/}
                <Stack px={'30px'} py={'20px'} bg={"white"} w={'308px'} borderRadius={'20px'}>
                  <Stack align={"center"} h={'74px'} justify={"center"} mb={'20px'}>
                    <chakra.img src={item.image} alt={''} h={'98px'}/>
                  </Stack>
                  <Text fontSize={'18px'} fontWeight={'bold'}>{item.title}</Text>
                  <Text fontWeight={'600'} fontSize={'13px'}>{item.body}</Text>
                </Stack>
              </WrapItem>
            ))
          }
        </Wrap>
      </Stack>

      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack bgImage={'/image/PVM/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      {SEO}
      <NavigationMobile/>
      <Stack textAlign={"center"} align={"center"} pt={'100px'} pb={'150px'}>
        <Heading fontSize={'25px'}>
          PVM,<br/>
          Another Revolution<br/>
          in Blockchain
        </Heading>
        <Text fontSize={'12.5px'} fontWeight={'600'}>
          NEST ecosystem is a paradigm revolution<br/>
          to the traditional market mechanism,<br/>
          providing the blockchain world with a<br/>
          whole new range of development<br/>
          tools and creative new assets.
        </Text>
        <Stack spacing={'30px'} pt={'20px'}>
          <Button w={'170px'} as={Link} href={'/docs/Concept/PVM'} minH={'44px'}>
            Developer Doc
          </Button>
          <Button as={Link} href={'https://github.com/NEST-Protocol'} w={'170px'} minH={'44px'}>
            Github
          </Button>
        </Stack>
      </Stack>
      <Stack py={'50px'} px={'50px'} bg={'rgba(255,255,255, 0.8)'} spacing={'160px'}>
        <Stack w={'full'} minW={'50%'}>
          {/*TODO*/}
          <chakra.img src={'/image/PVM/flow_chart2.svg'} />
        </Stack>
        <Stack align={"center"} textAlign={"center"}>
          <Text fontSize={'16.5px'} fontWeight={'600'}>Schematic of NESTCraft</Text>
          <Text fontSize={'12.5px'} fontWeight={'600'}>When NEST gains more liquidity, we can use the NEST/USD oracle to convert the underlying assets of the transaction from X NESTs to X USD of NESTs, which will meet the needs of many attempts to establish hedging positions based on the fiat currency standard.</Text>
          <Stack fontSize={'12.5px'} fontWeight={'600'} color={'#00A0E9'} pt={'24px'}>
            <Link w={'200px'} color={'#00A0E9'} href={'/docs/Concept/PVM'}>NESTCraft Mechanism <ChevronRightIcon/></Link>
            <Link w={'200px'} color={'#00A0E9'} href={'/doc/ennestwhitepaper.pdf'}>Whitepaper <ChevronRightIcon/></Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack textAlign={"center"} py={'62px'} spacing={'40px'}>
        <Heading fontSize={'25px'}>
          Building your tokenomic<br/>
          based on NEST
        </Heading>
        <Text fontSize={'16.5px'} fontWeight={"bold"}>
          Developers can build their<br/>
          own tokenomic
        </Text>
        <Text fontSize={'15px'} fontWeight={'600'}>
          Developers can simplify the building<br/>
          of tokenomic systems into the<br/>
          construction of stochastic assets,<br/>
          developers only need to call the<br/>
          fundamental functions provided by PVM,<br/>
          create stochastic assets by programming<br/>
          these functions, and trade and settle the<br/>
          assets through the OMM mechanism.<br/>
          NEST Oracle provides the random<br/>
          information flow.
        </Text>
      </Stack>
      <Stack px={'24px'} spacing={'24px'}>
        {
          array1.map((item, index) => (
            <Stack key={index} px={'24px'} w={'full'}>
              <Stack px={'33px'} pt={'50px'} bg={'white'} borderRadius={'20px'} align={"center"}>
                <Stack>
                  <chakra.img src={item.image} h={'74px'} alt={''}/>
                </Stack>
                <Stack pt={'20px'} pb={'50px'} w={'full'} textAlign={"center"}>
                  <Text fontWeight={'bold'} fontSize={'16px'}>{item.title}</Text>
                  <Text fontWeight={'600'} fontSize={'12.5px'}>{item.body}</Text>
                </Stack>
              </Stack>
            </Stack>
          ))
        }
      </Stack>
      <Stack h={'62px'}></Stack>
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

export default Page