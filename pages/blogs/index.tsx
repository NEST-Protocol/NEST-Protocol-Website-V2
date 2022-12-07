import {Button, Divider, HStack, Stack, Text, useMediaQuery, Wrap, WrapItem} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const pcPage = (
    <Stack bgSize={'cover'} bgImage={"image/Blog/bg.jpg"} bgPosition={"center"}>
      <Navigation/>
      <Stack spacing={'44px'} px={'45px'}>
        <Wrap justify={'space-between'} spacing={'40px'}>
          {
            [
              {image: '', title: '', desc: '', date: ''},
              {image: '', title: '', desc: '', date: ''},
              {image: '', title: '', desc: '', date: ''},
            ].map((item, index) => (
              <WrapItem key={index} w={'30%'} bg={"rgba(255, 255, 255, 0.7)"} borderRadius={'20px'}
                        border={'1px solid #EEEEEE'}>
                <Stack>
                  <Stack h={'144px'}>

                  </Stack>
                  <Stack px={'44px'} py={'34px'}>
                    <Text fontWeight={'bold'} fontSize={'18px'}>Coinbase Announces Planned Listing of Tokens, Adds
                      $NEST</Text>
                    <Text fontSize={'13px'} fontWeight={'600'}>On Monday, Coinbase, a leading American cryptocurrency
                      exchange, announced that it would list six tokens </Text>
                    <Text fontSize={'13px'} fontWeight={'500'}>July 25, 2022</Text>
                  </Stack>
                </Stack>
              </WrapItem>
            ))
          }
        </Wrap>
        <Stack py={'48px'} px={'44px'} borderRadius={'20px'} bg={"rgba(255,255,255,0.8)"}>
          <HStack spacing={-1} justify={"center"} pb={'30px'}>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'#EAAA00'} borderLeftRadius={'21px'}
                    border={'1px solid'} borderColor={'#EEEEEE'}>
              News
            </Button>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'white'} border={'1px solid'}
                    borderColor={'#EEEEEE'}>
              Blogs
            </Button>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'white'} border={'1px solid'}
                    borderColor={'#EEEEEE'}>
              Roundtable
            </Button>
            <Button fontSize={'15px'} w={'150px'} h={'42px'} borderRadius={0} bg={'white'} borderRightRadius={'21px'}
                    border={'1px solid'} borderColor={'#EEEEEE'}>
              Transfer
            </Button>
          </HStack>
          <Divider/>
          <Stack h={'44px'}></Stack>
          {
            [
              {
                title: 'What are the new NFT use cases, beyond music and art?', desc: `I think NFTs are bringing additional
                  value to some of the old web 2 issues that we had. Some of the recent
                  ones for example have been with events and ticketing to go to a concert or to go to a sports event in the
                  form of NFT, and then as an NFT holder, you could use that ticket as a collectible. For example, the
                  people that of NFT, and then as an NFT holder, you could use that ticket as a collectible. For example, the
                  people that effectively, now with NFT, this is something that could be replicated except you wouldn’t have to
                  worry about`, date: 'Nov 25, 2022'
              },
              {title: '', desc: '', date: ''},
              {title: '', desc: '', date: ''},
            ].map((item, index) => (
              <Stack pb={'44px'} key={index}>
                <Text fontWeight={'600'} fontSize={'25px'}>
                  {item.title}
                </Text>
                <Text fontWeight={'500'} fontSize={'15px'} color={'#7D7D7D'}>
                  {item.date}
                </Text>
                <Text fontWeight={'600'} fontSize={'15px'}>
                  {item.desc}
                </Text>
                <Stack h={'44px'}></Stack>
                <Divider/>
              </Stack>
            ))
          }
          <Stack align={"center"} pt={'48px'}>
            <Button w={'140px'} variant={'outline'} h={'34px'} borderRadius={'17px'} border={'2px solid'}
                    color={'#EAAA00'} borderColor={'#EAAA00'}>More</Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack h={'62px'}></Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack bgSize={'cover'} bgImage={"image/Blog/bg.jpg"} bgPosition={"center"}>
      <NavigationMobile/>
      <Stack px={'24px'} spacing={'24px'} pb={'24px'}>
        {
          [
            {image: '', title: '', desc: '', date: ''},
            {image: '', title: '', desc: '', date: ''},
            {image: '', title: '', desc: '', date: ''},
          ].map((item, index) => (
            <Stack key={index} w={'full'} h={'400px'} bg={"white"} borderRadius={'14px'} boxShadow={'0px 0px 45px 5px #E5E5E5'}>
              <Stack>
                <Stack h={'144px'}>

                </Stack>
                <Stack px={'44px'} py={'34px'}>
                  <Text fontWeight={'bold'} fontSize={'18px'}>Coinbase Announces Planned Listing of Tokens, Adds
                    $NEST</Text>
                  <Text fontSize={'13px'} fontWeight={'600'}>On Monday, Coinbase, a leading American cryptocurrency
                    exchange, announced that it would list six tokens </Text>
                  <Text fontSize={'13px'} fontWeight={'500'}>July 25, 2022</Text>
                </Stack>
              </Stack>
            </Stack>
          ))
        }
      </Stack>
      <Stack px={'24px'}>
        <Stack py={'35px'} spacing={'27px'} bg={'white'} borderRadius={'14px'}>
          <HStack spacing={0} px={'8px'}>
            <Stack textAlign={"center"} justify={"center"} fontSize={'15px'} w={'full'} h={'33px'} borderRadius={0} borderLeftRadius={'28px'} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>News</Text>
            </Stack>
            <Stack textAlign={"center"} justify={"center"} fontSize={'15px'} w={'full'} h={'33px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>Blogs</Text>
            </Stack>
            <Stack textAlign={"center"} justify={"center"} fontSize={'15px'} w={'full'} h={'33px'} borderRadius={0} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>Roundtable</Text>
            </Stack>
            <Stack textAlign={"center"} justify={"center"} fontSize={'15px'} w={'full'} h={'33px'} borderRadius={0} borderRightRadius={'28px'} border={'1px solid'} borderColor={'#EEEEEE'}>
              <Text fontWeight={'600'}>Transfer</Text>
            </Stack>
          </HStack>
          <Divider/>
          <Stack>
            <Stack px={'24px'} pb={'27px'} spacing={'22px'}>
              <Text fontWeight={"bold"} fontSize={'12.5px'}>What are the new NFT use cases beyond music and art?</Text>
              <Text color={'#878787'} fontSize={'10px'} fontWeight={'500'}>Nov 25, 2022</Text>
              <Text fontSize={'10px'} fontWeight={'600'}>I think NFTs are bringing additional value</Text>
              <Divider/>
            </Stack>
            <Stack px={'24px'} pb={'27px'} spacing={'22px'}>
              <Text fontWeight={"bold"} fontSize={'12.5px'}>What are the new NFT use cases beyond music and art?</Text>
              <Text color={'#878787'} fontSize={'10px'} fontWeight={'500'}>Nov 25, 2022</Text>
              <Text fontSize={'10px'} fontWeight={'600'}>I think NFTs are bringing additional value</Text>
              <Divider/>
            </Stack>
            <Stack px={'24px'} pb={'27px'} spacing={'22px'}>
              <Text fontWeight={"bold"} fontSize={'12.5px'}>What are the new NFT use cases beyond music and art?</Text>
              <Text color={'#878787'} fontSize={'10px'} fontWeight={'500'}>Nov 25, 2022</Text>
              <Text fontSize={'10px'} fontWeight={'600'}>I think NFTs are bringing additional value</Text>
              <Divider/>
            </Stack>
          </Stack>
          <Stack align={"center"}>
            <Button minH={'44px'} w={'140px'} borderRadius={'22px'} variant={'outline'}>
              More
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack h={'62px'}>
      </Stack>
      <FooterMobile/>
    </Stack>
  )

  if (isMobile) {
    return mobilePage
  } else {
    return (
      pcPage
    )
  }
}

export default Page