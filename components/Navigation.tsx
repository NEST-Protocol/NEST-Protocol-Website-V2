import {
  Button,
  chakra,
  Popover, PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text, Link as ChakraLink,
} from "@chakra-ui/react";
import gtag, {install} from "ga-gtag";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter()

  useEffect(() => {
    install('G-ELV55124T4');
  }, [])

  const pcPage = (
    <Stack px={'45px'} minH={'88px'} h={'88px'} direction={"row"} justifyContent={"space-between"} align={"center"}>
      <Stack direction={'row'} spacing={'50px'}>
        <Link href={'/'}>
          <chakra.img
            cursor={"pointer"}
            src={"/logo.svg"}
            alt="nest"
            h={'20px'}
          />
        </Link>
        <Stack direction={"row"} align={"center"} spacing={'32px'} fontWeight={'700'} fontSize={'16px'} lineHeight={'22px'} color={'#003232'}>
          <Link href={'/nest-fi/'}>
            <chakra.a _hover={{ color: '#EAAA00' }} cursor={"pointer"} color={router.pathname === '/nest-fi' ? '#EAAA00' : '#003232'}>NESTFi</chakra.a>
          </Link>
          <Link href={'/craft/'}>
            <chakra.a _hover={{ color: '#EAAA00' }} cursor={"pointer"} color={router.pathname === '/craft' ? '#EAAA00' : '#003232'}>NESTCraft</chakra.a>
          </Link>
          <Link href={'/oracle/'}>
            <chakra.a _hover={{ color: '#EAAA00' }} cursor={"pointer"} color={router.pathname === '/oracle' ? '#EAAA00' : '#003232'}>NESTOracle</chakra.a>
          </Link>
          <ChakraLink isExternal href={'https://nft.nestprotocol.org/'} _hover={{ color: '#EAAA00' }} cursor={"pointer"}>
            Cyber Ink
          </ChakraLink>
          <Link href={'/docs/'}>
            <chakra.a _hover={{ color: '#EAAA00' }} color={router.pathname.startsWith('/docs') ? '#EAAA00' : '#003232'} cursor={"pointer"}>Doc</chakra.a>
          </Link>
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Text cursor={'pointer'} _hover={{ color: '#EAAA00' }}>Blog</Text>
            </PopoverTrigger>
            <PopoverContent px={'44px'} bg={"white"} py={'26px'} w={'240px'} borderRadius={'20px'} border={""} opacity={0.8}>
              <PopoverArrow/>
              <Link href={'/blogs/'}>
                <chakra.a _hover={{ color: '#EAAA00' }} cursor={"pointer"} color={router.pathname === '/blogs' ? '#EAAA00' : '#003232'}>News</chakra.a>
              </Link>
              <Link href={'/about/roundtable/'}>
                <chakra.a _hover={{ color: '#EAAA00' }} cursor={"pointer"} color={router.pathname === '/about/roundtable' ? '#EAAA00' : '#003232'}>NEST Roundtable</chakra.a>
              </Link>
            </PopoverContent>
          </Popover>
          <Popover trigger={'hover'}>
            <PopoverTrigger>
              <Text cursor={'pointer'} _hover={{ color: '#EAAA00' }}>About</Text>
            </PopoverTrigger>
            <PopoverContent px={'44px'} bg={"white"} py={'26px'} w={'240px'} borderRadius={'20px'} border={""} opacity={0.8}>
              <PopoverArrow/>
              <Link href={'/about/team/'}>
                <chakra.a _hover={{ color: '#EAAA00' }} cursor={"pointer"} color={router.pathname === '/about/team' ? '#EAAA00' : '#003232'}>Team</chakra.a>
              </Link>
              <Link href={'/about/partnership/'}>
                <chakra.a _hover={{ color: '#EAAA00' }} cursor={"pointer"} color={router.pathname === '/about/partnership' ? '#EAAA00' : '#003232'}>Partnership</chakra.a>
              </Link>
            </PopoverContent>
          </Popover>
        </Stack>
      </Stack>
      <Button fontSize={'12px'} bg={'#EAAA00'} minH={'36px'} borderRadius={'8px'} lineHeight={'16px'} color={'#003232'} fontWeight={"bold"}
              onClick={() => {
                gtag('event', 'clickApp', {
                  'from': 'desktop header'
                })
                window.open('https://finance.nestprotocol.org/', '_blank')
              }}>
        Launch App
      </Button>
    </Stack>
  )

  return (
    pcPage
  )
}
