import {Button, Divider, Heading, HStack, space, Spacer, Stack, Text, Wrap, WrapItem} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <Stack>
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} py={'140px'}>
        <Heading fontSize={'50px'}>NEST Roundtable</Heading>
        <Text fontSize={'18px'} fontWeight={'bold'}>NEST Roundtable, A weekly current affairs topic<br/>to understand the world of blockchain</Text>
      </Stack>
      <Wrap justify={"center"} spacing={'40px'}>
        <WrapItem>
          <Stack w={'618px'} bg={"red"} p={'40px'} borderRadius={'20px'} spacing={'20px'}>
            <HStack>
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
        <WrapItem>
          <Stack w={'618px'} bg={"red"} p={'40px'} borderRadius={'20px'} spacing={'20px'}>
            <HStack>
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
        <WrapItem>
          <Stack w={'618px'} bg={"red"} p={'40px'} borderRadius={'20px'} spacing={'20px'}>
            <HStack>
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
        <WrapItem>
          <Stack w={'618px'} bg={"red"} p={'40px'} borderRadius={'20px'} spacing={'20px'}>
            <HStack>
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

      <Footer/>
    </Stack>
  )
}

export default Page