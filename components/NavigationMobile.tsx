import {
  Button,
  chakra,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Spacer, useDisclosure,
  VStack, Text, Stack, Link, Box,
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {useRouter} from "next/router";

export default function NavigationMobile() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [showAbout, setShowAbout] = useState(false)
  const [showBlog, setShowBlog] = useState(false)
  const router = useRouter()

  return (
    <HStack w={'full'} px={'20px'} h={'60px'} spacing={'12px'}>
      <Link href={'/'}>
        <chakra.img
          src={"/logo.svg"}
          alt="nest"
          h={'20px'}
        />
      </Link>
      <Spacer/>
      <Button maxH={'36px'} px={'12px'} fontSize={'12px'} lineHeight={'16px'} borderRadius={'8px'}>
        Launch App
      </Button>
      <Box onClick={onOpen}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M3 5.5C3 5.22386 3.22386 5 3.5 5H20.5C20.7761 5 21 5.22386 21 5.5V6.5C21 6.77614 20.7761 7 20.5 7H3.5C3.22386 7 3 6.77614 3 6.5V5.5ZM3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5V12.5C21 12.7761 20.7761 13 20.5 13H3.5C3.22386 13 3 12.7761 3 12.5V11.5ZM3.5 17C3.22386 17 3 17.2239 3 17.5V18.5C3 18.7761 3.22386 19 3.5 19H20.5C20.7761 19 21 18.7761 21 18.5V17.5C21 17.2239 20.7761 17 20.5 17H3.5Z"
                fill="#030308"/>
        </svg>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={true}
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
                <HStack fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}
                        onClick={() => {
                          window.open('https://nestfi.org/', '_blank')
                        }}
                        opacity={showAbout || showBlog ? 0.6 : 1}
                        color={router.pathname === '/nest-fi' ? '#EAAA00' : '#030308'}>
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
                <Link href={'/craft'}>
                  <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}
                        color={router.pathname === '/craft' ? '#EAAA00' : '#030308'}
                        opacity={showAbout || showBlog ? 0.6 : 1}>NEST Craft</Text>
                </Link>
                <Link href={'/oracle/'}>
                  <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}
                        color={router.pathname === '/oracle' ? '#EAAA00' : '#030308'}
                        opacity={showAbout || showBlog ? 0.6 : 1}>NEST Oracle</Text>
                </Link>
                <HStack fontSize={'16px'} lineHeight={'22px'} opacity={showAbout || showBlog ? 0.6 : 1}
                        onClick={() => {
                          window.open('https://nft.nestprotocol.org/', '_blank')
                        }}
                        fontWeight={'700'}>
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
                  <Text fontSize={'16px'} color={router.pathname === '/docs' ? '#EAAA00' : '#030308'}
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
                              color={router.pathname === '/blogs' ? '#EAAA00' : '#030308'} fontWeight={'700'}>News</Text>
                      </Link>
                      <Link href={'/about/roundtable/'}>
                        <Text fontSize={'16px'} lineHeight={'22px'}
                              color={router.pathname === '/about/roundtable' ? '#EAAA00' : '#030308'} fontWeight={'700'}>NEST
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
                        <Text fontSize={'16px'} color={router.pathname === '/about/team' ? '#EAAA00' : '#030308'}
                              lineHeight={'22px'}
                              fontWeight={'700'}>Team</Text>
                      </Link>
                      <Link href={'/about/partnership/'}>
                        <Text fontSize={'16px'} color={router.pathname === '/about/partnership' ? '#EAAA00' : '#030308'}
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