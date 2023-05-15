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
        <Link href={'https://discord.gg/nestprotocol'} isExternal>
          <chakra.img src={'/image/Footer/discord_icon.svg'} color={'#003232'} h={'44px'} w={'44px'}
                      alt={'discord_icon'}/>
        </Link>
        <Link href={'https://github.com/NEST-Protocol'} isExternal>
          <chakra.img src={'/image/Footer/github_icon.svg'} h={'44px'} w={'44px'} alt={'github_icon'}/>
        </Link>
        <Link href={'https://twitter.com/nest_protocol/'} isExternal>
          <chakra.img src={'/image/Footer/twitter_icon.svg'} h={'44px'} w={'44px'} alt={'twitter_icon'}/>
        </Link>
        <Link href={'https://t.me/nest_chat/'} isExternal>
          <chakra.img src={'/image/Footer/telegram_icon.svg'} h={'44px'} w={'44px'} alt={'telegram_icon'}/>
        </Link>
        <Link href={'https://nest-protocol.medium.com/'} isExternal>
          <chakra.img src={'/image/Footer/medium_icon.svg'} h={'44px'} w={'44px'} alt={'medium_icon'}/>
        </Link>
        <Link href={'mailto:hello@nestprotocol.org'} isExternal>
          <chakra.img src={'/image/Footer/email_icon.svg'} h={'44px'} w={'44px'} alt={'email_icon'}/>
        </Link>
      </HStack>
      <Text fontSize={'14px'} textAlign={"center"} fontWeight={'bold'}
            color={'#7D7D7D'}>@{new Date().getFullYear()} NEST</Text>
    </Stack>
  )
}