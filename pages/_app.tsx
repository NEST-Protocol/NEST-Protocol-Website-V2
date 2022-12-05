import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Center, Stack, ChakraProvider} from "@chakra-ui/react";

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider>
      <Center>
        <Stack maxW={"1920px"} w={'100%'} spacing={0}>
          <Component {...pageProps} />
        </Stack>
      </Center>
    </ChakraProvider>
  )
}

