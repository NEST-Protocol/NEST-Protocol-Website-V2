import {
  Button,
  chakra,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Spacer, useDisclosure,
  VStack
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import gtag from "ga-gtag";

export default function NavigationMobile() {
  const {isOpen, onOpen, onClose} = useDisclosure()

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