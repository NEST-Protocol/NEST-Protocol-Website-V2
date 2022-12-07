import '../styles/globals.css'
import '../styles/github.css'
import type {AppProps} from 'next/app'
import {Center, Stack, ChakraProvider} from "@chakra-ui/react";
import theme from "../chakra"
import Script from "next/script";

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Script async src={"https://crypto.com/price/static/widget/index.js"}/>
      <Script async src={"https://www.googletagmanager.com/gtag/js?id=G-ELV55124T4"}/>
      <Script id={"gtag"} strategy={"afterInteractive"}>
        {`      window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'G-X9C08SL576');
                `}
      </Script>
      <Center>
        <Stack maxW={"1920px"} w={'100%'} spacing={0}>
          <Component {...pageProps} />
        </Stack>
      </Center>
    </ChakraProvider>
  )
}

