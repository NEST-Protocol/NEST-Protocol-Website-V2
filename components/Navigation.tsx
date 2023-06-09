import {
  Button,
  chakra,
  Popover, PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text, HStack,
} from "@chakra-ui/react";
import gtag, {install} from "ga-gtag";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    install('G-ELV55124T4');
  }, [])

  return (
    <Stack align={"center"} position={'sticky'} top={0} zIndex={'banner'} bg={isScrolled ? 'white' : 'transparent'}>
      <Stack px={['20px', '20px', '20px', '45px']} minH={'72px'} h={'72px'} direction={"row"}
             justifyContent={"space-between"} w={'full'}
             align={"center"}>
        <Stack direction={'row'} spacing={['20px', '20px', '20px', '50px']}>
          <Link href={'/'}>
            <chakra.img
              cursor={"pointer"}
              src={"/logo.svg"}
              alt="nest"
              h={'20px'}
            />
          </Link>
          <Stack direction={"row"} align={"center"} spacing={['20px', '20px', '20px', '32px']} fontWeight={'700'}
                 fontSize={'16px'}
                 lineHeight={'22px'} color={'#030308'} overflow={'hidden'}>
            <HStack _hover={{color: '#EAAA00'}} color={router.pathname === '/nest-fi' ? '#EAAA00' : '#030308'}
                    cursor={"pointer"}
                    onClick={() => {
                      window.open('https://finance.nestprotocol.org/', '_blank')
                    }}>
              <span>
                NESTFi
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.99998 1.66659C1.81589 1.66659 1.66665 1.81583 1.66665 1.99992V11.9999C1.66665 12.184 1.81588 12.3333 1.99998 12.3333H12C12.1841 12.3333 12.3333 12.184 12.3333 11.9999V8.82449C12.3333 8.4563 12.6318 8.15782 13 8.15782C13.3682 8.15782 13.6666 8.4563 13.6666 8.82449V11.9999C13.6666 12.9204 12.9205 13.6666 12 13.6666H1.99998C1.07951 13.6666 0.333313 12.9204 0.333313 11.9999V1.99992C0.333313 1.07945 1.07951 0.333252 1.99998 0.333252H4.99998C5.36817 0.333252 5.66665 0.631729 5.66665 0.999919C5.66665 1.36811 5.36817 1.66659 4.99998 1.66659H1.99998Z"
                  fill="currentColor" fillOpacity="0.8"/>
                <path
                  d="M7.66665 0.999919C7.66665 0.631729 7.96512 0.333252 8.33331 0.333252H13C13.3682 0.333252 13.6666 0.631729 13.6666 0.999919V5.66659C13.6666 6.03477 13.3682 6.33325 13 6.33325C12.6318 6.33325 12.3333 6.03477 12.3333 5.66659V2.6093L8.07132 6.87129C7.81097 7.13164 7.38886 7.13164 7.12851 6.87129C6.86816 6.61094 6.86816 6.18883 7.12851 5.92848L11.3904 1.66659H8.33331C7.96512 1.66659 7.66665 1.36811 7.66665 0.999919Z"
                  fill="currentColor" fillOpacity="0.8"/>
              </svg>
            </HStack>
            <Link href={'/craft/'}>
              <chakra.a _hover={{color: '#EAAA00'}} cursor={"pointer"}
                        color={router.pathname === '/craft' ? '#EAAA00' : '#030308'}>NEST Craft
              </chakra.a>
            </Link>
            <Link href={'/oracle/'}>
              <chakra.a _hover={{color: '#EAAA00'}} cursor={"pointer"}
                        color={router.pathname === '/oracle' ? '#EAAA00' : '#030308'}>NEST Oracle
              </chakra.a>
            </Link>
            <HStack _hover={{color: '#EAAA00'}} cursor={"pointer"} whiteSpace={'nowrap'} onClick={() => {
              window.open('https://nft.nestprotocol.org/', '_blank')
            }}>
              <span>Cyber Ink</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.99998 1.66659C1.81589 1.66659 1.66665 1.81583 1.66665 1.99992V11.9999C1.66665 12.184 1.81588 12.3333 1.99998 12.3333H12C12.1841 12.3333 12.3333 12.184 12.3333 11.9999V8.82449C12.3333 8.4563 12.6318 8.15782 13 8.15782C13.3682 8.15782 13.6666 8.4563 13.6666 8.82449V11.9999C13.6666 12.9204 12.9205 13.6666 12 13.6666H1.99998C1.07951 13.6666 0.333313 12.9204 0.333313 11.9999V1.99992C0.333313 1.07945 1.07951 0.333252 1.99998 0.333252H4.99998C5.36817 0.333252 5.66665 0.631729 5.66665 0.999919C5.66665 1.36811 5.36817 1.66659 4.99998 1.66659H1.99998Z"
                  fill="currentColor" fillOpacity="0.8"/>
                <path
                  d="M7.66665 0.999919C7.66665 0.631729 7.96512 0.333252 8.33331 0.333252H13C13.3682 0.333252 13.6666 0.631729 13.6666 0.999919V5.66659C13.6666 6.03477 13.3682 6.33325 13 6.33325C12.6318 6.33325 12.3333 6.03477 12.3333 5.66659V2.6093L8.07132 6.87129C7.81097 7.13164 7.38886 7.13164 7.12851 6.87129C6.86816 6.61094 6.86816 6.18883 7.12851 5.92848L11.3904 1.66659H8.33331C7.96512 1.66659 7.66665 1.36811 7.66665 0.999919Z"
                  fill="currentColor" fillOpacity="0.8"/>
              </svg>
            </HStack>
            <Link href={'/docs/'}>
              <chakra.a _hover={{color: '#EAAA00'}} color={router.pathname.startsWith('/docs') ? '#EAAA00' : '#030308'}
                        cursor={"pointer"}>Doc
              </chakra.a>
            </Link>
            <Popover trigger={'hover'}>
              <PopoverTrigger>
                <Text cursor={'pointer'} _hover={{color: '#EAAA00'}} color={
                  (router.pathname === '/blogs' || router.pathname === '/about/roundtable') ? '#EAAA00' : '#030308'}
                >Blog</Text>
              </PopoverTrigger>
              <PopoverContent px={'44px'} bg={"white"} py={'26px'} w={'240px'} borderRadius={'20px'} border={""}
                              opacity={0.8}>
                <PopoverArrow/>
                <Link href={'/blogs/'}>
                  <chakra.a _hover={{color: '#EAAA00'}} cursor={"pointer"}
                            color={router.pathname === '/blogs' ? '#EAAA00' : '#030308'}>News
                  </chakra.a>
                </Link>
                <Link href={'/about/roundtable/'}>
                  <chakra.a _hover={{color: '#EAAA00'}} cursor={"pointer"}
                            color={router.pathname === '/about/roundtable' ? '#EAAA00' : '#030308'}>NEST Roundtable
                  </chakra.a>
                </Link>
              </PopoverContent>
            </Popover>
            <Popover trigger={'hover'}>
              <PopoverTrigger>
                <Text cursor={'pointer'} _hover={{color: '#EAAA00'}} color={
                  (router.pathname === '/about/team' || router.pathname === '/about/partnership') ? '#EAAA00' : '#030308'}
                >About</Text>
              </PopoverTrigger>
              <PopoverContent px={'44px'} bg={"white"} py={'26px'} w={'240px'} borderRadius={'20px'} border={""}
                              opacity={0.8}>
                <PopoverArrow/>
                <Link href={'/about/team/'}>
                  <chakra.a _hover={{color: '#EAAA00'}} cursor={"pointer"}
                            color={router.pathname === '/about/team' ? '#EAAA00' : '#030308'}>Team
                  </chakra.a>
                </Link>
                <Link href={'/about/partnership/'}>
                  <chakra.a _hover={{color: '#EAAA00'}} cursor={"pointer"}
                            color={router.pathname === '/about/partnership' ? '#EAAA00' : '#030308'}>Partnership
                  </chakra.a>
                </Link>
              </PopoverContent>
            </Popover>
          </Stack>
        </Stack>
        <Button fontSize={'12px'} bg={'#EAAA00'} minH={'36px'} minW={'120px'} borderRadius={'8px'} lineHeight={'16px'}
                color={'#030308'} fontWeight={"bold"}
                onClick={() => {
                  gtag('event', 'clickApp', {
                    'from': 'desktop header'
                  })
                  window.open('https://finance.nestprotocol.org/', '_blank')
                }}>
          Launch App
        </Button>
      </Stack>
    </Stack>
  )
}
