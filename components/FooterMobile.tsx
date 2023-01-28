import {chakra, HStack, Link, Stack, Text} from "@chakra-ui/react";

export default function FooterMobile() {
  return (
    <Stack py={'44px'} px={'24px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"}
           align={"start"}>
      <Stack spacing={'40px'} align={"start"} w={'full'}>
        <Stack spacing={'22px'}>
          <Link fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch
            App</Link>
          <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Open futures, options NFT here</Text>
        </Stack>
        <Stack spacing={'22px'}>
          <Link fontSize={'15px'} fontWeight={'bold'} href={'/blogs'}>NEST Blog</Link>
          <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Blogs & news from NEST</Text>
        </Stack>
        <Stack spacing={'22px'}>
          <Link fontSize={'15px'} fontWeight={'bold'} href={'/doc/ennestwhitepaper.pdf'}>Whitepaper</Link>
          <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Learn more about NEST</Text>
        </Stack>
        <Stack spacing={'22px'}>
          <Link fontSize={'15px'} fontWeight={'bold'} href={'/docs/'}>Developer
            Docs</Link>
          <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know how to develop on NEST</Text>
        </Stack>
        <Stack spacing={'22px'}>
          <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs'}>FAQs</Link>
          <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Frequently asked questions</Text>
        </Stack>
        <Stack spacing={'10px'} w={'full'}>
          <Text fontSize={'15px'} fontWeight={'bold'}>Market price</Text>
          <chakra.div
            id="crypto-widget-CoinList"
            data-transparent="true"
            data-design="classic"
            data-coin-ids="2204"
            w={'100%'}
          ></chakra.div>
        </Stack>
        <Stack w={'full'} align={"center"} spacing={'12px'}>
          <HStack spacing={'40px'}>
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
          </HStack>
          <HStack spacing={'40px'}>
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
        </Stack>
        <Stack align={"center"} w={'full'}>
          <Text fontSize={'14px'} textAlign={"center"} fontWeight={'bold'} color={'#7D7D7D'}>@{new Date().getFullYear()} NEST</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}