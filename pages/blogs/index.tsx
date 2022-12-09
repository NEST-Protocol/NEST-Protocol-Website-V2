import {Button, Divider, HStack, Link, Stack, Text, useMediaQuery, Wrap, WrapItem, chakra} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import {getBlogCategory} from "../../lib/blogs";
import {useState} from "react";

const Page = ({blogs}: any) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const array1 = [
    {image: '/image/Blog/blog_card_01@2x.png', title: 'Coinbase Announces Planned Listing of Tokens, Adds $NEST',
      desc: 'On Monday, Coinbase, a leading American cryptocurrency exchange, announced that it would list six tokens',
      date: 'July 25, 2022', link: '/blogs/Coinbase-Announces-Planned-Listing-of-Tokens-Adds-NEST'},
    {image: '/image/Blog/blog_card_02@2x.png', title: 'NEST Protocol A New Paradigm of Game Theoretic Oracle',
      desc: 'Blockchain innovation defined the major part of the last decade, with cryptocurrency disrupting centralized systems, ',
      date: 'Jun 9, 2022', link: '/blogs/NEST-Protocol-A-New-Paradigm-of-Game-Theoretic-Oracle'},
    {image: '/image/Blog/blog_card_03@2x.png', title: 'NEST’s RSS FEED INTEGRATED WITH CRYPTO.COM PRICE PAGE',
      desc: 'Through Crypto.com’s NEST Price Page, you can now directly access NEST’s RSS news feed.',
      date: 'May 6, 2022', link: '/blogs/NEST-RSS-FEED-INTEGRATED-WITH-CRYPTO.COM-PRICE-PAGE'},
  ]

  const pcPage = (
    <Stack bgSize={'cover'} bgImage={"image/Blog/bg.jpg"} bgPosition={"center"}>
      <Navigation/>
      <Stack spacing={'44px'} px={'45px'}>
        <Wrap justify={'space-between'} spacing={'40px'}>
          {
            array1.map((item, index) => (
              <WrapItem key={index} w={'30%'} bg={"rgba(255, 255, 255, 0.7)"} borderRadius={'20px'}
                        border={'1px solid #EEEEEE'}>
                <Stack>
                  <Stack>
                    <chakra.img src={item.image} objectFit={'contain'} />
                  </Stack>
                  <Stack px={'44px'} py={'34px'}>
                    <Link href={item.link} fontWeight={'bold'} fontSize={'18px'}>{item.title}</Link>
                    <Text fontSize={'13px'} fontWeight={'600'} h={'60px'}>{item.desc}</Text>
                    <Text fontSize={'13px'} fontWeight={'500'}>{item.date}</Text>
                  </Stack>
                </Stack>
              </WrapItem>
            ))
          }
        </Wrap>
        <Stack py={'48px'} px={'44px'} borderRadius={'20px'} bg={"rgba(255,255,255,0.8)"}>
          <HStack spacing={0} justify={"center"} pb={'30px'}>
            {
              blogs.map((item: any, index: number) => (
                <Button key={index} fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={index === categoryIndex ? '#EAAA00' : ''}
                        border={'1px solid'} borderColor={'#EEEEEE'} variant={'unstyled'} borderLeftRadius={index === 0 ? '21px' : ''}
                        borderRightRadius={index === blogs.length - 1 ? '21px' : ''} fontWeight={'600'}
                        onClick={() => {
                          setCategoryIndex(index)
                        }
                } >
                  {item.attributes.name}
                </Button>
              ))
            }
          </HStack>
          <Divider/>
          <Stack h={'44px'}></Stack>
          <Stack h={'900px'} overflow={"scroll"}>
            {
              blogs[categoryIndex].attributes.blogs.data.filter((item: any ,index: number) => {
                if (showMore) {
                  return true
                }
                return index < 3
              }).map((item: any, index: number) => (
                <Stack pb={'44px'} key={index} px={'128px'}>
                  <Link fontWeight={'600'} fontSize={'25px'} href={`/blogs/${item.attributes.slug}`}>
                    {item.attributes.title}
                  </Link>
                  <Stack h={'8px'}></Stack>
                  <Text fontWeight={'500'} fontSize={'15px'} color={'#003232'}>
                    {item.attributes.date}
                  </Text>
                  {/*TODO: hidden markdown symbol*/}
                  <Text fontWeight={'600'} fontSize={'15px'} noOfLines={3}>
                    {item.attributes.content}
                  </Text>
                  <Stack h={'44px'}></Stack>
                  <Divider/>
                </Stack>
              ))
            }
            <Stack align={"center"} pt={'8px'}>
              <Button w={'140px'} variant={'outline'} h={'34px'} borderRadius={'17px'} border={'2px solid'}
                      color={'#EAAA00'} borderColor={'#EAAA00'} onClick={() => {
                setShowMore(!showMore)}
              }>{ !showMore ? 'More' : 'Less' }</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack h={'37px'}></Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack bgSize={'cover'} bgImage={"image/Blog/bg.jpg"} bgPosition={"center"}>
      <NavigationMobile/>
      <Stack px={'24px'} spacing={'24px'} pb={'24px'}>
        {
          array1.map((item, index) => (
            <Stack key={index} w={'full'} h={'400px'} bg={"white"} borderRadius={'14px'} boxShadow={'0px 0px 45px 5px #E5E5E5'}>
              <Stack>
                <Stack>
                  <Stack>
                    <chakra.img src={item.image} objectFit={'contain'} />
                  </Stack>
                </Stack>
                <Stack px={'44px'} py={'34px'}>
                  <Link href={item.link} fontWeight={'bold'} fontSize={'18px'}>{item.title}</Link>
                  <Text fontSize={'13px'} fontWeight={'600'}>{item.desc}</Text>
                  <Text fontSize={'13px'} fontWeight={'500'}>{item.date}</Text>
                </Stack>
              </Stack>
            </Stack>
          ))
        }
      </Stack>
      <Stack px={'24px'}>
        <Stack py={'35px'} spacing={'27px'} bg={'white'} borderRadius={'14px'}>
          <HStack spacing={0} px={'8px'}>
            {
              blogs.map((item: any, index: number) => (
                <Button key={index} fontSize={'15px'} w={'150px'} h={'33px'} borderRadius={0} bg={index === categoryIndex ? '#EAAA00' : ''}
                        border={'1px solid'} borderColor={'#EEEEEE'} variant={'unstyled'} borderLeftRadius={index === 0 ? '28px' : ''}
                        borderRightRadius={index === blogs.length - 1 ? '21px' : ''} fontWeight={'600'}
                        onClick={() => {
                          setCategoryIndex(index)
                        }
                        } >
                  {item.attributes.name}
                </Button>
              ))
            }
          </HStack>
          <Divider/>
          <Stack h={'700px'} overflow={'scroll'}>
            {
              blogs[categoryIndex].attributes.blogs.data.filter((item: any ,index: number) => {
                if (showMore) {
                  return true
                }
                return index < 3
              }).map((item: any, index: number) => (
                <Stack px={'24px'} pb={'27px'} spacing={'22px'} key={index}>
                  <Text fontWeight={"bold"} fontSize={'15px'}>{item.attributes.title}</Text>
                  <Text fontSize={'10px'} fontWeight={'500'}>{item.attributes.date}</Text>
                  <Text fontSize={'10px'} fontWeight={'600'} noOfLines={3}>{item.attributes.content}</Text>
                  <Divider/>
                </Stack>
              ))
            }
            <Stack align={"center"}>
              <Button minH={'44px'} w={'140px'} borderRadius={'22px'} variant={'outline'} onClick={() => {
                setShowMore(!showMore)}
              }>
                {!showMore ? 'More' : 'Less'}
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack h={'62px'}>
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

export async function getStaticProps() {
  const blogRes = await getBlogCategory()
  return {
    props: {
      blogs: blogRes.data
    }
  }
}