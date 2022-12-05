import {
  Stack,Text
} from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Stack px={'45px'}>
      <Navigation/>
      <Text>Home</Text>
      <Footer/>
    </Stack>
  )
}
