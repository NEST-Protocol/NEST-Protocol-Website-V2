import {Heading, HStack, Stack, useMediaQuery, chakra, Text, Link} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import {ChevronRightIcon} from "@chakra-ui/icons";
import Head from "next/head";

const Page = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const title = "NEST Research Academy (NRA) | NEST Protocol";
  const description = "NEST Research Academy (NRA), initialized by the NEST protocol, aims to boost theoretical and applied research in related fields such as blockchain, finance, economics, game theory, machine learning, computer science, and software engineering and helps to spread this knowledge to the public.";

  const SEO = (
    <Head>
      <title>{title}</title>
      <meta name="og:title" content={title}/>
      <meta name="twitter:title" content={title}/>
      <meta name="description" content={description}/>
      <meta name="og:description" content={description}/>
      <meta name="twitter:description" content={description}/>
    </Head>
  )

  const pcPage = (
    <Stack bgImage={'/image/nra/bg.jpg'} bgPosition={"center"} bgSize={'cover'} minH={'100vh'}>
      {SEO}
      <Navigation/>
      <Stack w={'full'} align={"center"} px={'45px'}>
        <Stack maxW={'1600px'} w={'full'}>
          <Stack align={"center"} spacing={'48px'} pb={'210px'}>
            <HStack color={'#00A0E9'} fontSize={'15px'} fontWeight={'600'} w={'full'}>
              <Link href={'/about/team/'}>About</Link>
              <ChevronRightIcon/>
              <Link href={'/about/nra/'}>NRA</Link>
            </HStack>
            <Heading pt={'48px'} fontSize={'50px'}>NEST Research Academy (NRA)</Heading>
            <Text textAlign={"center"} fontSize={'18px'} fontWeight={'bold'}>NEST Research Academy (NRA), initialized
              by
              the NEST protocol,<br/>aims to boost theoretical and applied research in related<br/>fields such as
              blockchain,finance, economics, game theory,<br/>machine learning, computer science,and software
              engineering and<br/>helps to spread this knowledge to the public.</Text>
          </Stack>
          <HStack justifyContent={"space-between"} spacing={'44px'}>
            <Stack bg={'white'} py={'134px'} h={'440px'} borderRadius={'20px'} w={'full'} align={"center"}>
              <Stack>
                <Text fontSize={'25px'} fontWeight={600}>Promote Industry<br/>Communication</Text>
                <Text fontSize={'15px'} fontWeight={600}>NRA’s research activities include but are not<br/>limited to
                  writing research papers published in<br/>peer-reviewed international academic journals, <br/>writing
                  research reports for the public and <br/>investors,and organizing conferences,<br/>workshops,
                  webinars, and AMA.</Text>
              </Stack>
            </Stack>
            <Stack bg={'white'} py={'134px'} h={'440px'} borderRadius={'20px'} w={'full'} align={"center"}>
              <Stack>
                <Text fontSize={'25px'} fontWeight={600}>Facilitate Academic<br/>Exploration</Text>
                <Text fontSize={'15px'} fontWeight={600}>NRA provides funding and job opportunities for<br/>researchers
                  in different stages. NRA and NEST<br/>feel honored if the support helps scholars make<br/>breakthrough
                  progress in academics and achieve<br/>significant contributions to human society from<br/>various
                  perspectives.</Text>
              </Stack>
            </Stack>
          </HStack>
          <Stack align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'} pt={'138px'}>Funding Opportunity</Heading>
            <Stack w={'full'}>
              <Stack bg={'white'} align={"center"} textAlign={"center"} py={'130px'} borderRadius={'20px'}>
                <chakra.img src={'/image/nra/04-icon-01@2x.png'} w={'105px'} alt={''} mb={'26px'}/>
                <Text fontSize={'15px'} fontWeight={'600'}>NRA welcomes research in fields such as blockchain,
                  finance, <br/>economics, game theory, machine
                  learning, computer science, and software engineering.<br/>Those interested, please send your
                  research
                  proposal (maximum 10 pages) to <br/><Link href={'mailto:nra@nestprotocol.org'} isExternal
                                                            color={'#00A0E9'}>nra@nestprotocol.org</Link></Text>
              </Stack>
            </Stack>

          </Stack>
          <Stack align={"center"} spacing={'48px'}>
            <Heading fontSize={'50px'} pt={'138px'}>Vacant Position</Heading>
            <Stack w={'full'}>
              <Stack bg={'white'} align={"center"} textAlign={"center"} py={'130px'} borderRadius={'20px'}>
                <chakra.img src={'/image/nra/04-icon-02@2x.png'} w={'114px'} alt={''} mb={'26px'}/>
                <Text fontSize={'15px'} fontWeight={'600'}>NRA welcomes applicants to researchers of all levels.<br/>NRA
                  evaluates the work of its
                  researchers in a result-oriented manner with flexibility in terms<br/>of working location and hours.
                  The salary is decided case by case.<br/>Those interested, please send your academic CV
                  to<br/><Link href={'mailto:nra@nestprotocol.org'}
                               color={'#00A0E9'}>nra@nestprotocol.org</Link></Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack h={'138px'}/>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack bgImage={'/image/nra/bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      {SEO}
      <NavigationMobile/>
      <Stack align={"center"} pt={'115px'} pb={'210px'}>
        <Text fontSize={'25px'} fontWeight={'bold'}>NEST Research<br/>Academy (NRA)</Text>
        <Text textAlign={"center"} fontSize={'12.5px'} fontWeight={'bold'} pt={'20px'}>NEST Research Academy (NRA),
          initialized by<br/>
          the NEST protocol, aims to boost theoretical<br/>
          and applied research in related fields such<br/>
          as blockchain, finance, economics, game<br/>
          theory, machine learning, computer science,<br/>
          and software engineering and helps to spread<br/>
          this knowledge to the public. </Text>
      </Stack>
      <Stack bg={'rgba(255,255,255, 0.7)'} px={'28px'} py={'66px'}>
        <Text fontSize={'16px'} fontWeight={'600'}>Promote Industry<br/>Communication</Text>
        <Text fontSize={'12.5px'} fontWeight={'600'}>NRA’s research activities include but are<br/>
          not limited to writing research papers<br/>
          published in peer-reviewed international<br/>
          academic journals, writing research reports<br/>
          for the public and investors,and organizing<br/>
          conferences, workshops, webinars, and AMA.</Text>
      </Stack>
      <Stack h={'30px'}/>
      <Stack bg={'rgba(255,255,255, 0.7)'} px={'28px'} py={'66px'}>
        <Text fontSize={'16px'} fontWeight={'600'}>Facilitate Academic<br/>Exploration</Text>
        <Text fontSize={'12.5px'} fontWeight={'600'}>NRA provides funding and job opportunities<br/>
          for researchers in different stages. NRA and<br/>
          NEST feel honored if the support helps<br/>
          scholars make breakthrough progress in<br/>
          academics and achieve significant<br/>
          contributions to human society from<br/>
          various perspectives.</Text>
      </Stack>
      <Stack pt={'54px'}>
        <Text fontSize={'25px'} fontWeight={'bold'} textAlign={"start"} px={'24px'}>Funding Opportunity</Text>
        <Stack px={'24px'} pt={'30px'}>
          <Stack align={"center"} bg={'rgba(255,255,255, 0.7)'} py={'100px'} borderRadius={'20px'}>
            <chakra.img src={'/image/nra/04-icon-01@2x.png'} pb={'40px'} w={'85px'}/>
            <Text fontSize={'12.5px'} fontWeight={'600'} textAlign={"center"}>NRA welcomes research in fields
              such<br/>
              as blockchain, finance, economics, game<br/>
              theory, machine learning, computer<br/>
              science, and software engineering.<br/>
              Those interested, please send your<br/>
              research proposal (maximum 10 pages) to<br/>
            </Text>
            <Link fontSize={'12.5px'} fontWeight={'600'} textAlign={"center"} color={'#00A0E9'}
                  href={'mailto:nra@nestprotocol.org'}
            >nra@nestprotocol.org</Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack pt={'62px'}>
        <Text fontSize={'25px'} fontWeight={'bold'} textAlign={"start"} px={'24px'}>Vacant Positions</Text>
        <Stack px={'24px'} pt={'30px'}>
          <Stack align={"center"} bg={'rgba(255,255,255, 0.7)'} py={'100px'} borderRadius={'20px'}>
            <chakra.img src={'/image/nra/04-icon-02@2x.png'} pb={'40px'} w={'85px'}/>
            <Text fontSize={'12.5px'} fontWeight={'600'} textAlign={"center"}>NRA welcomes applicants to researchers<br/>
              of all levels. NRA evaluates the work of<br/>
              its researchers in a result-oriented<br/>
              manner with flexibility in terms<br/>
              of working location and hours.<br/>
              The salary is decided case by case.<br/>
              Those interested,<br/>
              please send your academic CV to<br/>
            </Text>
            <Link fontSize={'12.5px'} fontWeight={'600'} textAlign={"center"} href={'mailto:nra@nestprotocol.org'}
                  color={'#00A0E9'}>nra@nestprotocol.org</Link>
          </Stack>
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