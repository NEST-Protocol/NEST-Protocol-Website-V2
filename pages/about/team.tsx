import {HStack, Stack, Text} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <Stack px={'45px'}>
      <Navigation/>
      <Stack textAlign={"center"} py={'167px'}>
        <Text fontSize={'50px'} fontWeight={'bold'}>NEST DAO</Text>
        <Stack h ='100px'>

        </Stack>

        <HStack justifyContent={"space-between"} fontWeight={'bold'} fontSize={'18px'}>
          <Stack w={'250px'}>
            <Text>NEST Research Academy</Text>
            <Text>(NRA)</Text>
          </Stack>
          <Stack w={'250px'}>
            <Text>NEST Influence Block</Text>
            <Text>(NIB)</Text>
          </Stack>
          <Stack w={'250px'}>
            <Text>NEST Developer Alliance</Text>
            <Text>(NDA)</Text>
          </Stack>
          <Stack w={'250px'}>
            <Text>NEST Community</Text>
            <Text>(NC)</Text>
          </Stack>
        </HStack>

        <Stack pt={'150px'} pb={'65px'}>
          <Text fontSize={'33px'} fontWeight={'bold'}>Who is Behind NEST?</Text>
          <Text fontSize={'15px'} fontWeight={'bold'}>The NEST protocol is coordinated by the NEST DAO and has the following organisation:</Text>
        </Stack>

        <Stack px={'160px'} spacing={'138px'}>
          <Stack h={'440px'} bg={'red'} borderRadius={'20px'}>

          </Stack>

          <Stack h={'440px'} bg={'red'} borderRadius={'20px'}>

          </Stack>

          <Stack h={'440px'} bg={'red'} borderRadius={'20px'}>

          </Stack>

          <Stack h={'440px'} bg={'red'} borderRadius={'20px'}>

          </Stack>

        </Stack>


      </Stack>
      <Footer/>
    </Stack>
  )
}

export default Page