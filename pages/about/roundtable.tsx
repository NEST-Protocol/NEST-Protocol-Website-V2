import {
  Button,
  Divider,
  Heading,
  HStack,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
  Wrap,
  WrapItem, chakra, Link
} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import {getAllRoundtable} from "../../lib/roundtable";
import {useState} from "react";
import Head from "next/head";

const Page = ({roundtables}: any) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [showMore, setShowMore] = useState(false);

  const title = "NEST Roundtable | NEST Protocol";
  const description = "NEST Roundtable, A weekly current affairs topic to understand the world of blockchain";

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
    <Stack bgImage={'/image/Roundtable/bg.jpg'} bgPosition={"center"} bgSize={'cover'} minH={'100vh'}>
      {SEO}
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} py={'140px'}>
        <Heading fontSize={'50px'}>NEST Roundtable</Heading>
        <Text fontSize={'18px'} fontWeight={'400'}>NEST Roundtable, A weekly current affairs topic<br/>to understand
          the world of blockchain</Text>
      </Stack>
      <Wrap justify={"center"} spacing={'40px'}>
        {
          roundtables.filter((item: any, index: number) => {
            if (showMore) {
              return true
            }
            return index < 8
          }).map((item: any) => (
            <WrapItem key={item.id}>
              <Stack w={'618px'} bg={"rgba(255,255,255,0.8)"} p={'40px'} borderRadius={'20px'} spacing={'20px'}>
                <HStack>
                  <Link href={item.attributes.link} isExternal>
                    <chakra.img src={'/image/Roundtable/Audio.svg'} h={'34px'}/>
                  </Link>
                  <Spacer/>
                  <Text>{item.attributes.scheduled_start}</Text>
                </HStack>
                <Divider/>
                <Stack>
                  <Link href={item.attributes.blog_link} isExternal fontSize={'21px'} fontWeight={'bold'} h={'60px'} noOfLines={2}>
                    {item.attributes.title}
                  </Link>
                </Stack>
                <HStack spacing={'10px'} overflow={'hidden'} h={'20px'}>
                  {
                    item.attributes.invited_user_icons.data?.map((icon: any) => (
                      <chakra.img key={icon.id} src={'https://cms.nestfi.net/' + icon.attributes.url}
                                  h={'20px'} objectFit={'contain'}/>
                    ))
                  }
                </HStack>
              </Stack>
            </WrapItem>
          ))
        }
      </Wrap>
      <Stack align={"center"} pt={'48px'} pb={'138px'}>
        <Button w={'170px'} variant={'outline'} onClick={() => {
          setShowMore(!showMore)
        }
        }>
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      </Stack>
      <Spacer/>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack bgImage={'/image/Roundtable/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      {SEO}
      <NavigationMobile/>
      <Stack textAlign={"center"} py={'230px'}>
        <Heading fontSize={'25px'}>
          NEST Roundtable
        </Heading>
        <Text fontSize={'12.5px'} fontWeight={'400'}>NEST Roundtable, A weekly current affairs<br/>
          topic to understand the world of blockchain</Text>
      </Stack>
      <Stack px={'20px'} spacing={'20px'}>
        {
          roundtables.filter((item: any, index: number) => {
            if (showMore) {
              return true
            }
            return index < 8
          }).map((item: any) => (
            <Stack key={item.id} bg={'rgba(255,255,255,0.8)'} borderRadius={'20px'} p={'20px'} spacing={'10px'}
                   h={'130px'}>
              <HStack>
                <Link href={item.attributes.link} isExternal>
                  <chakra.img src={'/image/Roundtable/Audio.svg'} h={'17px'}/>
                </Link>
                <Spacer/>
                <Text fontSize={'7.5px'} fontWeight={'500'} color={'#7D7D7D'}>{item.attributes.scheduled_start}</Text>
              </HStack>
              <Divider/>
              <Link href={item.attributes.blog_link} isExternal fontSize={'10px'} fontWeight={'bold'}> {item.attributes.title}</Link>
              <HStack spacing={'10px'} overflow={'hidden'} h={'20px'}>
                {
                  item.attributes.invited_user_icons.data?.map((icon: any) => (
                    <chakra.img key={icon.id} src={'https://cms.nestfi.net/' + icon.attributes.url}
                                h={'20px'} objectFit={'contain'}/>
                  ))
                }
              </HStack>
            </Stack>
          ))
        }
      </Stack>
      <Stack align={"center"} pt={'48px'}>
        <Button w={'170px'} variant={'outline'} onClick={() => {
          setShowMore(!showMore)
        }
        }>
          {showMore ? 'Less' : 'More'}
        </Button>
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

export async function getStaticProps() {
  const res = await getAllRoundtable()
  return {
    props: {
      roundtables: res.data
    }
  }
}