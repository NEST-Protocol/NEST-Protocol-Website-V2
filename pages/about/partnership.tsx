import {Button, Heading, HStack, Spacer, Stack, Text, useMediaQuery, Wrap, WrapItem, chakra} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import {useState} from "react";
import Head from "next/head";
import useSWR from "swr";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [selectId, setSelectId] = useState(-1);

  const {data: category} = useSWR('https://cms.nestfi.net/cmsapi/partner-categories', (url) => fetch(url)
    .then(res=> res.json())
    .then(data => data.data)
  )
  const {data: partners} = useSWR('https://cms.nestfi.net/cmsapi/partners?populate[0]=category&populate[1]=logo&pagination[page]=1&pagination[pageSize]=100', (url) => fetch(url)
    .then(res=> res.json())
    .then(data => data.data)
  )

  const title = "NEST Integration & Partners | NEST Protocol";
  const description = "Expanding influence in the Crypto world";

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
    <Stack bgImage={'/image/partnership/bg.jpg'} bgPosition={"center"} bgSize={'cover'} minH={'100vh'}>
      {SEO}
      <Navigation/>
      <Stack w={'full'} align={"center"}>
        <Stack maxW={'1600px'} w={'full'}>
          <Stack textAlign={"center"} align={"center"} py={'160px'}>
            <Heading fontSize={'50px'}>Integration & Partners</Heading>
            <Text fontWeight={'400'} fontSize={'18px'} color={'rgba(3, 3, 8, 0.6)'}>Expanding influence in the Crypto world</Text>
          </Stack>
          <Stack p={'45px'}>
            <Stack bg={"rgba(255,255,255,0.8)"} borderRadius={'20px'}>
              <HStack pt={'45px'} overflow={"scroll"} justifyContent={"center"} spacing={0}>
                <Button h={'42px'} w={'150px'} borderRadius={0} variant={'unstyled'}
                        borderLeftRadius={'21px'} border={'1px solid'}
                        borderColor={'#E5E5E5'} bg={selectId === -1 ? '#EAAA00' : 'white'}
                        onClick={() => setSelectId(-1)}
                >
                  All
                </Button>
                {
                  category?.map((item: any, index: number) => (
                    <Button key={item.id} h={'42px'} w={'150px'} borderRadius={0} variant={'unstyled'}
                            border={'1px solid'}
                            borderColor={'#E5E5E5'} bg={selectId === item.id ? '#EAAA00' : 'white'}
                            borderRightRadius={index === category?.length - 1 ? '21px' : 0}
                            onClick={() => setSelectId(item.id)}
                    >
                      {item.attributes.name}
                    </Button>
                  ))
                }
              </HStack>
              <Wrap justify={"center"} p={'45px'}>
                { partners?.filter((item: any) => {
                  if (selectId === -1) return true;
                  return item.attributes.category?.data?.id === selectId;
                }).map((item: any) => (
                  <WrapItem key={item.id} w={'200px'} justifyContent={"center"}>
                    <chakra.img src={'https://cms.nestfi.net/' + item.attributes.logo.data.attributes.url} h={'100px'}/>
                  </WrapItem>
                )) }
              </Wrap>
            </Stack>
          </Stack>
          <Stack h={'62px'}></Stack>
        </Stack>
      </Stack>
      <Spacer/>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack bgImage={'/image/partnership/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      {SEO}
      <NavigationMobile/>
      <Stack textAlign={"center"} py={'260px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>Intergrations<br/>
          &<br/>
          Partners</Text>
        <Text fontSize={'12.5px'} fontWeight={'400'} color={'rgba(3, 3, 8, 0.6)'}>Expanding influence in the Crypto world</Text>
      </Stack>
      <Stack px={'24px'}>
        <Stack w={'full'} borderRadius={'20px'} py={'15px'} px={'10px'} spacing={'10px'}
               bg={'rgba(255,255,255,0.7)'}>
          <HStack spacing={0} w={'full'}>
            <Button h={'42px'} w={'full'} borderRadius={0} variant={'unstyled'} maxH={'28px'}
                    border={'1px solid'} fontSize={'9px'}
                    borderColor={'#E5E5E5'} bg={selectId === -1 ? '#EAAA00' : 'white'}
                    onClick={() => setSelectId(-1)} borderLeftRadius={'21px'}
            >
              All
            </Button>
            {
              category?.filter((item: any, index: number) => index < 3).map((item: any, index: number) => (
                <Button key={item.id} h={'42px'} w={'full'} borderRadius={0} variant={'unstyled'} maxH={'28px'}
                        border={'1px solid'} fontSize={'9px'}
                        borderColor={'#E5E5E5'} bg={selectId === index ? '#EAAA00' : 'white'}
                        borderRightRadius={index === 2 ? '21px' : 0}
                        onClick={() => setSelectId(index)}
                >
                  {item.attributes.name}
                </Button>
              ))
            }
          </HStack>
          <HStack spacing={0}>
            {
              category?.filter((item: any, index: number) => index > 3).map((item: any, index: number) => (
                <Button key={item.id} h={'42px'} w={'full'} borderRadius={0} variant={'unstyled'} maxH={'28px'}
                        borderLeftRadius={index === 0 ? '21px' : 0} border={'1px solid'} fontSize={'9px'}
                        borderColor={'#E5E5E5'} bg={selectId === item.id ? '#EAAA00' : 'white'}
                        borderRightRadius={index === category.length - 5 ? '21px' : 0}
                        onClick={() => setSelectId(item.id)}
                >
                  {item.attributes.name}
                </Button>
              ))
            }
          </HStack>
          <Wrap justify={"center"} py={'30px'}>
            { partners?.filter((item: any) => {
              if (selectId === -1) return true;
              return item.attributes.category.data?.id === selectId;
            }).map((item: any) => (
              <WrapItem key={item.id} w={'100px'} justifyContent={"center"}>
                <chakra.img src={'https://cms.nestfi.net/' + item.attributes.logo.data.attributes.url} h={'50px'}/>
              </WrapItem>
            )) }
          </Wrap>
        </Stack>
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