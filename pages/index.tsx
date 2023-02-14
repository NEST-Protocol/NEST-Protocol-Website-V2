import {
  Stack,
  Text,
  Heading,
  HStack,
  Button,
  chakra,
  Box,
  Link, Divider, useMediaQuery
} from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import gtag, {install} from 'ga-gtag'
import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {AiOutlineGithub, AiOutlineTwitter} from "react-icons/ai";
import {FaTelegramPlane, FaTiktok} from "react-icons/fa";
import Head from "next/head";
import NavigationMobile from "../components/NavigationMobile";
import FooterMobile from "../components/FooterMobile";

export default function Home() {
  const [start, setStart] = useState(0)
  const [selectedWork, setSelectedWork] = useState(0)
  const [scroll, setScroll] = useState(0)
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const work = [
    {
      type: 'NEST Assets',
      title: `NEST assets are created through formation capitalization,\n which provides rewards for bidders in the Oracle module\n and currency units for NEST martingale trading.\n Its internal cost mechanism ensures that the system's supply is constrained,\n and it has an internal price increase logic,\n and all holders share the benefits and risks of its value.`,
      // desc: `PVM enables the generation and programming of\nstochastic assets, which is widely used in DeFi, GameFi,\nNFT, etc.`,
      link: '/docs/Concept/PVM/'
    },
    {
      type: 'NEST Oracle',
      title: `NEST oracle provides the on-chain world\n with prices obtained through completely decentralized games`,
      // desc: `The NEST token is generated using the NEST\noracle's stochastic information. The NEST token\n serves as the monetary unit for all stochastic assets\nin the NEST ecosystem.`,
      link: '/docs/Concept/NEST-Oracle/'
    },
    {
      type: 'NESTCraft',
      title: `NESTCraft transforms various on-chain random\n sources into a rich martingale function library,\n solves the problem of insufficient liquidity\n for investors via the\n ILM (Infinite Liquidity Maker) mechanism,\n and offers a variety of customizable martingale\n trading options.`,
      // desc: `OMM addresses the issue of liquidity and settlement.\nNEST tokens can be used to circulate any stochastic\nasset. Any benefit, even if it is greater than the\nexpected value, can be settled.\nThere is no need to match makers and takers, and all\nNEST holders share the same risks and rewards.`,
      link: '/docs/Concept/OMM/'
    },
  ]

  const developmentPath = [
    {title: `2018.12 v1.0`, desc: `Start! A lending\nprotocol goes live.`},
    {title: '2019.12 v2.0', desc: `NEST oracle V1.0\ngoes live.`},
    {
      title: '2020.07 v3.0',
      desc: `NEST oracle upgraded.\nOpen all oracle tracks\nand supported all\nERC20 Token/ETH price`
    },
    {title: '2021.04 v3.6', desc: `Voting governance\nmodule was added`},
    {title: '2021.11 v4.1', desc: `NEST oracle upgraded.\nAllows anyone\nto build their oracle\nfor their project.`},
    {title: '2021.12 v4.3', desc: `NEST oracle upgraded.\nAllows each channel for\nmultiple quotation pairs.`},
    {title: '2022.07 v5.0', desc: `Merge FORT protocol\nNEST protocol= NEST oracle\n+ OMM +PVM`},
    {title: '2023.02.10', desc: `NEST protocol upgraded.\nNEST launched the decentralized martingale network`}
  ]

  const title = "NEST Protocol | The most important infrastructure after ETH"
  const description = "NEST Protocol is the stochastic computer based on PVM, enables the generation and programming of stochastic assets."

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

  useEffect(() => {
    install('G-ELV55124T4');
  }, [])

  const pcPage = (
    <Stack bgSize={'cover'} bgImage={"image/Home/Home_bg.jpg"} bgPosition={"center"}>
      { SEO }
      <Navigation/>
      <Stack w={'100%'} h={'100%'} spacing={0} pb={'130px'}>
        <Stack py={'220px'}>
          <Stack spacing={'28px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>NEST PROTOCOL<br/>=<br/>Decentralized Martingale Network</Heading>
            <Text textAlign={"center"} fontWeight={'600'} fontSize={'21px'}>A decentralized trading infrastructure that<br/> eliminates market makers and LPs.</Text>
            <HStack justify={"center"}>
              <Button w={'160px'} minH={'44px'} fontSize={'25px'} onClick={() => {
                gtag('event', 'clickApp2', {
                  'from': 'desktop page'
                })
                window.open('https://finance.nestprotocol.org/', '_blank')
              }}>
                App
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Stack px={['20px', '40px', '80px', '160px']}>
          <Stack direction={"row"} bg={'rgba(255, 255, 255, 0.7)'} px={'20px'} py={'92px'} borderRadius={'20px'}>
            <Stack align={"center"} h={'600px'} overflow={"scroll"} w={'full'}
                   onScroll={(e) => {
                     // @ts-ignore
                     const scrollTop = e.target.scrollTop;
                     setScroll(scrollTop);
                   }}>
              <Heading fontSize={'50px'} textAlign={"center"}>What is NEST Protocol?</Heading>
              <chakra.img src={'/image/Home/01-icon-01@2x.png'} w={'210px'} alt={''} py={'50px'}/>
              <Stack pb={'100px'} align={"center"}>
                <Text fontSize={'25px'} fontWeight={"bold"} w={'660px'}
                      textAlign={"center"}>The NEST Protocol is a decentralized trading infrastructure known as the martingale network.<br/>
                  <br/>
                  NEST uses smart contracts to eliminate market markers and LPs while providing traders with nearly infinite liquidity through risk sharing.
                </Text>
              </Stack>
              <Stack pb={'100px'} align={"center"}>
                <chakra.img src={'/image/Home/01-icon-04@2x.png'} w={'105px'} alt={''} pb={'50px'}/>
                <Text fontSize={'25px'} fontWeight={"bold"} w={'620px'}
                      textAlign={"center"}>{`NEST's mechanism`}</Text>
                <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"} w={'600px'}>
                  All users trade with NEST smart contracts, burning specific amounts of $NEST to obtain the corresponding financial assets, such as futures, options, synthetic assets, and so on. The smart contract then settles and repurchases the financial assets by issuing more $NEST.
                </Text>
              </Stack>
              <Stack pb={'100px'} align={"center"}>
                <chakra.img src={'/image/Home/01-icon-05@2x.png'} w={'159px'} alt={''} pb={'50px'}/>
                <Text fontSize={'25px'} fontWeight={"bold"} w={'620px'}
                      textAlign={"center"}>{`NEST's Profit Model`}</Text>
                <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"} w={'600px'}>
                  We believe that in the long run, people cannot outperform the market, so the NEST burned will exceed the NEST generated, allowing our economic model to deflate and the $NEST price to rise.
                </Text>
              </Stack>
            </Stack>
            <Stack align={"center"} h={'600px'} w={'20px'} justifyContent={"center"} spacing={'12px'}>
              <Box w={'10px'} h={'10px'} bg={scroll >= 0 ? '#EAAA00' : ''}
                   border={scroll >= 0 ? '' : '1px solid #878787'} borderRadius={'full'}/>
              <Box w={'10px'} h={'10px'} bg={scroll >= 240 ? '#EAAA00' : ''}
                   border={scroll >= 240 ? '' : '1px solid #878787'} borderRadius={'full'}/>
              <Box w={'10px'} h={'10px'} bg={scroll >= 640 ? '#EAAA00' : ''}
                   border={scroll >= 640 ? '' : '1px solid #878787'} borderRadius={'full'}/>
            </Stack>
          </Stack>
        </Stack>
        <Stack align={"center"}>
          <Heading pt={'138px'} fontSize={'50px'} textAlign={"center"} pb={'57px'}>How does NEST Protocol
            work?</Heading>
          <Stack bg={'rgba(255, 255, 255, 0.7)'} align={"center"} py={'130px'} spacing={'18px'} w={'full'}>
            <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                   onClick={() => setSelectedWork(0)}
                   cursor={'pointer'}>
              {/*<Text>Program stochastic asset</Text>*/}
              <Text color={'#00A0E9'}>NEST Assets</Text>
              <ChevronDownIcon color={'#00A0E9'}/>
            </Stack>
            <HStack align={"end"} spacing={'24px'}>
              <Stack w={'300px'} align={"end"}>
                <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                       onClick={() => setSelectedWork(1)} cursor={'pointer'}>
                  {/*<Text>Provide random information flow</Text>*/}
                  <Text color={'#00A0E9'}>NEST Oracle</Text>
                  <ChevronDownIcon color={'#00A0E9'}/>
                </Stack>
              </Stack>
              <Stack pl={'12px'}>
                <chakra.img src={'/image/Home/01-icon-02@2x.png'} w={'240px'} alt={''}/>
              </Stack>
              <Stack align={"start"} w={'300px'}>
                <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                       onClick={() => setSelectedWork(2)} cursor={'pointer'}>
                  {/*<Text>Generate stochastic assets</Text>*/}
                  <Text color={'#00A0E9'}>NESTCraft</Text>
                  <ChevronDownIcon color={'#00A0E9'}/>
                </Stack>
              </Stack>
            </HStack>
            <Stack pt={'50px'} h={'300px'}>
              <Text fontSize={'25px'} textAlign={"center"} fontWeight={'bold'}>
                {work[selectedWork].type}
              </Text>
              <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"} whiteSpace={'break-spaces'}>
                {work[selectedWork].title}
              </Text>
              <Text textAlign={"center"} color={'#7D7D7D'} fontWeight={'600'} fontSize={'15px'}
                    whiteSpace={'break-spaces'}>
                {/*{work[selectedWork]?.desc}*/}
                <Link color={'#00A0E9'} href={work[selectedWork].link}> Learn more <ChevronRightIcon/></Link>
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack py={'138px'} spacing={'48px'}>
          <Heading fontSize={'50px'} textAlign={"center"}>Development path</Heading>
          <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"}>The NEST community always insists<br/>on
            decentralization and innovation</Text>
          <HStack px={'45px'} align={"start"}>
            <chakra.img src={'/svg/right_icon.svg'} w={'44px'} h={'44px'} transform={'rotate(180deg)'}
                        opacity={start === 0 ? 0.5 : 1}
                        cursor={"pointer"}
                        onClick={() => {
                          if (start > 0) {
                            setStart(start - 4)
                          }
                        }}/>
            <Stack w={'full'} spacing={'-36px'} align={"center"}>
              <Stack h={'44px'} w={'full'} justify={"center"} px={'15px'}>
                <Divider h={'1px'} color={'#C9C9C9'}/>
              </Stack>
              <HStack px={'45px'} justify={"space-around"} w={'full'} align={"start"}>
                {developmentPath.slice(start, start + 5).map((item, index) => (
                  <Stack key={index} align={"center"} w={'200px'} h={'180px'}>
                    <chakra.img src={'/image/Home/01-icon-03.png'} h={'24px'} w={'36px'} alt={''} mb={'22px'}/>
                    <Text fontSize={'17px'} fontWeight={'bold'}>{item.title}</Text>
                    <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>{item.desc}</Text>
                  </Stack>
                ))}
              </HStack>
            </Stack>
            <chakra.img src={'/svg/right_icon.svg'} w={'44px'} h={'44px'} cursor={"pointer"}
                        opacity={start + 4 > developmentPath.length ? 0.5 : 1}
                        onClick={() => {
                          if (start < developmentPath.length - 4) {
                            setStart(start + 4)
                          }
                        }}/>
          </HStack>
        </Stack>
        <Stack bg={'rgba(255, 255, 255, 0.7)'} py={'90px'}>
          <Stack spacing={'28px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>More</Heading>
            <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"}>Over 1 MILLION community members, Join
              us</Text>
          </Stack>
          <HStack justify={"center"} alignItems={"start"} spacing={'120px'} py={'62px'} color={'#00A0E9'}
                  fontWeight={'600'}>
            <Stack spacing={'20px'}>
              <Stack align={"center"}>
                <AiOutlineTwitter fontSize={'48px'} color={'#003232'}/>
              </Stack>
              <Link href={'https://twitter.com/NEST_Protocol'} color={'#00A0E9'} isExternal onClick={() => {
                gtag('event', 'clickTwitter', {
                  'from': 'desktop header'
                })
              }}>
                @NEST_Protocol <ChevronRightIcon color={'#00A0E9'}/>
              </Link>
              {/*<Link href={'https://twitter.com/NESTDAOSupport'}*/}
              {/*      isExternal>NEST Roundtable <ChevronRightIcon/></Link>*/}
            </Stack>
            <Stack spacing={'20px'}>
              <Stack align={"center"}>
                <FaTelegramPlane fontSize={'48px'} color={'#003232'}/>
              </Stack>
              <Link href={'https://t.me/NEST_Community'} isExternal onClick={() => {
                gtag('event', 'clickTelegram', {
                  'from': 'desktop header',
                  'value': '@NEST_Community'
                })
              }}>
                <HStack align={"center"}>
                  <chakra.img src={'/image/Home/icon_8.svg'} w={'17px'} h={'16px'}/>
                  <Text color={'#00A0E9'} fontWeight={'600'}>@NEST_Community</Text>
                  <ChevronRightIcon color={'#00A0E9'}/>
                </HStack>
              </Link>
              <Link href={'https://t.me/nest_chat'} isExternal onClick={() => {
                gtag('event', 'clickTelegram', {
                  'from': 'desktop header',
                  'value': '@nest_chat'
                })
              }}>
                <HStack align={"center"}>
                  <chakra.img src={'/image/Home/icon_7.svg'} w={'17px'} h={'16px'}/>
                  <Text color={'#00A0E9'} fontWeight={'600'}>@nest_chat</Text>
                  <ChevronRightIcon color={'#00A0E9'}/>
                </HStack>
              </Link>
            </Stack>
            <Stack spacing={'20px'}>
              <Stack align={"center"}>
                <AiOutlineGithub fontSize={'48px'} color={'#003232'}/>
              </Stack>
              <Link href={'https://github.com/nest-protocol'} color={'#00A0E9'} onClick={() => {
                gtag('event', 'clickGithub', {
                  'from': 'desktop header'
                })
              }}>For developers <ChevronRightIcon color={'#00A0E9'}/></Link>
            </Stack>
            <Stack spacing={'20px'}>
              <Stack align={"center"} p={'4px'}>
                <FaTiktok fontSize={'40px'} color={'#003232'}/>
              </Stack>
              <Link href={'https://www.tiktok.com/@nest_protocol'} color={'#00A0E9'} onClick={() => {
                gtag('event', 'clickGithub', {
                  'from': 'desktop header'
                })
              }}>NEST Tiktok <ChevronRightIcon color={'#00A0E9'}/></Link>
            </Stack>
          </HStack>
          <Stack spacing={'60px'} align={"center"}>
            <HStack spacing={'100px'}>
              <Stack w={'130px'} align={"center"}>
                <Link href={'https://www.coinbase.com/price/nest-protocol'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-coinbase.png'} h={'34px'} alt={''}/>
                </Link>
              </Stack>
              <Stack w={'130px'} align={"center"}>
                <Link href={'https://www.huobi.com/'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-huobiresearch.png'} h={'34px'} alt={''}/>
                </Link>
              </Stack>
              <Stack w={'130px'} align={"center"}>
                <Link href={'https://www.mexc.com/exchange/NEST_USDT'} isExternal>
                  <chakra.img src={'/image/Home/01-icon-mexc.png'} h={'45px'} alt={''}/>
                </Link>
              </Stack>
            </HStack>
            <HStack spacing={'100px'}>
              <Link w={'130px'} href={'https://www.lbank.info/exchange/nest/usdt'} isExternal>
                <chakra.img src={'/image/Home/01-icon-LBANK.svg'} h={'45px'} alt={''}/>
              </Link>
              <Link w={'130px'} href={'https://www.bibox.com/en/exchange/basic/NEST_USDT'} isExternal>
                <chakra.img src={'/image/Home/01-icon-Bibox.svg'} h={'45px'} alt={''}/>
              </Link>
              <Link w={'130px'} href={'https://www.gate.io/trade/NEST_USDT'} isExternal>
                <chakra.img src={'/image/Home/01-icon-Gate.svg'} w={'130px'} h={'45px'} alt={''}/>
              </Link>
            </HStack>
          </Stack>
          <Text fontSize={'21px'} fontWeight={'bold'} textAlign={"center"} pt={'93px'}>Listed on more than 15
            exchanges</Text>
        </Stack>
        <Stack py={'138px'} align={"center"} spacing={'48px'}>
          <Heading fontSize={'50px'} textAlign={"center"}>Blogs</Heading>
          <HStack spacing={'44px'}>
            <Stack w={'308px'} bg={"white"} borderRadius={'20px'} spacing={0} cursor={"pointer"} onClick={() => {
              window.open('/blog/Coinbase-Announces-Planned-Listing-of-Tokens-Adds-NEST/', '_blank')
            }}>
              <chakra.img src={'/image/Home/01-card-01@2x.png'} alt={''}/>
              <Stack spacing={'10px'} p={'20px'} h={'230px'}>
                <Text fontSize={'18px'} fontWeight={'bold'}>Coinbase Announces Planned Listing of Tokens, Adds $NEST
                  to ‘Experimental Asset’ Label</Text>
                <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Leading United States-based
                  cryptocurrency</Text>
                <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>July 25, 2022</Text>
              </Stack>
            </Stack>
            <Stack w={'308px'} bg={"white"} borderRadius={'20px'} spacing={0} cursor={'pointer'} onClick={() => {
              window.open('/blog/NEST-Protocol-A-New-Paradigm-of-Game-Theoretic-Oracle/', '_blank')
            }}>
              <chakra.img src={'/image/Home/01-card-02@2x.png'} alt={''}/>
              <Stack spacing={'20px'} p={'20px'} h={'230px'}>
                <Text fontSize={'18px'} fontWeight={'bold'}>NEST Protocol: A New Paradigm of Game Theoretic
                  Oracle</Text>
                <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Blockchain innovation defined the major
                  part of the last decade, with</Text>
                <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>Jun 9, 2022</Text>
              </Stack>
            </Stack>
            <Stack w={'308px'} bg={"white"} borderRadius={'20px'} spacing={0} cursor={"pointer"} onClick={() => {
              window.open('/blog/NEST\'s-RSS-FEED-INTEGRATED-WITH-CRYPTO.COM-PRICE-PAGE/', '_blank')
            }}>
              <chakra.img src={'/image/Home/01-card-03@2x.png'} alt={''}/>
              <Stack spacing={'20px'} p={'20px'} h={'230px'}>
                <Text fontSize={'18px'} fontWeight={'bold'}>NEST’s RSS FEED INTEGRATED WITH CRYPTO.COM PRICE
                  PAGE</Text>
                <Text fontSize={'13px'} fontWeight={'600'} color={'#878787'}>Through Crypto.com’s NEST Price Page,
                  you
                  can now directly access NEST’s</Text>
                <Text fontSize={'13px'} fontWeight={500} color={'#878787'}>May 6, 2022</Text>
              </Stack>
            </Stack>
          </HStack>
          <Box pt={'20px'}>
            <Button variant={'outline'} onClick={() => {
              window.open('/blogs/')
            }}>
              More
            </Button>
          </Box>
        </Stack>
        <Stack spacing={'48px'}>
          <Heading fontSize={'50px'} textAlign={"center"}>Integrations & Partners</Heading>
          <Stack bg={'rgba(255,255,255, 0.7)'} h={'440px'} align={"center"} spacing={'60px'} justify={"center"}>
            <HStack spacing={'80px'}>
              <Link href={'https://www.huobi.com/en-us/exchange/nest_usdt'} isExternal>
                <chakra.img src={"/svg/huobi.svg"} h={'45px'} alt={'huobi'}/>
              </Link>
              <Link href={'https://www.binance.com/'} isExternal>
                <chakra.img src={"/svg/binance.svg"} h={'45px'} alt={'binance'}/>
              </Link>
              <Link href={'https://www.coinbase.com/price/nest-protocol'} isExternal>
                <chakra.img src={"/svg/Coinbase.svg"} h={'45px'} alt={'Coinbase'}/>
              </Link>
              <Link href={'https://polygon.technology/'} isExternal>
                <chakra.img src={"/svg/polygon.svg"} h={'45px'} alt={'polygon'}/>
              </Link>
            </HStack>
            <HStack spacing={'80px'}>
              <Link href={'https://kcc.io/'} isExternal>
                <chakra.img src={"/svg/kcc.svg"} h={'45px'} alt={'kcc'}/>
              </Link>
              <Link href={'https://cointelegraph.com/'} isExternal>
                <chakra.img src={"/svg/cointelegraph.svg"} h={'45px'} alt={'cointelegraph'}/>
              </Link>
              <Link href={'https://cube.network/'} isExternal>
                <chakra.img src={"/svg/cube.svg"} h={'45px'} alt={'cube'}/>
              </Link>
              <Link href={'https://peckshield.com/'} isExternal>
                <chakra.img src={"/svg/peckshield.svg"} h={'45px'} alt={'peckshield'}/>
              </Link>
              <Link href={'https://for.tube/'} isExternal>
                <chakra.img src={"/svg/fortube.svg"} h={'45px'} alt={'fortube'}/>
              </Link>
            </HStack>
            <HStack spacing={'80px'}>
              <Link href={'https://polygon.technology/'} isExternal>
                <chakra.img src={"/svg/polynetwork.svg"} h={'45px'} alt={'polynetwork'}/>
              </Link>
              <Link href={'https://cofix.tech/'} isExternal>
                <chakra.img src={"/svg/CoFiX.svg"} h={'45px'} alt={'CoFiX'}/>
              </Link>
              <Link href={'https://www.parasset.top/'} isExternal>
                <chakra.img src={"/svg/Parasset.svg"} h={'45px'} alt={'Parasset'}/>
              </Link>
              <Link href={'https://www.certik.com/'} isExternal>
                <chakra.img src={"/svg/certik.svg"} h={'45px'} alt={'certik'}/>
              </Link>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack h={'100%'} bgImage={'/image/Home/01-Phone-bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      { SEO }
      <NavigationMobile/>
      <Stack textAlign={"center"} pt={'150px'} pb={'150px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>NEST PROTOCOL<br/>
          =<br/> Decentralized Martingale Network</Text>
        <Text fontSize={'12.5px'} fontWeight={'600'}>A decentralized trading infrastructure that<br/> eliminates market makers and LPs.</Text>
      </Stack>
      <Stack px={'24px'} pb={'62px'}>
        <Stack align={"center"} textAlign={"center"} bg={'rgba(255,255,255, 0.7)'} py={'58px'} h={'560px'}
               overflow={"scroll"}
               borderRadius={'20px'}>
          <Text fontSize={'25px'} fontWeight={'bold'}>What is NEST Protocol?</Text>
          <chakra.img src={'/image/Home/01-icon-01@2x.png'} alt={''} w={'150px'} py={'50px'}/>
          <Stack align={"center"} pb={'100px'}>
            <Text w={'70%'} fontSize={'16.5px'} fontWeight={'bold'}>The NEST Protocol is a decentralized trading infrastructure known as the martingale network.<br/>
              <br/>
              NEST uses smart contracts to eliminate market markers and LPs while providing traders with nearly infinite liquidity through risk sharing.</Text>
          </Stack>
          <Stack align={"center"} pb={'100px'}>
            <chakra.img src={'/image/Home/01-icon-04@2x.png'} alt={''} w={'55px'} pb={'50px'}/>
            <Text w={'70%'} fontSize={'16.5px'} fontWeight={'bold'}>{`NEST's mechanism`}</Text>
            <Text w={'70%'} fontSize={'12.5px'} fontWeight={'600'}>
              All users trade with NEST smart contracts, burning specific amounts of $NEST to obtain the corresponding financial assets, such as futures, options, synthetic assets, and so on. The smart contract then settles and repurchases the financial assets by issuing more $NEST.
            </Text>
          </Stack>
          <Stack align={"center"} pb={'100px'}>
            <chakra.img src={'/image/Home/01-icon-05@2x.png'} alt={''} w={'80px'} pb={'50px'}/>
            <Text w={'70%'} fontSize={'16.5px'} fontWeight={'bold'}>NEST’s Profit Model</Text>
            <Text w={'70%'} fontSize={'12.5px'} fontWeight={'600'}>
              We believe that in the long run, people cannot outperform the market, so the NEST burned will exceed the NEST generated, allowing our economic model to deflate and the $NEST price to rise.
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack textAlign={"center"} align={"center"} bg={'rgba(255,255,255,0.7)'} py={'55px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>How does<br/>NEST Protocol work?</Text>
        <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
               onClick={() => setSelectedWork(0)} pt={'50px'}
               cursor={'pointer'}>
          {/*<Text>Program stochastic asset</Text>*/}
          <Text color={'#00A0E9'}>NEST Assets</Text>
          <ChevronDownIcon color={'#00A0E9'}/>
        </Stack>
        <HStack align={"end"} spacing={'-60px'} pb={'40px'}>
          <Stack w={'150px'} align={"end"} zIndex={'10'}>
            <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                   onClick={() => setSelectedWork(1)} cursor={'pointer'}>
              {/*<Text textAlign={'center'}>Provide random<br/>information flow</Text>*/}
              <Text color={'#00A0E9'}>NEST Oracle</Text>
              <ChevronDownIcon color={'#00A0E9'}/>
            </Stack>
          </Stack>
          <chakra.img pb={'80px'} src={'/image/Home/01-icon-02@2x.png'} w={'160px'} alt={''}/>
          <Stack align={"start"} w={'150px'}>
            <Stack align={"center"} spacing={0} fontSize={'15px'} fontWeight={600}
                   onClick={() => setSelectedWork(2)} cursor={'pointer'}>
              {/*<Text textAlign={'center'}>Generate<br/>stochastic assets</Text>*/}
              <Text color={'#00A0E9'}>NESTCraft</Text>
              <ChevronDownIcon color={'#00A0E9'}/>
            </Stack>
          </Stack>
        </HStack>
        <Text fontSize={'16.5px'} fontWeight={'bold'}>{work[selectedWork].type}</Text>
        <Text w={'80%'} fontSize={'12.5px'} fontWeight={'600'}>{work[selectedWork].title}</Text>
        <Text w={'70%'} fontSize={'12.5px'} fontWeight={'600'} color={'#7D7D7D'}>
          {/*{work[selectedWork].desc} */}
          <Link href={work[selectedWork].link} isExternal color={'#00A0E9'}>Learn more <ChevronRightIcon/></Link></Text>
      </Stack>
      <Stack textAlign={"center"} align={"center"} py={'62px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>Development<br/>path</Text>
        <Text fontSize={'12.5px'} fontWeight={'bold'}>The NEST community always insists<br/>on decentralization and
          innovation</Text>
        <HStack w={'full'} justify={"center"} py={'50px'} spacing={'-16px'}>
          <chakra.div w={'1px'} h={'880px'} bg={'#C9C9C9'}/>
          <Stack spacing={'32px'}>
            {developmentPath.map((item) => (
                <HStack key={item.title} textAlign={"start"} align={item.desc !== '' ? "start" : 'center'}
                        spacing={'16px'}>
                  <chakra.img src={'/image/Home/01-icon-03.png'} h={'20px'} w={'30px'} alt={''}/>
                  <Text fontSize={'12.5px'} fontWeight={'bold'}
                        w={item.desc !== '' ? '80px' : ''}> {item.title}</Text>
                  <Text fontSize={'10.5px'} fontWeight={'600'} w={item.desc !== '' ? '160px' : ''}>{item.desc}</Text>
                </HStack>
              )
            )}
          </Stack>
        </HStack>
      </Stack>
      <Stack textAlign={"center"} align={"center"} pt={'66px'} bg={'rgba(255,255,255,0.7)'} py={'65px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>More</Text>
        <Text fontSize={'16.5px'} fontWeight={'bold'}>Over 1 MILLION community<br/>members, Join us</Text>
        <Stack pt={'30px'} align={"center"}>
          <AiOutlineTwitter fontSize={'24px'} color={'#003232'}/>
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'12.5px'} isExternal onClick={() => {
            gtag('event', 'clickTwitter', {
              'from': 'desktop header'
            })
          }}
                href={'https://twitter.com/NEST_Protocol'}>@NEST_Protocol <ChevronRightIcon/></Link>
        </Stack>
        <Stack pt={'30px'} align={"center"}>
          <FaTelegramPlane fontSize={'24px'} color={'#003232'}/>
          <Link href={'https://t.me/NEST_Community'} isExternal onClick={() => {
            gtag('event', 'clickTelegram', {
              'from': 'desktop header',
              'value': '@NEST_Community'
            })
          }}>
            <HStack align={"center"}>
              <chakra.img src={'/image/Home/icon_8.svg'} w={'14px'} h={'14px'}/>
              <Text fontSize={'12.5px'} fontWeight={'600'} color={'#00A0E9'}>@NEST_Community</Text>
              <ChevronRightIcon color={'#00A0E9'}/>
            </HStack>
          </Link>
          <Link href={'https://t.me/nest_chat'} isExternal onClick={() => {
            gtag('event', 'clickTelegram', {
              'from': 'desktop header',
              'value': '@nest_chat'
            })
          }}>
            <HStack align={"center"}>
              <chakra.img src={'/image/Home/icon_7.svg'} w={'14px'} h={'14px'}/>
              <Text fontSize={'12.5px'} fontWeight={'600'} color={'#00A0E9'}>@nest_chat</Text>
              <ChevronRightIcon color={'#00A0E9'}/>
            </HStack>
          </Link>
        </Stack>
        <Stack pt={'30px'} align={"center"}>
          <AiOutlineGithub fontSize={'24px'} color={'#003232'}/>
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'12.5px'} href={'https://github.com/nest-protocol'} onClick={() => {
            gtag('event', 'clickGithub', {
              'from': 'desktop header'
            })
          }}>For
            developers <ChevronRightIcon color={'#00A0E9'}/></Link>
        </Stack>
        <Stack pt={'30px'} align={"center"}>
          <FaTiktok fontSize={'20px'} color={'#003232'}/>
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'12.5px'} href={'https://www.tiktok.com/@nest_protocol'} onClick={() => {
            gtag('event', 'clickGithub', {
              'from': 'desktop header'
            })
          }}>NEST Tiktok<ChevronRightIcon color={'#00A0E9'}/></Link>
        </Stack>
        <HStack pt={'60px'} pb={'30px'}>
          <Stack w={'100px'} align={"center"}>
            <Link href={'https://www.coinbase.com/price/nest-protocol'} isExternal>
              <chakra.img src={'/image/Home/01-icon-coinbase.png'} h={'17px'} alt={''}/>
            </Link>
          </Stack>
          <Stack w={'100px'} align={"center"}>
            <Link href={'https://www.huobi.com/'} isExternal>
              <chakra.img src={'/image/Home/01-icon-huobiresearch.png'} h={'17px'} alt={''}/>
            </Link>
          </Stack>
          <Stack w={'100px'} align={"center"}>
            <Link href={'https://www.mexc.com/exchange/NEST_USDT'} isExternal>
              <chakra.img src={'/image/Home/01-icon-mexc.png'} h={'22.5px'} alt={''}/>
            </Link>
          </Stack>
        </HStack>
        <HStack pb={'50px'}>
          <Stack w={'100px'} align={"center"}>
            <Link href={'https://www.lbank.info/exchange/nest/usdt'} isExternal>
              <chakra.img src={'/image/Home/01-icon-LBANK.svg'} h={'22.5px'} alt={''}/>
            </Link>
          </Stack>
          <Stack w={'100px'} align={"center"}>
            <Link href={'https://www.bibox.com/en/exchange/basic/NEST_USDT'} isExternal>
              <chakra.img src={'/image/Home/01-icon-Bibox.svg'} h={'22.5px'} alt={''}/>
            </Link>
          </Stack>
          <Stack w={'100px'} align={"center"}>
            <Link href={'https://www.gate.io/trade/NEST_USDT'} isExternal>
              <chakra.img src={'/image/Home/01-icon-Gate.svg'} w={'100px'} h={'22.5px'} alt={''}/>
            </Link>
          </Stack>
        </HStack>
        <Text fontSize={'12.5px'} fontWeight={'bold'}>Listed on more than 15 exchanges</Text>
      </Stack>
      <Stack align={"center"} py={'62px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>Blog</Text>
        <Stack px={'24px'} w={'full'} py={'38px'}>
          <Stack bg={"white"} spacing={0} borderRadius={'20px'}>
            <chakra.img src={'/image/Home/01-card-01@2x.png'} alt={''}/>
            <Stack px={'35px'} py={'25px'} cursor={"pointer"} onClick={() => {
              window.open('/blog/Coinbase-Announces-Planned-Listing-of-Tokens-Adds-NEST', '_blank')
            }}>
              <Text fontSize={'12.5px'} fontWeight={'bold'}>Coinbase Announces Planned Listing<br/>of Tokens, Adds
                $NEST to ‘<br/>Experimental Asset’
                Label</Text>
              <Text fontSize={'10.5px'} fontWeight={'600'} color={'#878787'}>Leading United States-based <br/>cryptocurrency
              </Text>
              <Text fontSize={'10.5px'} fontWeight={'500'} color={'#878787'}>July 25, 2022</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Button variant={'outline'} onClick={() => {
            window.open('/blogs/')
          }}>More</Button>
        </Stack>
      </Stack>
      <Stack align={"center"} spacing={'38px'}>
        <Text fontSize={'25px'} fontWeight={'bold'} textAlign={"center"}>Integrations &<br/>Partners</Text>
        <Stack bg={'rgba(255,255,255, 0.7)'} w={'full'} align={"center"} spacing={'35px'} py={'100px'}>
          <HStack spacing={'40px'}>
            <Link href={'https://www.huobi.com/en-us/exchange/nest_usdt'} isExternal>
              <chakra.img src={"/svg/huobi.svg"} h={'25px'} alt={'huobi'}/>
            </Link>
            <Link href={'https://www.binance.com/'} isExternal>
              <chakra.img src={"/svg/binance.svg"} h={'25px'} alt={'binance'}/>
            </Link>
            <Link href={'https://www.coinbase.com/price/nest-protocol'} isExternal>
              <chakra.img src={"/svg/Coinbase.svg"} h={'25px'} alt={'Coinbase'}/>
            </Link>
          </HStack>
          <HStack spacing={'40px'}>
            <Link href={'https://polygon.technology/'} isExternal>
              <chakra.img src={"/svg/polygon.svg"} h={'25px'} alt={'polygon'}/>
            </Link>
            <Link href={'https://kcc.io/'} isExternal>
              <chakra.img src={"/svg/kcc.svg"} h={'25px'} alt={'kcc'}/>
            </Link>
            <Link href={'https://cointelegraph.com/'} isExternal>
              <chakra.img src={"/svg/cointelegraph.svg"} h={'25px'} alt={'cointelegraph'}/>
            </Link>
          </HStack>
          <HStack spacing={'40px'}>
            <Link href={'https://cube.network/'} isExternal>
              <chakra.img src={"/svg/cube.svg"} h={'25px'} alt={'cube'}/>
            </Link>
            <Link href={'https://peckshield.com/'} isExternal>
              <chakra.img src={"/svg/peckshield.svg"} h={'25px'} alt={'peckshield'}/>
            </Link>
            <Link href={'https://for.tube/'} isExternal>
              <chakra.img src={"/svg/fortube.svg"} h={'25px'} alt={'fortube'}/>
            </Link>
          </HStack>
          <HStack spacing={'40px'}>
            <Link href={'https://polygon.technology/'} isExternal>
              <chakra.img src={"/svg/polynetwork.svg"} h={'25px'} alt={'polynetwork'}/>
            </Link>
            <Link href={'https://cofix.tech/'} isExternal>
              <chakra.img src={"/svg/CoFiX.svg"} h={'25px'} alt={'CoFiX'}/>
            </Link>
            <Link href={'https://www.parasset.top/'} isExternal>
              <chakra.img src={"/svg/Parasset.svg"} h={'25px'} alt={'Parasset'}/>
            </Link>
          </HStack>
          <HStack>
            <Link href={'https://www.certik.com/'} isExternal>
              <chakra.img src={"/svg/certik.svg"} h={'25px'} alt={'certik'}/>
            </Link>
          </HStack>
        </Stack>
      </Stack>
      <Stack h={'62px'}/>
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
