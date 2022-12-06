import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Center, Stack, ChakraProvider} from "@chakra-ui/react";
import theme from "../chakra"

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Stack maxW={"1920px"} w={'100%'} spacing={0}>
          <Component {...pageProps} />
        </Stack>
      </Center>
    </ChakraProvider>
  )
}

