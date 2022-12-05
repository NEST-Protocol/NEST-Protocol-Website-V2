import {Button, Heading, HStack, Stack, Text, Wrap, WrapItem} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <Stack px={'45px'}>
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} spacing={'30px'}>
        <Heading fontSize={'50px'}>
          PVM, Another Revolution <br/> in Blockchain
        </Heading>
        <Text fontSize={'18px'} fontWeight={'bold'}>
          NEST ecosystem is a paradigm revolution to the traditional<br/>
          market mechanism, providing the blockchain world with a<br/>
          whole new range of development tools and creative new assets.
        </Text>
        <HStack spacing={'48px'}>
          <Button bg={'#EAAA00'} h={'34px'} w={'160px'} borderRadius={'17px'} fontWeight={'bold'} color={'#003232'}>Developer Doc</Button>
          <Button bg={'#EAAA00'} h={'34px'} w={'160px'} borderRadius={'17px'} fontWeight={'bold'} color={'#003232'}>Github</Button>
        </HStack>
      </Stack>

      <HStack py={'162px'} px={'104px'}>
        <Stack>

        </Stack>
        <Stack>
          <Text>NEST PVM</Text>
          <Text>NEST Probabilistic Virtual Machine (PVM) is a virtual<br/>machine-like structure based on the basic function<br/>library. </Text>
          <HStack>
            <Text>PVM Mechanism</Text>
            <Text>Whitepaper</Text>
          </HStack>
        </Stack>
      </HStack>


      <Stack align={"center"} textAlign={"center"} spacing={'36px'} py={'138px'}>
        <Heading fontSize={'50px'}>
          Build your tokenomic<br/>based on NEST
        </Heading>
        <Text fontSize={'25px'} fontWeight={'600'}>Developers can build their own tokenomic<br/>systems faster through NEST’s infrastructure.</Text>
        <Text>Developers can simplify the building of tokenomic systems<br/>
          into the construction of stochastic assets, developers only need to<br/>
          call the fundamental functions provided by PVM, create stochastic assets<br/>
          by programming these functions, and trade and<br/>
          settle the assets through the OMM mechanism.<br/>
          NEST Oracle provides the random information flow.
        </Text>

        <Wrap spacing={'44px'}>
          <WrapItem>
            <Stack w={'308px'} h={'352px'} bg={'red'} borderRadius={'20px'}>
              <Text>Stochastic Assets</Text>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack w={'308px'} h={'352px'} bg={'red'} borderRadius={'20px'}>
              <Text>Stochastic Assets</Text>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack w={'308px'} h={'352px'} bg={'red'} borderRadius={'20px'}>
              <Text>Stochastic Assets</Text>
            </Stack>
          </WrapItem>
        </Wrap>
      </Stack>




      <Footer/>
    </Stack>
  )
}

export default Page