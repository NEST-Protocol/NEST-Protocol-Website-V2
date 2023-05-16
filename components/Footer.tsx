import {chakra, HStack, Link, Stack, Text} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Stack py={'40px'} bg={'rgba(255, 255, 255, 0.8)'} spacing={'40px'} justifyContent={"center"} align={"center"}>
      <HStack spacing={'32px'}>
        {
          [
            {
              title: `NESTFi`,
              link: `https://finance.nestprotocol.org/`,
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
              link: `/blogs`,
            },
            {
              title: `About`,
              link: `/about/team`,
            }
          ].map((item, index) => (
            <Link key={index} fontSize={'16px'} lineHeight={'22px'} fontWeight={'700'} href={item.link} target={'_blank'}
                  _hover={{ color: 'rgba(234, 170, 0, 1)' }}>{item.title}</Link>
          ))
        }
      </HStack>
      <HStack spacing={'24px'}>
        <Link href={'https://github.com/NEST-Protocol'} isExternal opacity={0.6} _hover={{ opacity: 1 }}>
          <chakra.img src={'/image/Footer/github.svg'} h={'40px'} w={'40px'}
                      alt={'NEST-Protocol github'}/>
        </Link>
        <Link href={'https://twitter.com/nest_protocol/'} isExternal opacity={0.6} _hover={{ opacity: 1 }}>
          <chakra.img src={'/image/Footer/twitter.svg'} h={'40px'} w={'40px'}
                      alt={'NEST-Protocol Twitter'}/>
        </Link>
        <Link href={'https://t.me/nest_chat/'} isExternal opacity={0.6} _hover={{ opacity: 1 }}>
          <chakra.img src={'/image/Footer/telegram.svg'} h={'40px'} w={'40px'}
                      alt={'NEST-Protocol Telegram'}/>
        </Link>
        <Link href={'https://nest-protocol.medium.com/'} isExternal opacity={0.6} _hover={{ opacity: 1 }}>
          <chakra.img src={'/image/Footer/medium.svg'} h={'40px'} w={'40px'}
                      alt={'NEST-Protocol Medium'}/>
        </Link>
        <Link href={'https://discord.gg/nestprotocol'} isExternal opacity={0.6} _hover={{ opacity: 1 }}>
          <chakra.img src={'/image/Footer/discord.svg'} h={'40px'} w={'40px'}
                      alt={'NEST-Protocol Discord'}/>
        </Link>
        <Link href={'mailto:hello@nestprotocol.org'} isExternal opacity={0.6} _hover={{ opacity: 1 }}>
          <chakra.img src={'/image/Footer/Email.svg'} h={'40px'} w={'40px'}
                      alt={'hello@nestprotocol.org'}/>
        </Link>
      </HStack>
      <Text fontSize={'14px'} lineHeight={'22px'} fontWeight={'bold'} color={'rgba(3, 3, 8, 0.35)'}>@{new Date().getFullYear()} NEST</Text>
    </Stack>
  )
}