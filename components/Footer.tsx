import {chakra, HStack, Link, Stack, Text} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Stack py={'40px'} bg={'rgba(255, 255, 255, 0.8)'} spacing={'40px'} justifyContent={"center"} align={"center"}>
      <HStack spacing={'32px'}>
        {
          [
            {
              title: `NESTFi`,
              link: `/nest-fi`,
            },
            {
              title: `NESTCraft`,
              link: `/craft`,
            },
            {
              title: `NESTOracle`,
              link: `/oracle`,
            },
            {
              title: `Cyber Ink`,
              link: `https://nft.nestprotocol.org/`,
            },
            {
              title: `Doc`,
              link: `/docs`,
            },
            {
              title: `Blog`,
              link: ``,
            },
            {
              title: `About`,
              link: ``,
            }
          ].map((item, index) => (
            <Link key={index} fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'}>{item.title}</Link>
          ))
        }
      </HStack>
      <HStack spacing={'24px'}>
        <Link href={'https://github.com/NEST-Protocol'} isExternal>
          <chakra.img src={'/image/Footer/github_icon.svg'} h={'44px'} w={'44px'}
                      alt={'NEST-Protocol github'}/>
        </Link>
        <Link href={'https://twitter.com/nest_protocol/'} isExternal>
          <chakra.img src={'/image/Footer/twitter_icon.svg'} h={'44px'} w={'44px'}
                      alt={'NEST-Protocol Twitter'}/>
        </Link>
        <Link href={'https://t.me/nest_chat/'} isExternal>
          <chakra.img src={'/image/Footer/telegram_icon.svg'} h={'44px'} w={'44px'}
                      alt={'NEST-Protocol Telegram'}/>
        </Link>
        <Link href={'https://nest-protocol.medium.com/'} isExternal>
          <chakra.img src={'/image/Footer/medium_icon.svg'} h={'44px'} w={'44px'}
                      alt={'NEST-Protocol Medium'}/>
        </Link>
        <Link href={'https://discord.gg/nestprotocol'} isExternal>
          <chakra.img src={'/image/Footer/discord_icon.svg'} h={'44px'} w={'44px'}
                      alt={'NEST-Protocol Discord'}/>
        </Link>
        <Link href={'mailto:hello@nestprotocol.org'} isExternal>
          <chakra.img src={'/image/Footer/email_icon.svg'} h={'44px'} w={'44px'}
                      alt={'hello@nestprotocol.org'}/>
        </Link>
      </HStack>
      <Text fontSize={'14px'} fontWeight={'bold'} color={'#434344'}>@{new Date().getFullYear()} NEST</Text>
    </Stack>
  )
}