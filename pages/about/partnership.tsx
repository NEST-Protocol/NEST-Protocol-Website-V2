import {Button, Heading, HStack, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const pcPage = (
    <Stack>
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} py={'160px'}>
        <Heading fontSize={'50px'}>Integration & Partners</Heading>
        <Text fontWeight={'bold'} fontSize={'18px'}>Expanding influence in the Crypto world</Text>
      </Stack>
      <Stack px={'45px'}>
        <Stack h={'500px'} bg={"red"} borderRadius={'20px'}>
          <HStack p={'48px'} overflow={"scroll"} justifyContent={"center"} spacing={-1}>
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
      </Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack>
      <NavigationMobile/>
      <Stack textAlign={"center"} py={'260px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>Intergrations<br/>
          &<br/>
          Partners</Text>
        <Text fontSize={'12.5px'} fontWeight={'600'}>Expanding influence in the Crypto world</Text>
      </Stack>
      <Stack px={'24px'}>
        <Stack w={'full'} h={'400px'} borderRadius={'20px'} py={'15px'} px={'10px'} spacing={'10px'} bg={'red'}>
          <HStack spacing={0} w={'full'}>
            <Stack textAlign={"center"} justify={"center"} fontSize={'9px'} w={'full'} h={'28px'} borderRadius={0} borderLeftRadius={'28px'} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>ALL</Text>
            </Stack>
            <Stack textAlign={"center"} justify={"center"} fontSize={'9px'} w={'full'} h={'28px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>NFT</Text>
            </Stack>
            <Stack textAlign={"center"} justify={"center"} fontSize={'9px'} w={'full'} h={'28px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>DAO</Text>
            </Stack>
            <Stack textAlign={"center"} justify={"center"} fontSize={'9px'} w={'full'} h={'28px'} borderRightRadius={'28px'} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>DeFi</Text>
            </Stack>
          </HStack>
          <HStack spacing={0}>
            <Stack textAlign={"center"} justify={"center"} fontSize={'9px'} w={'full'} h={'28px'} borderRadius={0} borderLeftRadius={'21px'} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>Wallet</Text>
            </Stack>
            <Stack textAlign={"center"} justify={"center"} fontSize={'9px'} w={'full'} h={'28px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>GameFi</Text>
            </Stack>
            <Stack textAlign={"center"} justify={"center"} fontSize={'9px'} w={'full'} h={'28px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>Exchange</Text>
            </Stack>
            <Stack textAlign={"center"} justify={"center"} fontSize={'9px'} w={'full'} h={'28px'} borderRightRadius={'28px'} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>Infrastructure</Text>
            </Stack>
          </HStack>
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