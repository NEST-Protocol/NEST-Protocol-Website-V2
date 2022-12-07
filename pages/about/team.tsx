import {
  Button,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const pcPage = (
    <Stack>
      <Navigation/>
      <Stack textAlign={"center"} py={'167px'}>
        <Text fontSize={'50px'} fontWeight={'bold'}>NEST DAO</Text>
        <Stack h ='100px'>

        </Stack>

        <HStack justifyContent={"space-between"} fontWeight={'bold'} fontSize={'18px'}>
          <Stack w={'250px'}>
            <Text>NEST Research Academy</Text>
            <Text>(NRA)</Text>
          </Stack>
          <Stack w={'250px'}>
            <Text>NEST Influence Block</Text>
            <Text>(NIB)</Text>
          </Stack>
          <Stack w={'250px'}>
            <Text>NEST Developer Alliance</Text>
            <Text>(NDA)</Text>
          </Stack>
          <Stack w={'250px'}>
            <Text>NEST Community</Text>
            <Text>(NC)</Text>
          </Stack>
        </HStack>

        <Stack pt={'150px'} pb={'65px'}>
          <Text fontSize={'33px'} fontWeight={'bold'}>Who is Behind NEST?</Text>
          <Text fontSize={'15px'} fontWeight={'bold'}>The NEST protocol is coordinated by the NEST DAO and has the following organisation:</Text>
        </Stack>

        <Stack px={'160px'} spacing={'138px'}>
          <Stack h={'440px'} bg={'red'} borderRadius={'20px'}>

          </Stack>

          <Stack h={'440px'} bg={'red'} borderRadius={'20px'}>

          </Stack>

          <Stack h={'440px'} bg={'red'} borderRadius={'20px'}>

          </Stack>

          <Stack h={'440px'} bg={'red'} borderRadius={'20px'}>

          </Stack>

        </Stack>


      </Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack>
      <NavigationMobile/>
      <Stack textAlign={"center"} align={"center"} pt={'120px'} pb={'160px'} spacing={'60px'}>
        <Heading fontSize={'25px'}>
          NEST DAO
        </Heading>
        <HStack spacing={'60px'}>
          <Stack w={'180px'}>
            <Text fontSize={'15px'} fontWeight={'bold'}>NEST<br/>Research Academy<br/>(NRA)</Text>
          </Stack>
          <Stack w={'180px'}>
            <Text fontSize={'15px'} fontWeight={'bold'}>NEST<br/>Influence Block<br/>(NIB)</Text>
          </Stack>
        </HStack>
        <HStack spacing={'60px'}>
          <Stack w={'180px'}>
            <Text fontSize={'15px'} fontWeight={'bold'}>NEST<br/>Developer Alliance<br/>(NDA)</Text>
          </Stack>
          <Stack w={'180px'}>
            <Text fontSize={'15px'} fontWeight={'bold'}>NEST<br/>Community<br/>(NC)</Text>
          </Stack>
        </HStack>
      </Stack>
      <Stack textAlign={"center"} align={"center"}>
        <Heading fontSize={'25px'}>Who is Behind NEST?</Heading>
        <Text fontSize={'12.5px'} fontWeight={'600'}>The NEST protocol is coordinated by the<br/>
          NEST DAO and has the following organisation:</Text>
      </Stack>
      <Stack px={'20px'} pt={'40px'} spacing={'20px'}>
        <Stack bg={'red'} borderRadius={'20px'} align={"center"} spacing={'20px'} py={'60px'} px={'20px'} textAlign={"center"}>
          <Text fontSize={'18px'} fontWeight={'600'}>
            NEST Research Academy (NRA)
          </Text>
          <Text fontSize={'12.5px'} fontWeight={'600'}>
            The NRA core is made up of practitioners
            from academic and industrial institutions
            in Europe and North America, with the goal
            of providing technical and theoretical
            support for new categories while also
            maintaining long-term relationships
            with Vitalik, the Ether Foundation,
            Coindesk, Consensus, and others.
          </Text>
          <Link color={'#00A0E9'}>
            NRA
          </Link>
        </Stack>
        <Stack bg={'red'} borderRadius={'20px'} align={"center"} spacing={'20px'} py={'60px'} px={'20px'} textAlign={"center"}>
          <Text fontSize={'18px'} fontWeight={'600'}>
            NEST Influence Block (NIB)
          </Text>
          <Text fontSize={'12.5px'} fontWeight={'600'}>
            The main goal of NIB is to spread the new concept, category,and vision of NEST, provide the public with narrative logic and communication basis, and enhance the brand and influence of NEST, which includes holding various media campaigns, relationships with Vitalik, the Ether Foundation, constructing Twitter, TikTok, Telegram, Discord, and so on, as well as grant and ecological fund management.
          </Text>
          <HStack justifyContent={"space-around"} w={'full'}>
            <Link color={'#00A0E9'}>
              NIB
            </Link>
            <Link color={'#00A0E9'}>
              NEST Roundtable
            </Link>
          </HStack>
        </Stack>
        <Stack bg={'red'} borderRadius={'20px'} align={"center"} spacing={'20px'} py={'60px'} px={'20px'} textAlign={"center"}>
          <Text fontSize={'18px'} fontWeight={'600'}>
            NEST Developer Alliance (NDA)
          </Text>
          <Text fontSize={'12.5px'} fontWeight={'600'}>
            NDA is in charge of the development of core
            protocols and peripheral applications, as well
            as the creation of developer communities,
            such as future hackathons.
          </Text>
          <Link color={'#00A0E9'}>
            Developer Docs
          </Link>
        </Stack>
        <Stack bg={'red'} borderRadius={'20px'} align={"center"} spacing={'20px'} py={'60px'} px={'20px'} textAlign={"center"}>
          <Text fontSize={'18px'} fontWeight={'600'}>
            NEST Community
          </Text>
          <Text fontSize={'12.5px'} fontWeight={'600'}>
            The NEST Community is primarily responsible
            for the community&apos;s growth, the promotion of
            consensus, and the promotion and
            management of the coin-holding population,
            with the goal of becoming the industry&apos;s
            largest distributed community.
          </Text>
          <HStack spacing={'30px'}>
            <Button w={'90px'} variant={'outline'} color={'#00A0E9'} borderColor={'#00A0E9'}>
            Twitter
            </Button>
            <Button w={'90px'} variant={'outline'} color={'#00A0E9'} borderColor={'#00A0E9'}>
            Telegram
            </Button>
          </HStack>
          <HStack spacing={'30px'}>
            <Button w={'90px'} variant={'outline'} color={'#00A0E9'} borderColor={'#00A0E9'}>
              Discord
            </Button>
            <Button w={'90px'} variant={'outline'} color={'#00A0E9'} borderColor={'#00A0E9'}>
              Github
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Stack h={'62px'}></Stack>
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