import {Button, Divider, HStack, Stack, Text, Wrap, WrapItem} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <Stack px={'45px'}>
      <Navigation/>
      <Stack spacing={'44px'}>
        <Wrap justify={'space-between'}>
          <WrapItem>
            <Stack w={'400px'} h={'352px'} bg={'red'} borderRadius={'20px'}>

            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack w={'400px'} h={'352px'} bg={'red'} borderRadius={'20px'}>

            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack w={'400px'} h={'352px'} bg={'red'} borderRadius={'20px'}>

            </Stack>
          </WrapItem>
        </Wrap>
        <Stack py={'48px'} px={'44px'} borderRadius={'20px'}>
          <HStack spacing={-1} justify={"center"} pb={'30px'}>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'#EAAA00'} borderLeftRadius={'21px'} border={'1px solid'} borderColor={'#EEEEEE'}>
              News
            </Button>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'white'} border={'1px solid'} borderColor={'#EEEEEE'}>
              Blogs
            </Button>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'white'} border={'1px solid'} borderColor={'#EEEEEE'}>
              Roundtable
            </Button>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'white'} borderRightRadius={'21px'} border={'1px solid'} borderColor={'#EEEEEE'}>
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
              form of NFT, and then as an NFT holder, you could use that ticket as a collectible. For example, the people
              that of NFT, and then as an NFT holder, you could use that ticket as a collectible. For example, the people
              that effectively, now with NFT, this is something that could be replicated except you wouldn’t have to worry
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
              form of NFT, and then as an NFT holder, you could use that ticket as a collectible. For example, the people
              that of NFT, and then as an NFT holder, you could use that ticket as a collectible. For example, the people
              that effectively, now with NFT, this is something that could be replicated except you wouldn’t have to worry
              about
            </Text>
          </Stack>
          <Divider/>

          <Stack align={"center"} pt={'48px'}>
            <Button w={'140px'} variant={'outline'} h={'34px'} borderRadius={'17px'} border={'2px solid'} color={'#EAAA00'} borderColor={'#EAAA00'}>More</Button>
          </Stack>

        </Stack>
      </Stack>
      <Footer/>
    </Stack>
  )
}

export default Page