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
import gtag from "ga-gtag";
import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

export default function NavigationMobile() {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [showDevelopers, setShowDevelopers] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const router = useRouter()

  return (
    <HStack w={'full'} px={'24px'} py={'20px'}>
      <Link href={'/'}>
        <chakra.img
          src={"/logo.svg"}
          alt="nest"
          h={'20px'}
        />
      </Link>
      <Spacer/>
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
          <ModalBody p={'22px'}>
            <VStack alignItems={'center'} pt={'100px'} spacing={'120px'}>
              <Stack spacing={'25px'} textAlign={"center"}>
                <ChakraLink href={'https://nft.nestprotocol.org/'} isExternal fontSize={'16px'} fontWeight={'600'} opacity={showDevelopers || showAbout ? 0.6 : 1}>
                  Cyber Ink
                </ChakraLink>
                <Link href={'/nest-fi/'}>
                  <Text fontSize={'16px'} fontWeight={'600'} color={router.pathname === '/nest-fi' ? '#EAAA00' : '#003232'} opacity={showDevelopers || showAbout ? 0.6 : 1}>NESTFi</Text>
                </Link>
                <Text fontSize={'16px'} fontWeight={'600'}
                      opacity={showDevelopers || showAbout ? 0.6 : 1}
                      onClick={() => setShowDevelopers(!showDevelopers)} >Developers</Text>
                {
                  showDevelopers && (
                    <>
                      <Link href={'/developers/oracle/'}>
                        <Text fontSize={'16px'} color={router.pathname === '/developers/oracle' ? '#EAAA00' : '#003232'} fontWeight={'600'}>NEST Oracle</Text>
                      </Link>
                      <Link href={'/developers/pvm/'}>
                        <Text fontSize={'16px'} color={router.pathname === '/developers/pvm' ? '#EAAA00' : '#003232'} fontWeight={'600'}>NEST PVM</Text>
                      </Link>
                      <Link href={'/developers/bug/'}>
                        <Text fontSize={'16px'} color={router.pathname === '/developers/bug' ? '#EAAA00' : '#003232'} fontWeight={'600'}>Bug Bounty Program</Text>
                      </Link>
                    </>
                  )
                }
                <Link href={'/docs/'}>
                  <Text fontSize={'16px'} color={router.pathname === '/docs' ? '#EAAA00' : '#003232'}
                        opacity={showDevelopers || showAbout ? 0.6 : 1}
                        fontWeight={'600'}>Doc</Text>
                </Link>
                <Link href={'/blogs/'}>
                  <Text fontSize={'16px'} color={router.pathname === '/blogs' ? '#EAAA00' : '#003232'} opacity={showDevelopers || showAbout ? 0.6 : 1} fontWeight={'600'}>Blog</Text>
                </Link>
                <Text fontSize={'16px'} opacity={showDevelopers || showAbout ? 0.6 : 1} fontWeight={'600'} onClick={() => setShowAbout(!showAbout)}>About</Text>
                {
                  showAbout && (
                    <>
                      <Link href={'/about/team/'}>
                        <Text fontSize={'16px'} color={router.pathname === '/about/team' ? '#EAAA00' : '#003232'} fontWeight={'600'}>Team</Text>
                      </Link>
                      <Link href={'/about/partnership/'}>
                        <Text fontSize={'16px'}  color={router.pathname === '/about/partnership' ? '#EAAA00' : '#003232'}  fontWeight={'600'}>Partnership</Text>
                      </Link>
                    </>
                  )
                }
              </Stack>

              <Button
                variant={'solid'}
                aria-label={'App'}
                bg={'#EAAA00'}
                borderRadius={'full'}
                _active={{bg: "none"}}
                _hover={{bg: "none"}}
                minH={'44px'}
                px={'70px'}
                minW={'120px'}
                onClick={() => {
                  gtag('event', 'clickApp', {
                    'from': 'phone header'
                  })
                  window.open('https://finance.nestprotocol.org/', '_blank')
                }}
              >
                App
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </HStack>
  )
}