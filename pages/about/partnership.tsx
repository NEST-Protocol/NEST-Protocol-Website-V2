import {Button, Heading, HStack, Spacer, Stack, Text, useMediaQuery, Wrap, WrapItem, chakra} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import {getAllPartnerCategory, getAllPartners} from "../../lib/partners";
import {useState} from "react";

const Page = ({category, partners}: any) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [selectId, setSelectId] = useState(-1);

  const pcPage = (
    <Stack bgImage={'/image/partnership/bg.jpg'} bgPosition={"center"} bgSize={'cover'} minH={'100vh'}>
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} py={'160px'}>
        <Heading fontSize={'50px'}>Integration & Partners</Heading>
        <Text fontWeight={'bold'} fontSize={'18px'}>Expanding influence in the Crypto world</Text>
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
              category.map((item: any, index: number) => (
                <Button key={item.id} h={'42px'} w={'150px'} borderRadius={0} variant={'unstyled'}
                        border={'1px solid'}
                        borderColor={'#E5E5E5'} bg={selectId === item.id ? '#EAAA00' : 'white'}
                        borderRightRadius={index === category.length - 1 ? '21px' : 0}
                        onClick={() => setSelectId(item.id)}
                >
                  {item.attributes.name}
                </Button>
              ))
            }
          </HStack>
          <Wrap justify={"center"} p={'45px'}>
            { partners.filter((item: any) => {
              if (selectId === -1) return true;
              return item.attributes.category.data?.id === selectId;
            }).map((item: any) => (
              <WrapItem key={item.id} w={'200px'} justifyContent={"center"}>
                <chakra.img src={'https://cms.nestfi.net/' + item.attributes.logo.data.attributes.url} h={'100px'}/>
              </WrapItem>
            )) }
          </Wrap>
        </Stack>
      </Stack>
      <Stack h={'62px'}></Stack>
      <Spacer/>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack bgImage={'/image/partnership/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      <NavigationMobile/>
      <Stack textAlign={"center"} py={'260px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>Intergrations<br/>
          &<br/>
          Partners</Text>
        <Text fontSize={'12.5px'} fontWeight={'600'}>Expanding influence in the Crypto world</Text>
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
              category.filter((item: any, index: number) => index < 3).map((item: any, index: number) => (
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
              category.filter((item: any, index: number) => index > 3).map((item: any, index: number) => (
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
            { partners.filter((item: any) => {
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

export async function getStaticProps() {
  const categoryRes = await getAllPartnerCategory()
  const partnersRes = await getAllPartners()
  return {
    props: {
      category: categoryRes.data,
      partners: partnersRes.data
    }
  }
}