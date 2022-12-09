import {chakra, HStack, Link, Spacer, Stack, Text} from "@chakra-ui/react";

export default function Footer() {
  return (
    <HStack py={'88px'} px={'45px'} bg={'rgba(255, 255,255, 0.7)'} justifyContent={"space-between"}
            align={"start"}>
      <Stack spacing={'40px'} align={"start"}>
        <Stack spacing={'22px'}>
          <Link fontSize={'15px'} fontWeight={'bold'} href={'https://finance.nestprotocol.org/'} isExternal>Launch
            App</Link>
          <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Open futures, options NFT here</Text>
        </Stack>
        <Stack spacing={'22px'}>
          <Link fontSize={'15px'} fontWeight={'bold'} href={'/blogs/'}>NEST Blog</Link>
          <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Blogs & news from NEST</Text>
        </Stack>
        <Stack spacing={'22px'}>
          <Link fontSize={'15px'} fontWeight={'bold'} href={'/doc/ennestwhitepaper.pdf'}>Whitepaper</Link>
          <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Learn more about NEST</Text>
        </Stack>
      </Stack>
      <Stack spacing={'40px'}>
        <Stack spacing={'22px'}>
          <Link fontSize={'15px'} fontWeight={'bold'} href={'/docs/'}>Developer
            Docs</Link>
          <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Know how to develop on NEST</Text>
        </Stack>
        <Stack spacing={'22px'}>
          <Link fontSize={'15px'} fontWeight={'bold'} href={'/about/faqs/'}>FAQs</Link>
          <Text fontSize={'15px'} fontWeight={'600'} color={'#7D7D7D'}>Frequently asked questions</Text>
        </Stack>
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
      </Stack>
      <Stack spacing={'40px'} w={'420px'} h={'281px'}>
        <Stack spacing={'10px'}>
          <Text fontSize={'15px'} fontWeight={'bold'} px={'16px'}>Market price</Text>
          <chakra.div
            id="crypto-widget-CoinList"
            data-transparent="true"
            data-design="classic"
            data-coin-ids="2204"
            w={'100%'}
          ></chakra.div>
        </Stack>
        <Spacer/>
        <HStack spacing={'22px'}>
          <Spacer/>
          <Text fontSize={'14px'} fontWeight={'bold'} color={'#434344'}>@2022 NEST</Text>
        </HStack>
      </Stack>
    </HStack>
  )
}