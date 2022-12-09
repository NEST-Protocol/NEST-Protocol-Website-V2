import {Button, Heading, HStack, Link, Stack, Text, useMediaQuery, Wrap, WrapItem, chakra} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const pcPage = (
    <Stack bgImage={'/image/PVM/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} spacing={'30px'} py={'160px'}>
        <Heading fontSize={'50px'}>
          PVM, Another Revolution <br/> in Blockchain
        </Heading>
        <Text fontSize={'18px'} fontWeight={'bold'}>
          NEST ecosystem is a paradigm revolution to the traditional<br/>
          market mechanism, providing the blockchain world with a<br/>
          whole new range of development tools and creative new assets.
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
          <Text fontSize={'25px'} fontWeight={'600'}>NEST PVM</Text>
          <Text fontSize={'15px'} fontWeight={'600'}>NEST Probabilistic Virtual Machine (PVM) is a virtual<br/>machine-like
            structure based on the basic function<br/>library. </Text>
          <HStack fontSize={'15px'} fontWeight={'600'} color={'#00A0E9'} pt={'24px'}>
            <Link w={'200px'} color={'00A0E9'} href={'/docs/Concept/PVM'}>PVM Mechanism <ChevronRightIcon/></Link>
            <Link w={'200px'} color={'00A0E9'} href={'/doc/ennestwhitepaper.pdf'}>Whitepaper <ChevronRightIcon/></Link>
          </HStack>
        </Stack>
      </HStack>


      <Stack align={"center"} textAlign={"center"} spacing={'36px'} py={'138px'}>
        <Heading fontSize={'50px'}>
          Build your tokenomic<br/>based on NEST
        </Heading>
        <Text fontSize={'25px'} fontWeight={'600'}>Developers can build their own tokenomic<br/>systems faster through
          NEST’s infrastructure.</Text>
        <Text>Developers can simplify the building of tokenomic systems<br/>
          into the construction of stochastic assets, developers only need to<br/>
          call the fundamental functions provided by PVM, create stochastic assets<br/>
          by programming these functions, and trade and<br/>
          settle the assets through the OMM mechanism.<br/>
          NEST Oracle provides the random information flow.
        </Text>

        <Wrap spacing={'44px'}>
          {
            [
              {image: '/image/PVM/01_icon.png', title: 'Generate on-chain assets with any risk-return structure'},
              {image: '/image/PVM/02_icon.png', title: 'Provide theoretical infinite liquidity for assets'},
              {image: '/image/PVM/03_icon.png', title: 'No agent, NEST becomes the seller of all assets'},
            ].map((item, index) => (
              <WrapItem key={index} w={'308px'} py={'100px'} borderRadius={'20px'} bg={'rgba(255,255,255,0.8)'}
                        border={'1px solid #EEEEEE'}>
                <Stack spacing={'40px'}>
                  <chakra.img src={item.image} h={'74px'}  objectFit={'contain'}/>
                  <Text fontSize={'13px'} fontWeight={'600'} px={'40px'}>{item.title}</Text>
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
          <Text fontSize={'16.5px'} fontWeight={'600'}>NEST PVM</Text>
          <Text fontSize={'12.5px'} fontWeight={'600'}>NEST Probabilistic Virtual Machine (PVM) is a virtual machine-like
            structure based on the basic function library. </Text>
          <Stack fontSize={'12.5px'} fontWeight={'600'} color={'#00A0E9'} pt={'24px'}>
            <Link w={'200px'} color={'#00A0E9'} href={'/docs/Concept/PVM'}>PVM Mechanism <ChevronRightIcon/></Link>
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
          [
            {image: '/image/PVM/01_icon.png', title: 'Generate on-chain assets with any risk-return structure'},
            {image: '/image/PVM/02_icon.png', title: 'Provide theoretical infinite liquidity for assets'},
            {image: '/image/PVM/03_icon.png', title: 'No agent, NEST becomes the seller of all assets'},
          ].map((item, index) => (
            <Stack key={index} w={'full'} py={'50px'} borderRadius={'20px'} bg={'rgba(255,255,255,0.8)'}
                      border={'1px solid #EEEEEE'} boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'24px'}>
              <chakra.img src={item.image} h={'74px'}  objectFit={'contain'}/>
              <Text fontSize={'12.5px'} textAlign={"center"} fontWeight={'600'} px={'80px'}>{item.title}</Text>
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