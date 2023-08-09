import {
  Stack,
  Text,
  Heading,
  HStack,
  Button,
  chakra,
  Box,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {useEffect, useMemo, useState} from "react";
import {install} from 'ga-gtag'
import Head from "next/head";
import NavigationMobile from "../components/NavigationMobile";
import FooterMobile from "../components/FooterMobile";
import Plyr from "plyr-react"

export default function Home() {
  const [start, setStart] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  const [isMax] = useMediaQuery("(min-width: 1600px)");

  const page = useMemo(() => {
    return isMax ? 5 : 3
  }, [isMax])

  const developmentPath = [
    {title: `2018.12 v1.0`, desc: `Start! A lending protocol goes live.`},
    {title: '2019.12 v2.0', desc: `NEST Oracle V1.0 goes live.`},
    {
      title: '2020.07 v3.0',
      desc: `NEST Oracle upgraded.\nOpen all oracle tracks and supported all ERC20 Token/ETH price`
    },
    {title: '2021.04 v3.6', desc: `Voting governance\nmodule was added`},
    {title: '2021.11 v4.1', desc: `NEST Oracle upgraded.\nAllows anyone to build their oracle for their project.`},
    {title: '2021.12 v4.3', desc: `NEST Oracle upgraded.\nAllows each channel for multiple quotation pairs.`},
    {title: '2022.07 v5.0', desc: `Merge FORT protocol\nNEST protocol= NEST Oracle + NESTFi +PVM`},
    {title: '2023.02.10', desc: `NEST protocol upgraded.\nNEST launched the decentralized martingale network`}
  ]

  const products = [
    {
      image: `/image/Home/function1.png`,
      title: `NEST Token`,
      desc: `$NEST token is the native token of the whole NEST Protocol ecosystem and has been listed on more than 15 exchanges.`,
      button: `Get $NEST`,
      link: `/wheretobuy`,
    },
    {
      image: `/image/Home/function2.png`,
      title: `NESTFi`,
      desc: `NEST Fi is a decentralized perpetual exchange. Trading with smart contract. No market makers. No LPs.`,
      button: `Start Trading`,
      link: `https://nestfi.org/`,
    },
    {
      image: `/image/Home/function4.png`,
      title: `NEST Oracle`,
      desc: `NEST Oracle builds a decentralized non-cooperative game network to determine the final price through arbitrage and two-way options. It introduces the random information of decentralized price flow into the chain.`,
      button: `More Details`,
      link: `/oracle`,
    },
    {
      image: `/image/Home/function5.png`,
      title: `NEST Craft`,
      desc: `Like Ethereum virtual machine, NEST Craft uses martingale functions. It will turn NEST Protocol into a chain infrastructure that allows anyone to create more NEST-based apps.`,
      button: `Start Building`,
      link: `/craft`,
    },
    {
      image: `/image/Home/function3.png`,
      title: `Cyber Ink`,
      desc: `Cyber Ink is a collection of 10,000 NFTs on the blockchain. Each NFT can unlock the NEST Fi membership and benefit.`,
      button: `More on NTFs`,
      link: `https://nft.nestprotocol.org/`,
    },
  ]
  const superiority = [
    {
      title: 'Advanced Trading Structures',
      desc: `The system eliminates market markers and LPs via smart contracts and risk sharing to provide traders with practically infinite liquidity.`,
      icon: `/image/Home/home-3.svg`,
      mobileIcon: '/image/Home/home-3.svg'
    },
    {
      title: 'More Stable Price Oracle',
      desc: `NEST Oracle offers a stable decentralized price stream. Price attacks require 51% of network assets. Open for price offers and verifiers.`,
      icon: `/image/Home/home-1.svg`,
      mobileIcon: '/image/Home/home-1.svg'
    },
    {
      title: 'Deflationary Economic Model',
      desc: `Users burn $NEST to buy financial assets, including futures, options etc. The $NEST price rises because the $NEST burned exceeds the $NEST generated.`,
      icon: `/image/Home/home-2.svg`,
      mobileIcon: '/image/Home/home-2.svg'
    },
  ]

  const blogs = [
    {
      image: '/image/Home/blog1.png',
      title: 'Coinbase Announces planned Listing of Tokens, Adds $NEST to Experimental Asset\' Label',
      desc: 'Leading United States-based cryptocurrency',
      date: 'July 25,2022',
      link: '/blogs/Coinbase-Announces-Planned-Listing-of-Tokens-Adds-NEST',
    },
    {
      image: '/image/Home/blog2.png',
      title: 'NEST Protocol: A New Paradigm of Game Theoretic Oracle',
      desc: 'Blockchain innovation defined the major part of the last decade, with',
      date: 'June 9,2022',
      link: '/blogs/NEST-Protocol-A-New-Paradigm-of-Game-Theoretic-Oracle',
    },
    {
      image: '/image/Home/blog3.png',
      title: 'NEST\'S RSS FEEDINTEGRATED WITH CRYPTO.COM PRICE PAGE',
      desc: 'Through Crypto.com\'s NEST Price Page, you can now directly access NEST\'S',
      date: 'May 6,2022',
      link: '/blogs/NEST-RSS-FEED-INTEGRATED-WITH-CRYPTO.COM-PRICE-PAGE',
    }
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
      {SEO}
      <Navigation/>
      <Stack align={"center"} w={'full'} px={'40px'}>
        <Stack maxW={'1600px'} w={'full'} bg={'rgba(255, 255, 255, 0.8)'} h={'80px'} justify={"center"} px={'40px'}
               borderRadius={'12px'}>
          <HStack w={"full"} justifyContent={'space-between'}>
            <Text>
              The ERC20 NEST 1.0 token will be deprecated. For more details, please refer to the official announcement:{' '}
              <Link href={'nest-replacement'} color={'#EAAA00'}>nestprotocol.org/nest-replacement</Link>
            </Text>
            <Link as={Link} href={'nest-replacement'}>
              <Button>
                NEST Replacement
              </Button>
            </Link>
          </HStack>
        </Stack>
      </Stack>
      <Stack w={'100%'} h={'100%'} spacing={0} pb={'120px'} align={"center"}>
        <Stack pt={'260px'} pb={'200px'} w={'full'} maxW={'1600px'}>
          <Stack spacing={'16px'}>
            <Heading fontSize={'48px'} lineHeight={'60px'} textAlign={"center"}>NEST PROTOCOL<br/>A Decentralized
              Martingale Network</Heading>
            <Text textAlign={"center"} fontWeight={'400'} fontSize={'16px'} lineHeight={'22px'}
                  color={'rgba(3, 3, 8, 0.6)'}>Trading with smart contract. No market
              makers. No LPs.</Text>
            <HStack pt={'8px'} justify={"center"}>
              <Link href={'https://nestfi.org/'} isExternal>
                <Button minH={'48px'}>
                  Explore NEST
                </Button>
              </Link>
            </HStack>
          </Stack>
        </Stack>
        <Stack px={'40px'} align={"center"}>
          <Stack pb={'120px'} spacing={'40px'} maxW={'1600px'} w={'full'}>
            <Text fontSize={'32px'} lineHeight={'44px'} fontWeight={'700'} textAlign={"center"}>The superiority of NEST
              Protocol</Text>
            <Stack direction={'row'} justifyContent={['start', 'start', 'start', 'center', 'center', 'center']}
                   spacing={'24px'} w={'full'} overflow={'scroll'}>
              {
                superiority.map((item, index) => (
                  <Stack w={'full'} bg={'white'} borderRadius={'12px'} key={index}>
                    <chakra.img src={item.icon} height={'160px'} alt={''}/>
                    <Stack px={'24px'} pb={'40px'} spacing={'12px'}>
                      <Text textAlign={"center"} fontWeight={'700'} fontSize={'20px'}
                            lineHeight={'28px'}>{item.title}</Text>
                      <Text fontWeight={'400'} fontSize={'16px'} lineHeight={'22px'}
                            color={'rgba(3, 3, 8, 0.6)'}>{item.desc}</Text>
                    </Stack>
                  </Stack>
                ))
              }
            </Stack>
          </Stack>
        </Stack>
        <Stack pt={'40px'} spacing={0} bg={'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)'}
               align={"center"} borderTopRadius={'40px'}>
          <Stack direction={'row'} spacing={['20px', '20px', '20px', '80px']} maxW={'1600px'}>
            <Stack w={'100%'} justify={"center"} px={['20px', '20px', '20px', '40px']}>
              <Text fontSize={'32px'} lineHeight={'44px'} fontWeight={'700'}>Get Started</Text>
              <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'400'} color={'rgba(3, 3, 8, 0.6)'}>NEST
                Protocol&apos;s martingale trading paradigm combines blockchain characteristics to supply traders with
                unlimited liquidity through risk sharing. The actual implementation is listed below.</Text>
            </Stack>
            <Stack align={'center'} pr={'40px'} w={'100%'}>
              <Stack w={['400px', '400px', '400px', '100%']} h={'full'} borderRadius={'12px'} overflow={'hidden'}>
                <Plyr source={{
                  type: 'video',
                  title: 'The First Decentralized Martingale Trading Protocol',
                  sources: [
                    {
                      src: 'https://video.nestprotocol.org/What_is_NEST_Protocol__NEST_Protocol_Explained_Next_Stage_of_The_Trading_Evolution.mp4',
                      type: 'video/mp4',
                      size: 720,
                    },
                  ],
                  poster: '/image/Home/What_is_NEST_Protocol__NEST_Protocol_Explained_Next_Stage_of_The_Trading_Evolution.png',
                }} options={{
                  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
                }}>
                </Plyr>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack pt={'120px'} px={'40px'} spacing={0} align={"center"}>
          <Stack spacing={'80px'} maxW={'1600px'}>
            {
              products.map((item, index) => (
                <Stack direction={'row'} p={'40px'} bg={'white'} justify={'space-between'} align={"center"}
                       spacing={'80px'}
                       borderRadius={'12px'} key={index}>
                  {
                    index % 2 === 0 ? (
                      <>
                        <Stack w={'50%'}>
                          <chakra.img src={item.image} w={'full'}/>
                        </Stack>
                        <Stack spacing={'16px'} w={'50%'} justify={"center"}>
                          <Text fontSize={'32px'} lineHeight={'44px'} fontWeight={'700'}>{item.title}</Text>
                          <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'400'}
                                color={'rgba(3, 3, 8, 0.6)'}>{item.desc}</Text>
                          <HStack pt={'8px'}>
                            <Link href={item.link} isExternal>
                              <Button minH={'48px'}
                                      fontSize={'16px'} fontWeight={'700'} lineHeight={'22px'}
                              >{item.button}</Button>
                            </Link>
                          </HStack>
                        </Stack>
                      </>
                    ) : (
                      <>
                        <Stack spacing={'16px'} w={'50%'} justify={"center"}>
                          <Text fontSize={'32px'} lineHeight={'44px'} fontWeight={'700'}>{item.title}</Text>
                          <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'400'}
                                color={'rgba(3, 3, 8, 0.6)'}>{item.desc}</Text>
                          <HStack pt={'8px'}>
                            <Link href={item.link} isExternal>
                              <Button minH={'48px'}
                                      fontSize={'16px'} fontWeight={'700'} lineHeight={'22px'}
                              >{item.button}</Button>
                            </Link>
                          </HStack>
                        </Stack>
                        <Stack w={'50%'}>
                          <chakra.img src={item.image} w={'full'}/>
                        </Stack>
                      </>
                    )
                  }
                </Stack>
              ))
            }
          </Stack>
        </Stack>
        <Stack align={"center"} w={'full'} px={'40px'}>
          <Stack py={'120px'} spacing={0} w={'full'} maxW={'1600px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>Development path</Heading>
            <Text pt={'12px'} fontSize={'16px'} lineHeight={'22px'} fontWeight={'400'} textAlign={"center"}
                  color={'rgba(3, 3, 8, 0.6)'}>The NEST community always insists on
              decentralization and innovation</Text>
            <HStack pt={'80px'} align={"center"} position={'relative'} spacing={0} w={'full'}>
              <Button isDisabled={start === 0} px={'0'} position={'absolute'} left={0} zIndex={10}
                      borderRadius={'full'} onClick={() => {
                if (start > 0) {
                  setStart(start - page + 1)
                }
              }}>
                <chakra.img src={'/svg/right_icon.svg'} transform={'rotate(180deg)'}/>
              </Button>
              <Stack w={'full'} align={"center"} position={'relative'} spacing={0}>
                <Box h={'1px'} w={'full'} bg={'rgba(28, 28, 35, 0.08)'} position={'absolute'} top={'12px'}/>
                <HStack px={'45px'} justify={"space-around"} w={'full'} align={"start"}>
                  {developmentPath.slice(start, start + page).map((item, index) => (
                    <Stack key={index} align={"center"} w={'200px'} h={'180px'}>
                      <chakra.img src={'/image/Home/01-icon-03.png'} h={'24px'} w={'36px'} alt={''} mb={'22px'}/>
                      <Text fontSize={'17px'} fontWeight={'bold'}>{item.title}</Text>
                      <Text fontSize={'15px'} fontWeight={'600'} textAlign={"center"}>{item.desc}</Text>
                    </Stack>
                  ))}
                </HStack>
              </Stack>
              <Button px={'0'} isDisabled={start >= developmentPath.length - 4} position={'absolute'} right={0}
                      zIndex={10}
                      borderRadius={'full'} onClick={() => {
                if (start < developmentPath.length - page + 1) {
                  setStart(start + page - 1)
                }
              }}>
                <chakra.img src={'/svg/right_icon.svg'} w={'44px'} h={'44px'}/>
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Stack spacing={0} bg={'rgba(255, 255, 255, 0.8)'} align={"center"} w={'full'} px={'40px'}>
          <Stack py={'40px'} direction={"row"} justify={'space-between'} maxW={'1600px'} w={'full'} align={"center"}>
            <Text fontSize={'28px'} lineHeight={'40px'} fontWeight={'700'}>Over <span
              style={{color: 'rgba(234, 170, 0, 1)'}}>1 MILLION</span> community members join us</Text>
            <Stack direction={'row'} spacing={'40px'}>
              <Link href={'https://twitter.com/nest_protocol/'} isExternal minW={'40px'} opacity={0.6}
                    _hover={{opacity: 1}}>
                <chakra.img src={'/image/Footer/twitter.svg'} w={'40px'}/>
              </Link>
              <Link href={'https://t.me/nest_chat/'} isExternal minW={'40px'} opacity={0.6} _hover={{opacity: 1}}>
                <chakra.img src={'/image/Footer/telegram.svg'}/>
              </Link>
              <Link href={'https://github.com/NEST-Protocol'} isExternal minW={'40px'} opacity={0.6}
                    _hover={{opacity: 1}}>
                <chakra.img src={'/image/Footer/github.svg'}/>
              </Link>
              <Link href={'https://www.tiktok.com/@nest_protocol'} isExternal minW={'40px'} opacity={0.6}
                    _hover={{opacity: 1}}>
                <chakra.img src={'/image/Footer/Tiktok.svg'}/>
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Stack align={"center"} w={'full'} px={'28px'}>
          <Stack py={'120px'} align={"center"} spacing={'48px'} maxW={'1600px'} w={'full'}>
            <Heading fontSize={'50px'} textAlign={"center"}>Blogs</Heading>
            <HStack spacing={'24px'} overflow={'scroll'} w={'full'} position={'relative'} p={'12px'}
                    justifyContent={['start', 'start', 'start', 'start', 'center', 'center']}>
              {
                blogs.map((item, index) => (
                  <Stack
                    w={'full'} cursor={"pointer"} key={index}
                    _hover={{
                      transform: 'scale(1.02)',
                      boxShadow: '0px 2px 12px rgba(16, 18, 19, 0.15)',
                      '& .title': {color: 'rgba(234, 170, 0, 1)'},
                    }}
                    bg={"white"} spacing={0} borderRadius={'12px'} overflow={'hidden'}
                    onClick={() => {
                      window.open('/blogs/Coinbase-Announces-Planned-Listing-of-Tokens-Adds-NEST', '_blank')
                    }}
                  >
                    <chakra.img src={item.image} w={'full'} alt={''}/>
                    <Stack spacing={'12px'} p={'20px'} h={'210px'}>
                      <Text fontSize={'18px'} fontWeight={'bold'} className={'title'}>{item.title}</Text>
                      <Text fontSize={'13px'} fontWeight={'400'} color={'#878787'}>{item.desc}</Text>
                      <Text fontSize={'13px'} fontWeight={'400'} color={'#878787'}>{item.date}</Text>
                    </Stack>
                  </Stack>
                ))
              }
            </HStack>
            <Box pt={'20px'}>
              <Link href={'/blogs/'} isExternal>
                <Button variant={'outline'} minH={'48px'}>
                  More
                </Button>
              </Link>
            </Box>
          </Stack>
        </Stack>
        <Stack w={'full'} align={"center"} px={'40px'}>
          <Stack spacing={'80px'} w={'full'} maxW={'1600px'}>
            <Heading fontSize={'50px'} textAlign={"center"}>Integrations & Partners</Heading>
            <Stack align={"center"} spacing={'40px'} justify={"center"}>
              {
                [
                  [
                    {
                      link: 'https://www.huobi.com/en-us/exchange/nest_usdt',
                      image: '/svg/huobi.svg',
                    },
                    {
                      link: 'https://www.binance.com/',
                      image: '/svg/binance.svg',
                    },
                    {
                      link: 'https://www.coinbase.com/price/nest-protocol',
                      image: '/svg/Coinbase.svg',
                    },
                    {
                      link: 'https://polygon.technology/',
                      image: '/svg/polygon.svg',
                    }
                  ],
                  [
                    {
                      link: 'https://kcc.io/',
                      image: '/svg/kcc.svg',
                    },
                    {
                      link: 'https://cointelegraph.com/',
                      image: '/svg/cointelegraph.svg',
                    },
                    {
                      link: 'https://cube.network/',
                      image: '/svg/cube.svg',
                    },
                    {
                      link: 'https://peckshield.com/',
                      image: '/svg/peckshield.svg',
                    },
                    {
                      link: 'https://for.tube/',
                      image: '/svg/fortube.svg',
                    }
                  ],
                  [
                    {
                      link: 'https://polygon.technology/',
                      image: '/svg/polynetwork.svg',
                    },
                    {
                      link: 'https://cofix.tech/',
                      image: '/svg/CoFiX.svg',
                    },
                    {
                      link: 'https://www.parasset.top/',
                      image: '/svg/Parasset.svg',
                    },
                    {
                      link: 'https://www.certik.com/',
                      image: '/svg/certik.svg',
                    },
                    {
                      link: 'https://www.dragonfly.xyz/',
                      image: '/svg/dragonfly.svg'
                    },
                  ],
                ].map((item, index) => (
                  <HStack spacing={'40px'} key={index}>
                    {
                      item.map((item, index) => (
                        <Stack h={'72px'} borderRadius={'full'} py={'12px'} px={'20px'} bg={'white'}
                               _hover={{bg: 'rgba(234, 170, 0, 1)'}}
                               justifyContent={"center"} key={index} alignItems={"center"}>
                          <Link href={item.link} isExternal>
                            <chakra.img src={item.image} h={'45px'} alt={item.link}/>
                          </Link>
                        </Stack>
                      ))
                    }
                  </HStack>
                ))
              }
              <Text fontSize={'20px'} fontWeight={'700'} lineHeight={'28px'}>Listed on more than 15 exchanges</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack h={'100%'} spacing={0} bgImage={'/image/Home/01-Phone-bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      {SEO}
      <NavigationMobile/>
      <Stack align={"center"} w={'full'} pt={'10px'}>
        <Stack maxW={'full'} w={'full'} bg={'rgba(255, 255, 255, 0.8)'} justify={"center"} p={'20px'}>
          <HStack w={"full"} justifyContent={'space-between'}>
            <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'}>
              The ERC20 NEST 1.0 token will be deprecated. For more details, please refer to the official announcement:{' '}
              <Link href={'nest-replacement'} color={'#EAAA00'}>nestprotocol.org/nest-replacement</Link>
            </Text>
            <Link href={'nest-replacement'} isExternal>
              <Button minH={'24px'} fontSize={'10px'} px={'12px'} lineHeight={'14px'} fontWeight={'700'}>
                NEST Replacement
              </Button>
            </Link>
          </HStack>
        </Stack>
      </Stack>
      <Stack textAlign={"center"} p={'72px 20px 20px 20px'} spacing={'16px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>NEST PROTOCOL<br/>A Decentralized Martingale Network</Text>
        <Text fontSize={'12.5px'} fontWeight={'400'}>Trading with smart contract. No market makers. No LPs.</Text>
      </Stack>
      <HStack align={"center"} justify={"center"} pt={'4px'}>
        <Link href={'https://nestfi.org/'} isExternal>
          <Button minH={'48px'}>
            Explore NEST
          </Button>
        </Link>
      </HStack>
      <Stack pt={'80px'} pb={'100px'} spacing={'40px'}>
        <Text fontSize={'24px'} px={'20px'} lineHeight={'32px'} fontWeight={'700'} textAlign={"center"}>The superiority
          of NEST
          Protocol</Text>
        <HStack spacing={'12px'} w={'full'} overflow={'scroll'} justify={'start'} px={'20px'}>
          {
            superiority.map((item, index) => (
              <Stack key={index} minW={'320px'} w={'320px'} bg={'white'} px={'20px'} pb={'40px'} borderRadius={'12px'}>
                <chakra.img src={item.mobileIcon} width={'full'}/>
                <Text textAlign={'center'} fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}>{item.title}</Text>
                <Text pt={'12px'} fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'} minH={'112px'}
                      color={'rgba(3, 3, 8, 0.6)'}>{item.desc}</Text>
              </Stack>
            ))
          }
        </HStack>
      </Stack>
      <Stack pt={'20px'} spacing={'12px'} bg={'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)'}
             borderRadius={'40px'}>
        <Text fontSize={'24px'} fontWeight={'700'} lineHeight={'32px'} textAlign={"center"}>Get Started</Text>
        <Text fontSize={'14px'} fontWeight={'400'} lineHeight={'20px'} px={'20px'} textAlign={'center'}
              color={'rgba(3, 3, 8, 0.6)'}>NEST Protocol&apos;s martingale trading paradigm combines blockchain
          characteristics to supply traders with unlimited liquidity through risk sharing. The actual implementation is
          listed below.</Text>
        <Stack w={'full'} px={'20px'}>
          <Stack borderRadius={'12px'} overflow={'hidden'}>
            <Plyr source={{
              type: 'video',
              title: 'The First Decentralized Martingale Trading Protocol',
              sources: [
                {
                  src: 'https://video.nestprotocol.org/What_is_NEST_Protocol__NEST_Protocol_Explained_Next_Stage_of_The_Trading_Evolution.mp4',
                  type: 'video/mp4',
                  size: 720,
                },
              ],
              poster: '/image/Home/What_is_NEST_Protocol__NEST_Protocol_Explained_Next_Stage_of_The_Trading_Evolution.png',
            }} options={{
              controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
            }}>
            </Plyr>
          </Stack>
        </Stack>
      </Stack>
      <Stack px={'20px'} pt={'60px'} spacing={'20px'}>
        {
          products.map((item, index) => (
            <Stack key={index} bg={'white'} p={'20px'} align={'center'} spacing={'16px'} borderRadius={'12px'}
                   overflow={'hidden'}>
              <chakra.img src={item.image} width={'full'}/>
              <Text fontSize={'24px'} fontWeight={'700'} lineHeight={'32px'}>{item.title}</Text>
              <Text textAlign={'center'} fontSize={'14px'} fontWeight={'400'} lineHeight={'20px'}
                    color={'rgba(3, 3, 8, 0.6)'}>{item.desc}</Text>
              <HStack align={"center"} justify={"center"}>
                <Link href={item.link} isExternal>
                  <Button borderRadius={'8px'}>
                    {item.button}
                  </Button>
                </Link>
              </HStack>
            </Stack>
          ))
        }
      </Stack>
      <Stack textAlign={"center"} align={"center"} pt={'80px'} pb={'40px'}>
        <Text fontSize={'24px'} lineHeight={'32px'} fontWeight={'bold'}>Development path</Text>
        <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={'400'}>The NEST community always insists<br/>on
          decentralization and
          innovation</Text>
        <HStack w={'full'} p={'40px'} justify={"start"} spacing={0}>
          <Stack spacing={'0'}>
            {developmentPath.map((item, index) => (
                <HStack key={index} position={'relative'} spacing={0}>
                  <Box w={'1px'} h={'100%'} bg={'rgba(28, 28, 35, 0.08)'} position={'absolute'} left={'15px'}
                       opacity={index === developmentPath.length - 1 ? 0 : 1}/>
                  <HStack textAlign={"start"} spacing={'16px'} align={'start'}>
                    <chakra.img src={'/image/Home/01-icon-03.png'} h={'20px'} w={'30px'} alt={''}/>
                    <Stack pb={'32px'}>
                      <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'bold'}>{item.title}</Text>
                      <Text fontSize={'12px'} lineHeight={'16px'} fontWeight={'400'} color={'rgba(3, 3, 8, 0.6)'}
                            whiteSpace={'pre-wrap'}
                      >{item.desc}</Text>
                    </Stack>
                  </HStack>
                </HStack>
              )
            )}
          </Stack>
        </HStack>
      </Stack>
      <Stack bg={'white'} p={'20px'} align={"center"} spacing={'40px'}>
        <Text fontSize={'20px'} fontWeight={'700'} textAlign={"center"} lineHeight={'28px'}>Over <span
          style={{color: 'rgba(234, 170, 0, 1)'}}>1 MILLION</span> community<br/> members join us</Text>
        <HStack spacing={'28px'}>
          <Link href={'https://twitter.com/nest_protocol/'} isExternal opacity={0.6} _hover={{opacity: 1}}>
            <chakra.img src={'/image/Footer/twitter.svg'}/>
          </Link>
          <Link href={'https://t.me/nest_chat/'} isExternal opacity={0.6} _hover={{opacity: 1}}>
            <chakra.img src={'/image/Footer/telegram.svg'}/>
          </Link>
          <Link href={'https://github.com/NEST-Protocol'} isExternal opacity={0.6} _hover={{opacity: 1}}>
            <chakra.img src={'/image/Footer/github.svg'}/>
          </Link>
          <Link href={'https://www.tiktok.com/@nest_protocol'} isExternal opacity={0.6} _hover={{opacity: 1}}>
            <chakra.img src={'/image/Footer/Tiktok.svg'}/>
          </Link>
        </HStack>
      </Stack>
      <Stack align={"center"} py={'62px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>Blog</Text>
        <HStack px={'24px'} py={'20px'} spacing={'12px'} width={'full'} overflow={'scroll'}>
          {
            blogs.map((item, index) => (
              <Stack bg={"white"} spacing={0} key={index} borderRadius={'20px'} minW={'320px'}>
                <chakra.img src={item.image} alt={''}/>
                <Stack px={'24px'} py={'24px'} onClick={() => {
                  window.open(item.link, '_blank')
                }}>
                  <Text fontSize={'12.5px'} fontWeight={'bold'}>{item.title}</Text>
                  <Text fontSize={'10.5px'} fontWeight={'400'} color={'#878787'}>{item.desc}
                  </Text>
                  <Text fontSize={'10.5px'} fontWeight={'400'} color={'#878787'}>{item.date}</Text>
                </Stack>
              </Stack>
            ))
          }
        </HStack>
        <Stack>
          <Link href={'/blogs/'}>
            <Button variant={'outline'}>More</Button>
          </Link>
        </Stack>
      </Stack>
      <Stack align={"center"} spacing={'40px'} pb={'80px'}>
        <Text fontSize={'25px'} fontWeight={'bold'} textAlign={"center"}>Integrations & Partners</Text>
        <Stack w={'full'} align={"center"} spacing={'20px'}>
          <HStack spacing={'12px'}>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://www.huobi.com/en-us/exchange/nest_usdt'} isExternal>
                <chakra.img src={"/svg/huobi.svg"} h={'25px'} alt={'huobi'}/>
              </Link>
            </Stack>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://www.binance.com/'} isExternal>
                <chakra.img src={"/svg/binance.svg"} h={'25px'} alt={'binance'}/>
              </Link>
            </Stack>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://www.coinbase.com/price/nest-protocol'} isExternal>
                <chakra.img src={"/svg/Coinbase.svg"} h={'25px'} alt={'Coinbase'}/>
              </Link>
            </Stack>
          </HStack>
          <HStack spacing={'12px'}>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://polygon.technology/'} isExternal>
                <chakra.img src={"/svg/polygon.svg"} h={'25px'} alt={'polygon'}/>
              </Link>
            </Stack>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://kcc.io/'} isExternal>
                <chakra.img src={"/svg/kcc.svg"} h={'25px'} alt={'kcc'}/>
              </Link>
            </Stack>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://cointelegraph.com/'} isExternal>
                <chakra.img src={"/svg/cointelegraph.svg"} h={'25px'} alt={'cointelegraph'}/>
              </Link>
            </Stack>
          </HStack>
          <HStack spacing={'12px'}>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://cube.network/'} isExternal>
                <chakra.img src={"/svg/cube.svg"} h={'25px'} alt={'cube'}/>
              </Link>
            </Stack>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://peckshield.com/'} isExternal>
                <chakra.img src={"/svg/peckshield.svg"} h={'25px'} alt={'peckshield'}/>
              </Link>
            </Stack>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://for.tube/'} isExternal>
                <chakra.img src={"/svg/fortube.svg"} h={'25px'} alt={'fortube'}/>
              </Link>
            </Stack>
          </HStack>
          <HStack spacing={'12px'}>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://polygon.technology/'} isExternal>
                <chakra.img src={"/svg/polynetwork.svg"} h={'25px'} alt={'polynetwork'}/>
              </Link>
            </Stack>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://cofix.tech/'} isExternal>
                <chakra.img src={"/svg/CoFiX.svg"} h={'25px'} alt={'CoFiX'}/>
              </Link>
            </Stack>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://www.parasset.top/'} isExternal>
                <chakra.img src={"/svg/Parasset.svg"} h={'25px'} alt={'Parasset'}/>
              </Link>
            </Stack>
          </HStack>
          <HStack>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://www.certik.com/'} isExternal>
                <chakra.img src={"/svg/certik.svg"} h={'25px'} alt={'certik'}/>
              </Link>
            </Stack>
            <Stack p={'8px 12px'} bg={'white'} borderRadius={'full'}>
              <Link href={'https://www.dragonfly.xyz/'} isExternal>
                <chakra.img src={"/svg/dragonfly.svg"} h={'25px'} alt={'dragonfly'}/>
              </Link>
            </Stack>
          </HStack>
          <Text pt={'20px'} fontSize={'14px'} lineHeight={'20px'} fontWeight={'700'}>Listed on more than 15
            exchanges</Text>
        </Stack>
      </Stack>
      <FooterMobile/>
    </Stack>
  )

  return (
    isMobile ? mobilePage : pcPage
  )
}
