import {
  Button,
  chakra,
  Link, Popover, PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader, PopoverTrigger,
  Stack,
  Text
} from "@chakra-ui/react";
import gtag, {install} from "ga-gtag";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Navigation() {
  const router = useRouter()

  useEffect(() => {
    install('G-ELV55124T4');
  }, [])

  const pcPage = (
    <Stack px={'45px'} h={'88px'} direction={"row"} justifyContent={"space-between"} align={"center"}>
      <Link href={'/'}>
        <chakra.img
          src={"/logo.svg"}
          alt="nest"
          h={'20px'}
        />
      </Link>
      <Stack direction={"row"} align={"center"} spacing={'24px'} fontWeight={'500'} fontSize={'15px'} color={'#003232'}>
        <Link href={'https://nft.nestprotocol.org/'} isExternal _hover={{ color: '#EAAA00' }}>Cyber Ink</Link>
        <Link href={'/nest-fi/'} color={router.pathname === '/nest-fi' ? '#EAAA00' : '#003232'} _hover={{ color: '#EAAA00' }}>NESTFi</Link>
        <Popover trigger={'hover'}>
          <PopoverTrigger>
            <Text cursor={"pointer"} _hover={{ color: '#EAAA00' }}>Developers</Text>
          </PopoverTrigger>
          <PopoverContent px={'44px'} bg={"white"} py={'26px'} w={'240px'} borderRadius={'20px'} border={""} opacity={0.8}>
            <PopoverArrow />
            <Link href={'/developers/oracle/'} _hover={{ color: '#EAAA00' }}>NEST Oracle</Link>
            <Link href={'/developers/pvm/'} _hover={{ color: '#EAAA00' }}>NEST PVM</Link>
          </PopoverContent>
        </Popover>
        <Link href={'/docs/'} _hover={{ color: '#EAAA00' }}>Doc</Link>
        <Link href={'/blogs/'} color={router.pathname === '/blogs' ? '#EAAA00' : '#003232'} _hover={{ color: '#EAAA00' }}>Blog</Link>
        <Popover trigger={'hover'}>
          <PopoverTrigger>
            <Text cursor={'pointer'} _hover={{ color: '#EAAA00' }}>About</Text>
          </PopoverTrigger>
          <PopoverContent px={'44px'} bg={"white"} py={'26px'} w={'240px'} borderRadius={'20px'} border={""} opacity={0.8}>
            <PopoverArrow/>
            <Link href={'/about/team/'} _hover={{ color: '#EAAA00' }}>Team</Link>
            <Link href={'/about/partnership/'} _hover={{ color: '#EAAA00' }}>Partnership</Link>
          </PopoverContent>
        </Popover>
        <Button fontSize={'bold'} minW={'120px'} bg={'#EAAA00'} h={'34px'} borderRadius={'17px'} color={'#003232'} fontWeight={"bold"}
                onClick={() => {
                  gtag('event', 'clickApp', {
                    'from': 'desktop header'
                  })
                  window.open('https://finance.nestprotocol.org/', '_blank')
                }}>
          App
        </Button>
      </Stack>
    </Stack>
  )

  return (
    pcPage
  )
}
