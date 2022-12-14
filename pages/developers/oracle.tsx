import {
  Button,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useMediaQuery,
  Wrap,
  WrapItem,
  chakra,
  Spacer, AspectRatio
} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import {ChevronRightIcon} from "@chakra-ui/icons";
import Head from "next/head";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const array1 = [
    {
      title: 'Nodeless',
      desc: 'Nodeless and permissionless quotation',
      img: '/image/Oracle/NODELESS@2x.png'
    },
    {
      title: 'Accuracy',
      desc: 'Reflect the real market price',
      img: '/image/Oracle/ACCURACY@2x.png'
    },
    {
      title: 'Validation',
      desc: 'Any third party with no threshold',
      img: '/image/Oracle/VALIDATION@2x.png'
    },
    {
      title: 'Stable',
      desc: 'Stablelized price informations reduce risks',
      img: '/image/Oracle/STABLE@2x.png'
    },
    {
      title: 'Flexibility',
      desc: 'Free to entry or exit',
      img: '/image/Oracle/FLEXIBILITY@2x.png'
    },
    {
      title: 'Anti - Attack',
      desc: 'High cost to tamper the price',
      img: '/image/Oracle/ANTI-ATTACK@2x.png'
    },
  ]

  const array2 = [
    {
      title: 'Create Channel',
      desc: 'Anyone can create a channel. Open a decentralized oracle with one click.',
      linkText: 'Create your channel',
      link: 'https://oracle.nestprotocol.org/'
    },
    {
      title: 'Price Quote',
      desc: 'Anyone can make a price quote on the chain after pledging some tokens. Quotes will be rewarded and deviations from the quote will be arbitrated.',
      linkText: 'How to quote',
      link: '/docs/root/Technical-Reference-NEST-Oracle'
    },
    {
      title: 'Verification',
      desc: 'During the validation period (T0), anyone can validate the price. If there is a deviation from the correct price, the verifier can question the price and choose to trade either valuation or quotation asset, and then the verifier has to quote a new price. ',
      linkText: 'How to verify',
      link: '/docs/root/Technical-Reference-NEST-Oracle'
    },
    {
      title: 'Effective Price',
      desc: 'If a price is not arbitrated during the verification period(T0), this price is the effective price and anyone can use this price for free.',
      linkText: 'How to call',
      link: '/docs/root/Technical-Reference-NEST-Oracle'
    },
  ]

  const array3 = [
    {
      image: '/image/Oracle/card_01@2x.png',
      title: `Three different types of Oracle:Chainlink, NEST, and MakerDAO`,
      desc: 'Blockchain is known as the machine of trust. The biggest innovation of',
      time: 'Otc 12, 2022',
      link: '/blogs/Three-different-types-of-Oracle-Chainlink-NEST-and-MakerDAO',
    },
    {
      image: '/image/Oracle/card_02@2x.png',
      title: 'What make tokens an asset? Game theory and Equilibrium',
      desc: `Some people talk about Bitcoin with a tone of contempt: " What\'s  the use of this thing? It's hype,`,
      time: 'Sep 19, 2022',
      link: '/blogs/What-make-tokens-an-asset-Game-theory-and-Equilibrium',
    },
    {
      image: '/image/Oracle/card_03@2x.png',
      title: 'NEST Protocol A New Paradigm of Game Theoretic Oracle',
      desc: 'Blockchain innovation defined the major part of the last decade, with cryptocurrency disrupting',
      time: 'Jun 9, 2022',
      link: '/blogs/NEST-Protocol-A-New-Paradigm-of-Game-Theoretic-Oracle',
    },
  ]

  const title = "NEST Oracle, The Truly Decentralized Oracle | NEST Protocol";
  const description = "Unlike the price generated by Price Feed in the market, it constructs a decentralized non-cooperative gaming network and uses the mechanism of arbitrage and two-way options to determine the final price. ";

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
    <Stack bgImage={'/image/Oracle/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      { SEO }
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} spacing={'30px'} py={'120px'}>
        <Heading fontSize={'50px'}>NEST Oracle<br/>The Truly Decentralized Oracle</Heading>
        <Text fontSize={'18px'} fontWeight={'bold'}>Unlike the price generated by Price Feed in the market, <br/>
          it constructs a decentralized non-cooperative gaming network and <br/>
          uses the mechanism of arbitrage and two-way options to determine <br/>
          the final price. NEST Oracle also introduces random information based <br/>
          on decentralized price flows on the chain. <br/>
        </Text>
        <HStack spacing={'48px'}>
          <Button as={Link} href={'/docs/Concept/NEST-Oracle'} bg={'#EAAA00'} h={'34px'} w={'160px'} borderRadius={'17px'} fontWeight={'bold'} color={'#003232'}>Developer
            Doc</Button>
          <Button as={Link} href={'https://github.com/NEST-Protocol'} bg={'#EAAA00'} h={'34px'} w={'160px'} borderRadius={'17px'} fontWeight={'bold'}
                  color={'#003232'}>Github</Button>
        </HStack>
      </Stack>
      <Stack bg={"white"} align={"center"} textAlign={"center"} pt={'90px'} pb={'60px'} spacing={'44px'}>
        <Heading fontSize={'50px'}>What is NEST Oracle?</Heading>
        <Stack w={'1200px'} h={'full'} position={"relative"} borderRadius={'12px'} overflow={"hidden"}>
          <AspectRatio ratio={16/9}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mOF8o0OZoxE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </AspectRatio>
        </Stack>
      </Stack>

      <Stack textAlign={"center"} align={"center"} spacing={'40px'} py={'138px'}>
        <Heading fontSize={'50px'}>
          Impeccable Technical<br/>Architecture
        </Heading>
        <Wrap spacing={'44px'} w={'1100px'} justify={"center"}>
          {
            array1.map((item, index) => (
              <WrapItem key={index}>
                <Stack w={'308px'} bg={'rgba(255,255,255,0.8)'} borderRadius={'20px'} py={'72px'} boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'40px'} border={'1px solid #EEEEEE'}>
                  <Stack h={'80px'}>
                    <chakra.img src={item.img} h={'full'} objectFit={'contain'}/>
                  </Stack>
                  <Stack px={'50px'} h={'60px'}>
                    <Text fontSize={'18px'} fontWeight={'bold'}>{item.title}</Text>
                    <Text fontSize={'13px'} fontWeight={'600'}>{item.desc}</Text>
                  </Stack>
                </Stack>
              </WrapItem>
            ))
          }
        </Wrap>
      </Stack>

      <Stack textAlign={"center"} align={"center"} py={'90px'} bg={'white'} spacing={'55px'}>
        <Heading fontSize={'50px'}>
          How does NEST Oracle work?
        </Heading>
        <Stack h={'600px'}>
          <chakra.img src={'/image/Oracle/Flowchart.svg'} h={'full'} objectFit={'contain'}/>
        </Stack>
      </Stack>

      <Stack align={"center"} pt={'44px'} pb={'138px'}>
        <Wrap justify={'center'} spacing={'44px'} w={'800px'}>
          {
            array2.map((item, index) => (
              <WrapItem key={index}>
                <Stack w={'308px'} h={'300px'} bg={'white'} borderRadius={'20px'} px={'30px'} justify={"center"}>
                  <Stack minH={'200px'}>
                    <Text fontSize={'18px'} fontWeight={'bold'}>{item.title}</Text>
                    <Text fontSize={'13px'} fontWeight={'600'}>{item.desc}</Text>
                  </Stack>
                  <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'15px'} href={item.link}>
                    {item.linkText} <ChevronRightIcon/>
                  </Link>
                </Stack>
              </WrapItem>
            ))
          }
        </Wrap>
        <Stack pt={'68px'}>
          <Button as={Link} href={'/docs/root/Technical-Reference-NEST-Oracle'} variant={'outline'} borderRadius={'17px'} h={'34px'} border={'2px solid'} borderColor={'#EAAA00'}
                  color={'#EAAA00'}>
            More
          </Button>
        </Stack>

        <Wrap justify={"center"} pt={'69px'} spacing={'44px'}>
          {
            array3.map((item, index) => (
              <WrapItem key={index}>
                <Stack w={'308px'} bg={'white'} borderRadius={'20px'}>
                  <Stack h={'140px'}>
                    <chakra.img src={item.image} w={'full'} objectFit={'contain'}/>
                  </Stack>
                  <Stack px={'30px'} py={'24px'} h={'240px'}>
                    <Link href={item.link} fontSize={'18px'} fontWeight={'bold'}>{item.title}</Link>
                    <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>{item.desc}</Text>
                    <Spacer/>
                    <Text fontSize={'13px'} fontWeight={'500'} color={'#878787'}>{item.time}</Text>
                  </Stack>
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
    <Stack bgImage={'/image/Oracle/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      { SEO }
      <NavigationMobile/>
      <Stack textAlign={"center"} align={"center"} py={'90px'}>
        <Heading fontSize={'25px'} fontWeight={'bold'}>NEST Oracle,<br/>
          The Truly<br/>
          Decentralized Oracle
        </Heading>
        <Text fontSize={'12.5px'} fontWeight={'600'}>Unlike the price generated by Price<br/>
          Feed in the market, it constructs a<br/>
          decentralized non-cooperative gaming<br/>
          network and uses the mechanism<br/>
          of arbitrage and two-way options to<br/>
          determine the final price. NEST<br/>
          Oracle also introduces random<br/>
          information based on decentralized<br/>
          price flows on the chain.<br/>
        </Text>
        <Stack spacing={'30px'} pt={'20px'}>
          <Button w={'170px'} minH={'44px'} as={Link} href={'/docs/Concept/NEST-Oracle'}>
            Developer Doc
          </Button>
          <Button w={'170px'} minH={'44px'} as={Link} href={'https://github.com/NEST-Protocol'}>
            Github
          </Button>
        </Stack>
      </Stack>
      <Stack textAlign={"center"} align={"center"} py={'120px'} bg={'rgba(255, 255,255, 0.7)'} spacing={'80px'}
             px={'24px'}>
        <Heading fontSize={'25px'}>What is <br/>
          NEST Oracle?</Heading>
        <Stack w={'full'} h={'full'} borderRadius={'12px'} overflow={"hidden"}>
          <AspectRatio ratio={16/9}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mOF8o0OZoxE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
          </AspectRatio>
        </Stack>
      </Stack>
      <Stack align={"center"} textAlign={"center"} px={'24px'} py={'62px'} spacing={'40px'}>
        <Heading fontSize={'25px'}>
          Impeccable Technical<br/>
          Architecture
        </Heading>
        <Wrap w={'full'} spacing={'20px'} justify={'center'}>
          {
            array1.map((item, index) => (
              <WrapItem key={index} w={'44%'} borderRadius={'17px'}>
                <Stack bg={'rgba(255,255,255,0.8)'} py={'35px'} w={'full'} borderRadius={'20px'} border={'1px solid #EEEEEE'} spacing={'20px'} justify={"center"}>
                  <Stack h={'40px'}>
                    <chakra.img src={item.img} h={'full'} objectFit={'contain'}/>
                  </Stack>
                  <Stack px={'30px'} h={'120px'}>
                    <Text fontSize={'18px'} fontWeight={'bold'}>{item.title}</Text>
                    <Text fontSize={'13px'} fontWeight={'600'}>{item.desc}</Text>
                  </Stack>
                </Stack>
              </WrapItem>
            ))
          }
        </Wrap>
      </Stack>
      <Stack align={"center"} textAlign={"center"} spacing={'44px'}>
        <Heading>
          How does NEST<br/> Oracle work?
        </Heading>
        <Stack w={'full'} px={'30px'} py={'110px'} bg={'white'}>
          <chakra.img src={'/image/Oracle/Flowchart2.svg'} h={'full'} objectFit={'contain'}/>
        </Stack>
      </Stack>
      <Stack py={'62px'} px={'24px'} spacing={'24px'}>
        {
          array2.map((item, index) => (
            <Stack key={index} px={'38px'} py={'100px'} borderRadius={'17px'} boxShadow={'0px 0px 45px 5px #E5E5E5'}
                   bg={'rgba(255,255,255,0.8)'}>
              <Text fontSize={'17px'} fontWeight={'bold'}>{item.title}</Text>
              <Text fontSize={'12.5px'} fontWeight={'600'}>{item.desc}</Text>
              <Stack h={'30px'}>
              </Stack>
              <Link href={item.link} color={'#00A0E9'} fontSize={'12.5px'} fontWeight={600}>{item.linkText} <ChevronRightIcon/></Link>
            </Stack>
          ))
        }

        <Stack align={"center"} pt={'44px'}>
          <Button as={Link} href={'/docs/root/Technical-Reference-NEST-Oracle'} w={'190px'} variant={"outline"} minH={'44px'}>
            More
          </Button>
        </Stack>
      </Stack>
      <Stack px={'24px'} spacing={'24px'} pb={'64px'}>
        {
          array3.map((item, index) => (
            <Stack w={'full'} bg={'white'} borderRadius={'20px'} key={index} boxShadow={'0px 0px 45px 5px #E5E5E5'}>
              <Stack>
                <chakra.img src={item.image} w={'full'} objectFit={'contain'}/>
              </Stack>
              <Stack px={'30px'} py={'24px'}>
                <Link href={item.link} fontSize={'12.5px'} fontWeight={'bold'}>{item.title}</Link>
                <Text fontSize={'10px'} fontWeight={'600'} color={'#878787'}>{item.desc}</Text>
                <Text fontSize={'10px'} fontWeight={'500'} color={'#878787'}>{item.time}</Text>
              </Stack>
            </Stack>
          ))
        }
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

export default Page