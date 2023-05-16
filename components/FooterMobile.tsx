import {chakra, HStack, Link, Stack, Text} from "@chakra-ui/react";

export default function FooterMobile() {
  return (
    <Stack py={'20px'} px={'24px'} bg={'rgba(255, 255,255, 0.7)'} spacing={'24px'} justifyContent={"space-between"} align={"center"}>
      <Stack spacing={'8px'} w={'364px'}>
        {
          [
            {
              title: 'NESTFi',
              link: '',
            },
            {
              title: 'NESTCraft',
              link: '',
            },
            {
              title: 'NESTOracle',
              link: '',
            },
            {
              title: 'Cyber Ink',
              link: '',
            },
            {
              title: 'Doc',
              link: '',
            },
            {
              title: 'Blog',
              link: '',
            },
            {
              title: 'About',
              link: '',
            },
          ].map((item, index) => (
            <Link key={index} fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'} textAlign={"start"}>
              {item.title}
            </Link>
          ))
        }
      </Stack>
      <HStack spacing={'20px'} align={"center"} justifyContent={"center"} >
        <Link href={'https://github.com/NEST-Protocol'} isExternal>
          <chakra.img src={'/image/Footer/github.svg'} h={'44px'} w={'44px'}
                      alt={'NEST-Protocol github'}/>
        </Link>
        <Link href={'https://twitter.com/nest_protocol/'} isExternal>
          <chakra.img src={'/image/Footer/twitter.svg'} h={'44px'} w={'44px'}
                      alt={'NEST-Protocol Twitter'}/>
        </Link>
        <Link href={'https://t.me/nest_chat/'} isExternal>
          <chakra.img src={'/image/Footer/telegram.svg'} h={'44px'} w={'44px'}
                      alt={'NEST-Protocol Telegram'}/>
        </Link>
        <Link href={'https://nest-protocol.medium.com/'} isExternal>
          <chakra.img src={'/image/Footer/medium.svg'} h={'44px'} w={'44px'}
                      alt={'NEST-Protocol Medium'}/>
        </Link>
        <Link href={'https://discord.gg/nestprotocol'} isExternal>
          <chakra.img src={'/image/Footer/discord.svg'} h={'44px'} w={'44px'}
                      alt={'NEST-Protocol Discord'}/>
        </Link>
        <Link href={'mailto:hello@nestprotocol.org'} isExternal>
          <chakra.img src={'/image/Footer/Email.svg'} h={'44px'} w={'44px'}
                      alt={'hello@nestprotocol.org'}/>
        </Link>
      </HStack>
      <Text fontSize={'14px'} textAlign={"center"} lineHeight={'20px'} fontWeight={'400'}
            color={'rgba(3, 3, 8, 0.35)'}>@{new Date().getFullYear()} NEST</Text>
    </Stack>
  )
}