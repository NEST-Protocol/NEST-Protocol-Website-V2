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
  WrapItem, chakra
} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const pcPage = (
    <Stack bgImage={'/image/Roundtable/bg.jpg'} bgPosition={"center"} bgSize={'cover'} minH={'100vh'}>
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} py={'140px'}>
        <Heading fontSize={'50px'}>NEST Roundtable</Heading>
        <Text fontSize={'18px'} fontWeight={'bold'}>NEST Roundtable, A weekly current affairs topic<br/>to understand
          the world of blockchain</Text>
      </Stack>
      <Wrap justify={"center"} spacing={'40px'}>
        <WrapItem>
          <Stack w={'618px'} bg={"rgba(255,255,255,0.8)"} p={'40px'} borderRadius={'20px'} spacing={'20px'}>
            <HStack>
              <chakra.img src={'/image/Roundtable/Audio.svg'} h={'34px'}/>
              <Spacer/>
              <Text>oct 24, 2022</Text>
            </HStack>
            <Divider/>
            <Stack>
              <Text fontSize={'21px'} fontWeight={'bold'}>
                Digital Assets in GameFi
              </Text>
            </Stack>
            <HStack>

            </HStack>
          </Stack>
        </WrapItem>
      </Wrap>
      <Stack align={"center"} pt={'48px'} pb={'138px'}>
        <Button w={'170px'} variant={'outline'}>
          Less Roundtable
        </Button>
      </Stack>
      <Spacer/>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack bgImage={'/image/Roundtable/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      <NavigationMobile/>
      <Stack textAlign={"center"} py={'230px'}>
        <Heading fontSize={'25px'}>
          NEST Roundtable
        </Heading>
        <Text fontSize={'12.5px'} fontWeight={'600'}>NEST Roundtable, A weekly current affairs<br/>
          topic to understand the world of blockchain</Text>
      </Stack>
      <Stack px={'20px'} spacing={'20px'}>
        <Stack bg={'rgba(255,255,255,0.8)'} borderRadius={'20px'} p={'20px'} spacing={'10px'} h={'130px'}>
          <HStack>
            <chakra.img  src={'/image/Roundtable/Audio.svg'} h={'17px'}/>
            <Spacer/>
            <Text fontSize={'7.5px'} fontWeight={'500'} color={'#7D7D7D'}>oct 24, 2022</Text>
          </HStack>
          <Divider/>
          <Text fontSize={'10px'} fontWeight={'bold'}>Digital Assets in GameFi</Text>
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