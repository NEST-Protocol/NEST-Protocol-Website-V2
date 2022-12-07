import {
  Button,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useMediaQuery, chakra
} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const pcPage = (
    <Stack bgImage={'/image/Team/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      <Navigation/>
      <Stack textAlign={"center"} py={'167px'} px={'45px'}>
        <Text fontSize={'50px'} fontWeight={'bold'}>NEST DAO</Text>
        <Stack h='100px'>

        </Stack>

        <HStack justifyContent={"space-between"} fontWeight={'bold'} fontSize={'18px'}>
          <Stack w={'250px'}>
            <chakra.img src={'/image/Team/NRA.svg'} h={'37px'}/>
            <Text>NEST Research Academy<br/>(NRA)</Text>
          </Stack>
          <Stack w={'250px'}>
            <chakra.img src={'/image/Team/NIB.svg'} h={'37px'}/>
            <Text>NEST Influence Block<br/>(NIB)</Text>
          </Stack>
          <Stack w={'250px'}>
            <chakra.img src={'/image/Team/NDA.svg'} h={'37px'}/>
            <Text>NEST Developer Alliance<br/>(NDA)</Text>
          </Stack>
          <Stack w={'250px'}>
            <chakra.img src={'/image/Team/NC.svg'} h={'37px'}/>
            <Text>NEST Community<br/>(NC)</Text>
          </Stack>
        </HStack>

        <Stack pt={'150px'} pb={'65px'}>
          <Text fontSize={'33px'} fontWeight={'bold'}>Who is Behind NEST?</Text>
          <Text fontSize={'15px'} fontWeight={'bold'}>The NEST protocol is coordinated by the NEST DAO and has the
            following organisation:</Text>
        </Stack>

        <Stack px={'160px'} spacing={'138px'}>
          <Stack py={'74px'} bg={'rgba(255,255,255,0.84)'} borderRadius={'20px'}>
            <Stack pb={'20px'}>
              <chakra.img src={'/image/Team/NRA_pic.png'} h={'100px'} objectFit={'contain'}/>
            </Stack>
            <Text fontSize={'25px'} fontWeight={'600'}>NEST Research Academy (NRA)</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>The NRA core is made up of practitioners from academic and
              industrial<br/>
              institutions in Europe and North America, with the goal of providing<br/>
              technical and theoretical support for new categories while also<br/>
              maintaining long-term relationships with Vitalik, the Ether Foundation,<br/>
              Coindesk, Consensus, and others.
            </Text>
            <Link fontSize={'15px'} fontWeight={'600'} color={'#00A0E9'} pt={'10px'}>NRA</Link>
          </Stack>

          <Stack py={'74px'} bg={'rgba(255,255,255,0.84)'} borderRadius={'20px'}>
            <Stack pb={'20px'}>
              <chakra.img src={'/image/Team/NIB_pic.png'} h={'100px'} objectFit={'contain'}/>
            </Stack>
            <Text fontSize={'25px'} fontWeight={'600'}>NEST Influence Block (NIB)</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>The main goal of NIB is to spread the new concept, category,and
              vision of NEST, <br/>
              provide the public with narrative logic and communication basis, <br/>
              various media campaigns, relationships with Vitalik, the Ether Foundation, <br/>
              constructing Twitter, TikTok, Telegram, Discord, and so on,<br/>
              as well as grant and ecological fund management.
            </Text>
            <HStack pt={'10px'} justify={"center"} spacing={'68px'}>
              <Link fontSize={'15px'} fontWeight={'600'} color={'#00A0E9'}>News</Link>
              <Link fontSize={'15px'} fontWeight={'600'} color={'#00A0E9'}>NEST Roundtable</Link>
            </HStack>

          </Stack>

          <Stack py={'74px'} bg={'rgba(255,255,255,0.84)'} borderRadius={'20px'}>
            <Stack pb={'20px'}>
              <chakra.img src={'/image/Team/NDA_pic.png'} h={'100px'} objectFit={'contain'}/>
            </Stack>
            <Text fontSize={'25px'} fontWeight={'600'}>NEST Developer Alliance (NDA)</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>NDA is in charge of the development of core protocols and
              peripheral<br/>
              applications, as well as the creation of developer communities,<br/>
              technical and theoretical support for new categories while also<br/>
              such as future hackathons.
            </Text>
            <Link fontSize={'15px'} fontWeight={'600'} color={'#00A0E9'} pt={'10px'}>Developer Docs</Link>
          </Stack>

          <Stack py={'74px'} bg={'rgba(255,255,255,0.84)'} borderRadius={'20px'}>
            <Stack pb={'20px'}>
              <chakra.img src={'/image/Team/NC_pic.png'} h={'100px'} objectFit={'contain'}/>
            </Stack>
            <Text fontSize={'25px'} fontWeight={'600'}>NEST Community</Text>
            <Text fontSize={'15px'} fontWeight={'600'}>The NEST Community is primarily responsible for the community&apos;s
              growth,<br/>
              the promotion of consensus, and the promotion and management<br/>
              of the coin-holding population, with the goal of becoming the industry&apos;s<br/>
              largest distributed community.
              <br/>
              <br/>
              Join NEST Community
            </Text>
            <HStack justify={"center"} pt={'25px'} spacing={'28px'}>
              <Button variant={'outline'} borderColor={'#00A0E9'} color={'#00A0E9'}>
                Twitter
              </Button>
              <Button variant={'outline'} borderColor={'#00A0E9'} color={'#00A0E9'}>
                Telegram
              </Button>
              <Button variant={'outline'} borderColor={'#00A0E9'} color={'#00A0E9'}>
                Discord
              </Button>
              <Button variant={'outline'} borderColor={'#00A0E9'} color={'#00A0E9'}>
                Github
              </Button>
            </HStack>
          </Stack>

        </Stack>


      </Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack bgImage={'/image/Team/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      <NavigationMobile/>
      <Stack textAlign={"center"} align={"center"} pt={'120px'} pb={'160px'} spacing={'60px'}>
        <Heading fontSize={'25px'}>
          NEST DAO
        </Heading>
        <HStack spacing={'60px'}>
          <Stack w={'180px'}>
            <chakra.img src={'/image/Team/NRA.svg'} h={'30px'}/>
            <Text fontSize={'15px'} fontWeight={'bold'}>NEST<br/>Research Academy<br/>(NRA)</Text>
          </Stack>
          <Stack w={'180px'}>
            <chakra.img src={'/image/Team/NIB.svg'} h={'30px'}/>
            <Text fontSize={'15px'} fontWeight={'bold'}>NEST<br/>Influence Block<br/>(NIB)</Text>
          </Stack>
        </HStack>
        <HStack spacing={'60px'}>
          <Stack w={'180px'}>
            <chakra.img src={'/image/Team/NDA.svg'} h={'30px'}/>
            <Text fontSize={'15px'} fontWeight={'bold'}>NEST<br/>Developer Alliance<br/>(NDA)</Text>
          </Stack>
          <Stack w={'180px'}>
            <chakra.img src={'/image/Team/NC.svg'} h={'30px'}/>
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
        <Stack bg={'rgba(255,255,255,0.7)'} borderRadius={'20px'} align={"center"} spacing={'20px'} py={'60px'} px={'20px'}
               textAlign={"center"}>
          <Stack pb={'50px'}>
            <chakra.img src={'/image/Team/NRA_pic.png'} h={'70px'}/>
          </Stack>
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
        <Stack bg={'rgba(255,255,255,0.7)'} borderRadius={'20px'} align={"center"} spacing={'20px'} py={'60px'} px={'20px'}
               textAlign={"center"}>
          <Stack pb={'50px'}>
            <chakra.img src={'/image/Team/NIB_pic.png'} h={'70px'}/>
          </Stack>
          <Text fontSize={'18px'} fontWeight={'600'}>
            NEST Influence Block (NIB)
          </Text>
          <Text fontSize={'12.5px'} fontWeight={'600'}>
            The main goal of NIB is to spread the new concept, category,and vision of NEST, provide the public with
            narrative logic and communication basis, and enhance the brand and influence of NEST, which includes holding
            various media campaigns, relationships with Vitalik, the Ether Foundation, constructing Twitter, TikTok,
            Telegram, Discord, and so on, as well as grant and ecological fund management.
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
        <Stack bg={'rgba(255,255,255,0.7)'} borderRadius={'20px'} align={"center"} spacing={'20px'} py={'60px'} px={'20px'}
               textAlign={"center"}>
          <Stack pb={'50px'}>
            <chakra.img src={'/image/Team/NDA_pic.png'} h={'70px'}/>
          </Stack>
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
        <Stack bg={'rgba(255,255,255,0.7)'} borderRadius={'20px'} align={"center"} spacing={'20px'} py={'60px'} px={'20px'}
               textAlign={"center"}>
          <Stack pb={'50px'}>
            <chakra.img src={'/image/Team/NC_pic.png'} h={'70px'}/>
          </Stack>
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