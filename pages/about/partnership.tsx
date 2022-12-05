import {Button, Heading, HStack, Stack, Text} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <Stack px={'45px'}>
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} py={'160px'}>
        <Heading fontSize={'50px'}>Integration & Partners</Heading>
        <Text fontWeight={'bold'} fontSize={'18px'}>Expanding influence in the Crypto world</Text>
      </Stack>
      <Stack h={'500px'} bg={"red"} borderRadius={'20px'}>
        <HStack p={'48px'} justifyContent={"center"} spacing={-1}>
          <Button h={'42px'} w={'150px'} borderRadius={0} borderLeftRadius={'21px'} border={'1px solid'} borderColor={'#EEEEEE'}>
            ALL
          </Button>
          <Button h={'42px'} w={'150px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
            NFT
          </Button>
          <Button h={'42px'} w={'150px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
            DAO
          </Button>
          <Button h={'42px'} w={'150px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
            DeFi
          </Button>
          <Button h={'42px'} w={'150px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
            Wallet
          </Button>
          <Button h={'42px'} w={'150px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
            GameFi
          </Button>
          <Button h={'42px'} w={'150px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
            Exchange
          </Button>
          <Button h={'42px'} w={'150px'} borderRadius={0} borderRightRadius={'21px'} border={'1px solid'} borderColor={'#EEEEEE'}>
            Infrastructure
          </Button>
        </HStack>
      </Stack>
      <Footer/>
    </Stack>
  )
}

export default Page