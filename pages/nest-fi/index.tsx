import {Stack, Text} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <Stack px={'45px'}>
      <Navigation/>
      <Text>Home</Text>
      <Footer/>
    </Stack>
  )
}

export default Page