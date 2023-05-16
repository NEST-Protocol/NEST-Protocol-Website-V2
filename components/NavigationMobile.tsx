import {
  Button,
  chakra,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Spacer, useDisclosure,
  VStack, Text, Stack, Link as ChakraLink
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

export default function NavigationMobile() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [showAbout, setShowAbout] = useState(false)
  const [showBlog, setShowBlog] = useState(false)
  const router = useRouter()

  return (
    <HStack w={'full'} px={'24px'} py={'20px'} spacing={'15px'}>
      <Link href={'/'}>
        <chakra.img
          src={"/logo.svg"}
          alt="nest"
          h={'20px'}
        />
      </Link>
      <Spacer/>
      <Button>
        Launch App
      </Button>
      <Button onClick={onOpen} fontSize={'36px'} alignItems={'end'} p={0} variant={"ghost"} _active={{bg: "none"}}
              _hover={{bg: "none"}} aria-label={'menu'}>
        <HamburgerIcon/>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        returnFocusOnClose={false}
        size={'full'}
      >
        <ModalContent>
          <ModalCloseButton
            size={'36px'}
            mt={'14px'}
            mx={'11px'}
          />
          <ModalBody p={'32px'} bgImage={'/image/Home/01-Phone-bg1.png'} bgPosition={'center'} bgSize={'cover'}>
            <VStack alignItems={'start'} pt={'60px'} spacing={'120px'}>
              <Stack spacing={'25px'} textAlign={"start"}>
                <Link href={'https://finance.nestprotocol.org/'}>
                  <HStack fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}
                          opacity={showAbout || showBlog ? 0.6 : 1}
                          color={router.pathname === '/nest-fi' ? '#EAAA00' : '#003232'}>
                    <span>NESTFi</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.99998 1.66659C1.81589 1.66659 1.66665 1.81583 1.66665 1.99992V11.9999C1.66665 12.184 1.81588 12.3333 1.99998 12.3333H12C12.1841 12.3333 12.3333 12.184 12.3333 11.9999V8.82449C12.3333 8.4563 12.6318 8.15782 13 8.15782C13.3682 8.15782 13.6666 8.4563 13.6666 8.82449V11.9999C13.6666 12.9204 12.9205 13.6666 12 13.6666H1.99998C1.07951 13.6666 0.333313 12.9204 0.333313 11.9999V1.99992C0.333313 1.07945 1.07951 0.333252 1.99998 0.333252H4.99998C5.36817 0.333252 5.66665 0.631729 5.66665 0.999919C5.66665 1.36811 5.36817 1.66659 4.99998 1.66659H1.99998Z"
                        fill="currentColor" fillOpacity="0.8"/>
                      <path
                        d="M7.66665 0.999919C7.66665 0.631729 7.96512 0.333252 8.33331 0.333252H13C13.3682 0.333252 13.6666 0.631729 13.6666 0.999919V5.66659C13.6666 6.03477 13.3682 6.33325 13 6.33325C12.6318 6.33325 12.3333 6.03477 12.3333 5.66659V2.6093L8.07132 6.87129C7.81097 7.13164 7.38886 7.13164 7.12851 6.87129C6.86816 6.61094 6.86816 6.18883 7.12851 5.92848L11.3904 1.66659H8.33331C7.96512 1.66659 7.66665 1.36811 7.66665 0.999919Z"
                        fill="currentColor" fillOpacity="0.8"/>
                    </svg>
                  </HStack>
                </Link>
                <Link href={'/craft'}>
                  <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}
                        color={router.pathname === '/craft' ? '#EAAA00' : '#003232'}
                        opacity={showAbout || showBlog ? 0.6 : 1}>NESTCraft</Text>
                </Link>
                <Link href={'/oracle/'}>
                  <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}
                        color={router.pathname === '/oracle' ? '#EAAA00' : '#003232'}
                        opacity={showAbout || showBlog ? 0.6 : 1}>NESTOracle</Text>
                </Link>
                <ChakraLink href={'https://nft.nestprotocol.org/'} isExternal fontSize={'16px'} lineHeight={'22px'}
                            fontWeight={'700'} opacity={showAbout || showBlog ? 0.6 : 1}>
                  <HStack>
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
                </ChakraLink>
                <Link href={'/docs/'}>
                  <Text fontSize={'16px'} color={router.pathname === '/docs' ? '#EAAA00' : '#003232'}
                        opacity={showAbout || showBlog ? 0.6 : 1}
                        fontWeight={'700'}>Doc</Text>
                </Link>
                <Text fontSize={'16px'} opacity={showBlog || showAbout ? 0.6 : 1} lineHeight={'22px'} fontWeight={'700'}
                      onClick={() => setShowBlog(!showBlog)}>Blog</Text>
                {
                  showBlog && (
                    <>
                      <Link href={'/blogs/'}>
                        <Text fontSize={'16px'} lineHeight={'22px'}
                              color={router.pathname === '/blogs' ? '#EAAA00' : '#003232'} fontWeight={'700'}>News</Text>
                      </Link>
                      <Link href={'/about/roundtable/'}>
                        <Text fontSize={'16px'} lineHeight={'22px'}
                              color={router.pathname === '/about/roundtable' ? '#EAAA00' : '#003232'} fontWeight={'700'}>NEST
                          Roundtable</Text>
                      </Link>
                    </>
                  )
                }
                <Text fontSize={'16px'} lineHeight={'22px'} opacity={showAbout || showBlog ? 0.6 : 1} fontWeight={'700'}
                      onClick={() => setShowAbout(!showAbout)}>About</Text>
                {
                  showAbout && (
                    <>
                      <Link href={'/about/team/'}>
                        <Text fontSize={'16px'} color={router.pathname === '/about/team' ? '#EAAA00' : '#003232'}
                              lineHeight={'22px'}
                              fontWeight={'700'}>Team</Text>
                      </Link>
                      <Link href={'/about/partnership/'}>
                        <Text fontSize={'16px'} color={router.pathname === '/about/partnership' ? '#EAAA00' : '#003232'}
                              lineHeight={'22px'}
                              fontWeight={'700'}>Partnership</Text>
                      </Link>
                    </>
                  )
                }
              </Stack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </HStack>
  )
}