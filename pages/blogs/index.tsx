import {Button, Divider, Heading, HStack, Stack, Text, useMediaQuery, Wrap, WrapItem} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";

const Page = () => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  const pcPage = (
    <Stack>
      <Navigation/>
      <Stack spacing={'44px'} px={'45px'}>
        <Wrap justify={'space-between'} spacing={'40px'}>
          <WrapItem w={'30%'} bg={"red"} borderRadius={'20px'}>
            <Stack h={'352px'}>

            </Stack>
          </WrapItem>
          <WrapItem w={'30%'} bg={"red"} borderRadius={'20px'}>
            <Stack h={'352px'}>

            </Stack>
          </WrapItem>
          <WrapItem w={'30%'} bg={"red"} borderRadius={'20px'}>
            <Stack h={'352px'}>

            </Stack>
          </WrapItem>
        </Wrap>
        <Stack py={'48px'} px={'44px'} borderRadius={'20px'}>
          <HStack spacing={-1} justify={"center"} pb={'30px'}>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'#EAAA00'} borderLeftRadius={'21px'}
                    border={'1px solid'} borderColor={'#EEEEEE'}>
              News
            </Button>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'white'} border={'1px solid'}
                    borderColor={'#EEEEEE'}>
              Blogs
            </Button>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'white'} border={'1px solid'}
                    borderColor={'#EEEEEE'}>
              Roundtable
            </Button>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'white'} borderRightRadius={'21px'}
                    border={'1px solid'} borderColor={'#EEEEEE'}>
              Transfer
            </Button>
          </HStack>
          <Divider/>
          <Stack pt={'20px'} pb={'44px'}>
            <Text fontWeight={'600'} fontSize={'25px'}>
              NEST Roundtable 13:<br/>
              What are the new NFT use cases, beyond music and art?
            </Text>
            <Text fontWeight={'500'} fontSize={'15px'} color={'#7D7D7D'}>
              Nov 25, 2022
            </Text>
            <Text fontWeight={'600'} fontSize={'15px'}>
              I think NFTs are bringing additional value to some of the old web 2 issues that we had. Some of the recent
              ones for example have been with events and ticketing to go to a concert or to go to a sports event in the
              form of NFT, and then as an NFT holder, you could use that ticket as a collectible. For example, the
              people
              that of NFT, and then as an NFT holder, you could use that ticket as a collectible. For example, the
              people
              that effectively, now with NFT, this is something that could be replicated except you wouldn’t have to
              worry
              about
            </Text>
          </Stack>
          <Divider/>
          <Stack pt={'20px'} pb={'44px'}>
            <Text fontWeight={'600'} fontSize={'25px'}>
              NEST Roundtable 13:<br/>
              What are the new NFT use cases, beyond music and art?
            </Text>
            <Text fontWeight={'500'} fontSize={'15px'} color={'#7D7D7D'}>
              Nov 25, 2022
            </Text>
            <Text fontWeight={'600'} fontSize={'15px'}>
              I think NFTs are bringing additional value to some of the old web 2 issues that we had. Some of the recent
              ones for example have been with events and ticketing to go to a concert or to go to a sports event in the
              form of NFT, and then as an NFT holder, you could use that ticket as a collectible. For example, the
              people
              that of NFT, and then as an NFT holder, you could use that ticket as a collectible. For example, the
              people
              that effectively, now with NFT, this is something that could be replicated except you wouldn’t have to
              worry
              about
            </Text>
          </Stack>
          <Divider/>

          <Stack align={"center"} pt={'48px'}>
            <Button w={'140px'} variant={'outline'} h={'34px'} borderRadius={'17px'} border={'2px solid'}
                    color={'#EAAA00'} borderColor={'#EAAA00'}>More</Button>
          </Stack>

        </Stack>
      </Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack>
      <NavigationMobile/>
      <Stack px={'24px'} spacing={'24px'} pb={'24px'}>
        <Stack w={'full'} h={'400px'} bg={"red"} borderRadius={'14px'}>

        </Stack>
        <Stack w={'full'} h={'400px'} bg={"red"} borderRadius={'14px'}>

        </Stack>
        <Stack w={'full'} h={'400px'} bg={"red"} borderRadius={'14px'}>

        </Stack>
      </Stack>
      <Stack px={'24px'}>
        <Stack py={'35px'} spacing={'27px'} bg={'blue'} borderRadius={'14px'}>
          <HStack spacing={-1} overflow={"scroll"}>
            <Button fontSize={'15px'} w={'full'} h={'33px'} borderRadius={0} bg={'#EAAA00'} borderLeftRadius={'21px'}>
              News
            </Button>
            <Button fontSize={'15px'} w={'full'} h={'33px'} borderRadius={0} bg={'white'} border={'1px solid'}
                    borderColor={'#EEEEEE'}>
              Blogs
            </Button>
            <Button fontSize={'15px'} w={'full'} h={'33px'} borderRadius={0} bg={'white'} border={'1px solid'}
                    borderColor={'#EEEEEE'}>
              Roundtable
            </Button>
            <Button fontSize={'15px'} w={'full'} h={'33px'} borderRadius={0} bg={'white'} borderRightRadius={'21px'}
                    border={'1px solid'} borderColor={'#EEEEEE'}>
              Transfer
            </Button>
          </HStack>
          <Divider/>
          <Stack>
            <Stack px={'24px'} pb={'27px'} spacing={'22px'}>
              <Text fontWeight={"bold"} fontSize={'12.5px'}>What are the new NFT use cases beyond music and art?</Text>
              <Text color={'#878787'} fontSize={'10px'} fontWeight={'500'}>Nov 25, 2022</Text>
              <Text fontSize={'10px'} fontWeight={'600'}>I think NFTs are bringing additional value</Text>
              <Divider/>
            </Stack>
            <Stack px={'24px'} pb={'27px'} spacing={'22px'}>
              <Text fontWeight={"bold"} fontSize={'12.5px'}>What are the new NFT use cases beyond music and art?</Text>
              <Text color={'#878787'} fontSize={'10px'} fontWeight={'500'}>Nov 25, 2022</Text>
              <Text fontSize={'10px'} fontWeight={'600'}>I think NFTs are bringing additional value</Text>
              <Divider/>
            </Stack>
            <Stack px={'24px'} pb={'27px'} spacing={'22px'}>
              <Text fontWeight={"bold"} fontSize={'12.5px'}>What are the new NFT use cases beyond music and art?</Text>
              <Text color={'#878787'} fontSize={'10px'} fontWeight={'500'}>Nov 25, 2022</Text>
              <Text fontSize={'10px'} fontWeight={'600'}>I think NFTs are bringing additional value</Text>
              <Divider/>
            </Stack>
          </Stack>
          <Stack align={"center"}>
            <Button minH={'44px'} w={'140px'} borderRadius={'22px'} variant={'outline'}>
              More
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack h={'62px'}>
      </Stack>
      <FooterMobile/>
    </Stack>
  )

  if (!isDesktop) {
    return mobilePage
  } else {
    return (
      pcPage
    )
  }
}

export default Page