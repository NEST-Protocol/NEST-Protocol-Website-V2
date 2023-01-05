import {
  Heading,
  Stack,
  useMediaQuery,
  Text,
  HStack,
  Button,
  Wrap,
  WrapItem,
  Spacer, Link, chakra
} from "@chakra-ui/react";
import Head from "next/head";
import Navigation from "../../components/Navigation";
import NavigationMobile from "../../components/NavigationMobile";
import Footer from "../../components/Footer";
import FooterMobile from "../../components/FooterMobile";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Bug = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const title = "Bug Bounty Program";
  const description = "Earn up to $200,000 NEST for finding related bugs affecting the NEST Protocol.";

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
    <Stack bgImage={'/image/Bug/CyberInk_bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      {SEO}
      <Navigation/>
      <Stack textAlign={"center"} align={"center"} spacing={'30px'} py={'204px'}>
        <Heading fontSize={'50px'}>Bug Bounty Program</Heading>
        <Text fontSize={'18px'} fontWeight={'bold'}>Earn up to $200,000 NEST for finding related<br/>bugs affecting the
          NEST Protocol.</Text>
        <HStack spacing={'48px'}>
          <Button minW={'160px'} as={Link} href={'https://forms.gle/1wtob3WWBJwYT9PE7'} isExternal>
            Submit a bug
          </Button>
          <Button minW={'160px'} as={Link} href={'#rules'}>
            Read rules
          </Button>
        </HStack>
      </Stack>
      <Stack textAlign={"center"} align={"center"} bg={'rgba(255,255,255, 0.8)'} py={'110px'}>
        <Heading fontSize={'50px'} pb={'30px'}>In Scope</Heading>
        <Text fontSize={'25px'} fontWeight={'600'} pb={'36px'}>The list is not limited to the following submissions<br/>but
          it gives an overview of what issues we care about:</Text>
        <Text textAlign={"left"} fontWeight={'600'} fontSize={'15px'} pl={'320px'}>
          <ul>
            <li>Remote Code Execution</li>
            <li>Significant manipulation of the account balance</li>
            <li>Leakage of sensitive data</li>
            <li>Theft of privileged information</li>
            <li>Other vulnerability with clear potential for financial or data loss</li>
            <li>Vulnerabilities that affect the stability, connectivity or<br/>availability of wallet implementations</li>
            <li>Vulnerabilities that disrupt the consensus result and performance</li>
            <li>Unauthorized movement of funds, access to private keys</li>
            <li>Transaction origin spoofing</li>
          </ul>
        </Text>
      </Stack>
      <Stack textAlign={"center"} align={"center"} py={'138px'}>
        <Heading fontSize={'50px'}>Submit a bug</Heading>
        <Text fontSize={'25px'} fontWeight={'600'}>For each valid bug you find you will earn rewards.<br/>
          The quantity of rewards awarded will vary depending on Severity.<br/>
          The severity is calculated according to the OWASP risk<br/>
          rating model based on Impact on the NEST Network and Likelihood.<br/>
        </Text>
        <Link href={'https://owasp.org/www-community/OWASP_Risk_Rating_Methodology'} isExternal fontSize={'15px'}
              fontWeight={'600'} color={'#00A0E9'}>View OWASP method <ChevronRightIcon/></Link>
        <br/>
        <Text fontSize={'15px'} fontWeight={'600'}>Higher rewards will be awarded based on:</Text>
        <br/>
        <Text fontSize={'15px'} fontWeight={'bold'}>Quality of description:</Text>
        <Text fontSize={'15px'} fontWeight={'600'}>Higher rewards are paid for clear, well-written submissions.</Text>
        <br/>
        <Text fontSize={'15px'} fontWeight={'bold'}>Quality of reproducibility:</Text>
        <Text fontSize={'15px'} fontWeight={'600'}>A Proof of Concept (POC) must be included to be eligible for rewards.<br/>
          Please include test code, scripts and detailed instructions.<br/>
          The easier it is for us to reproduce and verify the vulnerability, the higher the reward.
        </Text>
        <br/>
        <Text fontSize={'15px'} fontWeight={'bold'}>Quality of fix, if included:</Text>
        <Text fontSize={'15px'} fontWeight={'600'}>Higher rewards are paid for submissions with<br/>
          clear description of how to fix the issue.</Text>

        <Wrap w={'1000px'} justify={"center"} spacing={'44px'} py={'44px'}>
          <WrapItem>
            <Stack w={'380px'} h={'340px'} bg={'rgba(255,255,255,0.7)'} borderRadius={'20px'} overflow={"hidden"}
                   boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'0'} border={'1px solid #EEEEEE'}>
              <Stack bg={'#EEEEEE'} minH={'44px'} justify={"center"}>
                <Text fontSize={'18px'} fontWeight={'bold'}>UP TO $2,000 NEST</Text>
              </Stack>
              <Stack p={'30px'} textAlign={"start"} spacing={0} h={'full'}>
                <Text fontSize={'18px'} fontWeight={'bold'}>Low</Text>
                <Text fontSize={'13px'} fontWeight={'600'}>UP TO $2,000 NEST</Text>
                <br/>
                <Text fontSize={'13px'} fontWeight={'600'}>UP TO 20,000 POINTS</Text>
                <br/>
                <Text fontSize={'13px'} fontWeight={'600'}>SEVERITY</Text>
                <Text fontSize={'15px'} fontWeight={'600'} textAlign={"left"}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px' }}>
                    <li>Low impact, medium likelihood</li>
                    <li>Medium impact, low likelihood</li>
                  </ul>
                </Text>
                <Spacer/>
                <Link href={'https://forms.gle/1wtob3WWBJwYT9PE7'} isExternal fontSize={'15px'} fontWeight={'600'}
                      color={'#00A0E9'}>Submit low risk bug <ChevronRightIcon/></Link>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack w={'380px'} h={'340px'} bg={'rgba(255,255,255,0.7)'} borderRadius={'20px'} overflow={"hidden"}
                   boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'0'} border={'1px solid #EEEEEE'}>
              <Stack bg={'#EEEEEE'} minH={'44px'} justify={"center"}>
                <Text fontSize={'18px'} fontWeight={'bold'}>UP TO $10,000 NEST</Text>
              </Stack>
              <Stack p={'30px'} textAlign={"start"} spacing={0} h={'full'}>
                <Text fontSize={'18px'} fontWeight={'bold'}>Medium</Text>
                <Text fontSize={'13px'} fontWeight={'600'}>UP TO $10,000 NEST</Text>
                <br/>
                <Text fontSize={'13px'} fontWeight={'600'}>UP TO 100,000 POINTS</Text>
                <br/>
                <Text fontSize={'13px'} fontWeight={'600'}>SEVERITY</Text>
                <Text fontSize={'15px'} fontWeight={'600'} textAlign={"left"}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px' }}>
                    <li>High impact, low likelihood</li>
                    <li>Medium impact, medium likelihood</li>
                    <li>Low impact, high likelihood</li>
                  </ul>
                </Text>
                <Spacer/>
                <Link href={'https://forms.gle/1wtob3WWBJwYT9PE7'} isExternal fontSize={'15px'} fontWeight={'600'}
                      color={'#00A0E9'}>Submit medium risk bug <ChevronRightIcon/></Link>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack w={'380px'} h={'340px'} bg={'rgba(255,255,255,0.7)'} borderRadius={'20px'} overflow={"hidden"}
                   boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'0'} border={'1px solid #EEEEEE'}>
              <Stack bg={'#EEEEEE'} minH={'44px'} justify={"center"}>
                <Text fontSize={'18px'} fontWeight={'bold'}>UP TO $50,000 NEST</Text>
              </Stack>
              <Stack p={'30px'} textAlign={"start"} spacing={0} h={'full'}>
                <Text fontSize={'18px'} fontWeight={'bold'}>High</Text>
                <Text fontSize={'13px'} fontWeight={'600'}>UP TO $50,000 NEST</Text>
                <br/>
                <Text fontSize={'13px'} fontWeight={'600'}>UP TO 500,000 POINTS</Text>
                <br/>
                <Text fontSize={'13px'} fontWeight={'600'}>SEVERITY</Text>
                <Text fontSize={'15px'} fontWeight={'600'} textAlign={"left"}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px' }}>
                    <li>High impact, medium likelihood</li>
                    <li>Medium impact, high likelihood</li>
                  </ul>
                </Text>
                <Spacer/>
                <Link href={'https://forms.gle/1wtob3WWBJwYT9PE7'} isExternal fontSize={'15px'} fontWeight={'600'}
                      color={'#00A0E9'}>Submit high risk bug <ChevronRightIcon/></Link>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack w={'380px'} h={'340px'} bg={'rgba(255,255,255,0.7)'} borderRadius={'20px'} overflow={"hidden"}
                   boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'0'} border={'1px solid #EEEEEE'}>
              <Stack bg={'#EEEEEE'} minH={'44px'} justify={"center"}>
                <Text fontSize={'18px'} fontWeight={'bold'}>UP TO $200,000 NEST</Text>
              </Stack>
              <Stack p={'30px'} textAlign={"start"} spacing={0} h={'full'}>
                <Text fontSize={'18px'} fontWeight={'bold'}>Low</Text>
                <Text fontSize={'13px'} fontWeight={'600'}>UP TO $200,000 NEST</Text>
                <br/>
                <Text fontSize={'13px'} fontWeight={'600'}>UP TO 2000,000 POINTS</Text>
                <br/>
                <Text fontSize={'13px'} fontWeight={'600'}>SEVERITY</Text>
                <Text fontSize={'15px'} fontWeight={'600'} textAlign={"left"}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px' }}>
                    <li>High impact, high likelihood</li>
                  </ul>
                </Text>
                <Spacer/>
                <Link href={'https://forms.gle/1wtob3WWBJwYT9PE7'} isExternal fontSize={'15px'} fontWeight={'600'}
                      color={'#00A0E9'}>Submit critical risk bug <ChevronRightIcon/></Link>
              </Stack>
            </Stack>
          </WrapItem>
        </Wrap>
      </Stack>
      <Stack textAlign={"center"} bg={'rgba(255,255,255,0.8)'} py={'112px'} align={"center"}>
        <Heading fontSize={'50px'} id={'rules'}>Program Rules</Heading>
        <Text fontSize={'25px'} fontWeight={'600'}>The bug bounty program is an experimental and<br/>
          discretionary rewards program for our NEST<br/>
          community to encourage and reward those who are<br/>
          helping to improve the platform. We ask that you<br/>
          follow these rules of engagement while testing<br/>
          and participating in the Bug Bounty Program:
        </Text>
        <Text textAlign={"start"} fontWeight={'600'} fontSize={'15px'} pt={'36px'}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <li style={{fontWeight: "bold"}}>Don't attempt to access another user's account:</li>
          You can do cross-account testing, but only use accounts<br/>
          that you own/control.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Use the testnet for testing purposes:</li>
          The mainnet is for production use and should not be used<br/>
          for testing.
          <br/>
          <br/>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <li style={{fontWeight: "bold"}}>Do not publicly disclose a bug before it's been fixed:</li>
          Exposing a bug or vulnerability before NEST is able to remediate<br/>
          could directly harm the NEST network and the community, and<br/>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          will result in not receiving a reward for the bug's discovery.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Do not impact other users with your testing:</li>
          This includes testing for vulnerabilities by impacting an account<br/>
          you do not own.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Never attempt non-technical attacks:</li>
          Social engineering, phishing, or physical attacks against NEST<br/>
          employees, users, or the network infrastructure is not allowed.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Please provide detailed reports with reproducible steps:</li>
          If the report is not detailed enough to reproduce the issue,<br/>
          the issue will not be eligible for a reward.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Submit one vulnerability per report:</li>
          Unless you need to chain vulnerabilities to provide impact.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Duplicates:</li>
          We only award the first report that was received (provided that it<br/>
          can be fully reproduced).
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Multiple vulnerabilities caused by an underlying issue:</li>
          Only one bounty will be rewarded.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Within three working days after submitting the vulnerability, <br/>
            the staff will confirm the received vulnerability and deal with it.<br/>
            After processing, we will give relevant conclusions and contact<br/>
            you by email to send you rewards. If the vulnerability is ignored,<br/>
            we will also explain the relevant reasons and give feedback to you.
          </li>
          <br/>
          <li style={{fontWeight: "bold"}}>
            NEST reserves the ultimate decision and will determine at its<br/>
            discretion whether a vulnerability is eligible for a reward and the<br/>
            amount of the award depending on severity.
          </li>
        </Text>
      </Stack>
      {/*<Stack textAlign={"center"} align={"center"} py={'138px'}>*/}
      {/*  <Stack py={'94px'} bg={'rgba(255,255,255,0.7)'} borderRadius={'20px'} w={'1000px'}>*/}
      {/*    <Heading fontSize={'50px'}>Bug Bounty leaderboard</Heading>*/}
      {/*  </Stack>*/}
      {/*</Stack>*/}
      <Stack textAlign={"center"} py={'138px'} align={"center"} spacing={'44px'}>
        <Heading fontSize={'50px'}>Frequently asked questions</Heading>
        <Stack textAlign={"start"} bg={"rgba(255,255,255,0.8)"} borderRadius={'20px'} py={'76px'} w={'1000px'}
               px={'100px'}>
          <HStack spacing={'35px'} alignItems={"start"}>
            <chakra.img src={'/svg/icon_Question.svg'} w={'36px'} />
            <Stack>
              <Text fontSize={'17px'} fontWeight={'bold'}>I reported an issue/vulnerability, how long does it take to get a
                response?</Text>
              <Text fontSize={'13px'} fontWeight={'600'}>Within three working days after submitting the vulnerability, the
                staff will confirm the received
                vulnerability and deal with it. After processing, we will give relevant conclusions and contact you
                by email, and ask you for the wallet address and issue corresponding rewards; if the vulnerability
                is ignored, we will also explain the relevant reasons and give feedback to you.
              </Text>
            </Stack>
          </HStack>
        </Stack>
        <Stack textAlign={"start"} bg={"rgba(255,255,255,0.8)"} borderRadius={'20px'} py={'76px'} w={'1000px'}
               px={'100px'}>
          <HStack spacing={'35px'} alignItems={"start"}>
            <chakra.img src={'/svg/icon_Question.svg'} w={'36px'} />
            <Stack>
              <Text fontSize={'17px'} fontWeight={'bold'}>Is the bug bounty program is time limited?</Text>
              <Text fontSize={'13px'} fontWeight={'600'}>No.</Text>
            </Stack>
          </HStack>
        </Stack>
        <Stack textAlign={"start"} bg={"rgba(255,255,255,0.8)"} borderRadius={'20px'} py={'76px'} w={'1000px'}
               px={'100px'}>
          <HStack spacing={'35px'} alignItems={"start"}>
            <chakra.img src={'/svg/icon_Question.svg'} w={'36px'} />
            <Stack>
              <Text fontSize={'17px'} fontWeight={'bold'}>I want to be anonymous / I do not want my name on the leader
                board.</Text>
              <Text fontSize={'13px'} fontWeight={'600'}>You can do this, but it might make you ineligble for
                rewards.</Text>
            </Stack>
          </HStack>
        </Stack>
        <Stack textAlign={"start"} bg={"rgba(255,255,255,0.8)"} borderRadius={'20px'} py={'76px'} w={'1000px'}
               px={'100px'}>
          <HStack spacing={'35px'} alignItems={"start"}>
            <chakra.img src={'/svg/icon_Question.svg'} w={'36px'} />
            <Stack>
              <Text fontSize={'17px'} fontWeight={'bold'}>How are bounties paid out?</Text>
              <Text fontSize={'13px'} fontWeight={'600'}>After the submission is verified, we will pay out the reward in
                NEST within seven working days. We will contact you by email and ask you to provide your BEP20/ERC20 wallet
                address.</Text>
            </Stack>
          </HStack>
        </Stack>
        <Stack textAlign={"start"} bg={"rgba(255,255,255,0.8)"} borderRadius={'20px'} py={'76px'} w={'1000px'}
               px={'100px'}>
          <HStack spacing={'35px'} alignItems={"start"}>
            <chakra.img src={'/svg/icon_Question.svg'} w={'36px'} />
            <Stack>
              <Text fontSize={'17px'} fontWeight={'bold'}>What do points in the leaderboard do?</Text>
              <Text fontSize={'13px'} fontWeight={'600'}>The scores are given by our professional technical team through
                strict review, and we will issue corresponding bonuses according to the scores of the vulnerability you
                submit.</Text>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
      <Stack pb={'138px'} align={"center"}>
        <Stack textAlign={"center"} align={"center"} py={'105px'} bg={'rgba(255,255,255, 0.84)'} w={'1000px'} borderRadius={'20px'}>
          <chakra.img src={'/image/Bug/icon_contact_us.png'} h={'80px'} mb={'10px'}/>
          <Text fontSize={'25px'} fontWeight={'600'}>Contact us</Text>
          <Text fontSize={'15px'} fontWeight={'600'}>If you have any questions, or simply would want to chat with
            us,<br/>
            please do through one of our official channels, or email <br/>
            <Link color={'#00A0E9'} href={'mailto:nestprotocoldao@gmail.com'}>nestprotocoldao@gmail.com</Link> to ask
            us.</Text>
          <HStack spacing={'28px'} pt={'20px'}>
            <Button variant={'outline'} color={'#00A0E9'} borderColor={'#00A0E9'} as={Link}
                    href={'https://github.com/NEST-Protocol'} isExternal>
              Github
            </Button>
            <Button variant={'outline'} color={'#00A0E9'} borderColor={'#00A0E9'} as={Link}
                    href={'https://discord.gg/nestprotocol'} isExternal>
              Discord
            </Button>
            <Button variant={'outline'} color={'#00A0E9'} borderColor={'#00A0E9'} as={Link}
                    href={'https://t.me/NEST_Developer'} isExternal>
              Telegram
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack bgImage={'/image/Bug/CyberInk_bg.jpg'} bgPosition={"center"} bgSize={'cover'}>
      {SEO}
      <NavigationMobile/>
      <Stack textAlign={"center"} align={"center"} pt={'180px'} py={'220px'}>
        <Heading fontSize={'25px'}>Bug Bounty Program</Heading>
        <Text fontSize={'12.5px'} fontWeight={'bold'}>Earn up to $200,000 NEST for finding<br/>related bugs affecting
          the NEST Protocol.</Text>
        <Stack spacing={'20px'} pt={'40px'}>
          <Button w={'200px'} minH={'44px'} as={Link} href={'https://forms.gle/1wtob3WWBJwYT9PE7'} isExternal>
            Submit a bug
          </Button>
          <Button w={'200px'} minH={'44px'} as={Link} href={'#rules'}>
            Read rules
          </Button>
        </Stack>
      </Stack>
      <Stack textAlign={"center"} align={"center"} py={'90px'} bg={'rgba(255,255,255, 0.7)'}>
        <Heading fontSize={'25px'}>In Scope</Heading>
        <Text fontSize={'12.5px'} fontWeight={'600'} pt={'30px'}>The list is not limited to the following<br/>
          submissions but it gives an overview<br/>
          of what issues we care about:</Text>
        <Text textAlign={"start"} px={'35px'} fontWeight={'600'} fontSize={'11px'} pt={'40px'} lineHeight={'33px'}>
          <ul>
            <li>Remote Code Execution</li>
            <li>Significant manipulation of the account balance</li>
            <li>Leakage of sensitive data</li>
            <li>Theft of privileged information</li>
            <li>Other vulnerability with clear potential for financial or data loss</li>
            <li>Vulnerabilities that affect the stability, connectivity or<br/>availability of wallet implementations</li>
            <li>Vulnerabilities that disrupt the consensus result and performance</li>
            <li>Unauthorized movement of funds, access to private keys</li>
            <li>Transaction origin spoofing</li>
          </ul>
        </Text>
      </Stack>
      <Stack textAlign={"center"} align={"center"} pt={'60px'}>
        <Heading>
          Submit a bug
        </Heading>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text fontSize={'12.5px'} fontWeight={'600'}>For each valid bug you find you'll earn rewards.<br/>
          The quantity of rewards awarded will vary<br/>
          depending on Severity.<br/>
          The severity is calculated according to<br/>
          the OWASP risk rating model based on<br/>
          Impact on the NEST Network and Likelihood.</Text>
        <Link href={'https://owasp.org/www-community/OWASP_Risk_Rating_Methodology'} isExternal fontSize={'11px'}
              fontWeight={'600'} color={'#00A0E9'}>View OWASP method <ChevronRightIcon/></Link>
        <br/>
        <Text fontSize={'11px'} fontWeight={'600'}>Higher rewards will be awarded based on:</Text>
        <br/>
        <Text fontSize={'11px'} fontWeight={'bold'}>Quality of description:</Text>
        <Text fontSize={'11px'} fontWeight={'600'}>Higher rewards are paid for clear,<br/> well-written
          submissions.</Text>
        <br/>
        <Text fontSize={'11px'} fontWeight={'bold'}>Quality of reproducibility:</Text>
        <Text fontSize={'11px'} fontWeight={'600'}>A Proof of Concept (POC) must be included<br/>
          to be eligible for rewards.<br/>
          Please include test code,<br/>
          scripts and detailed instructions.<br/>
          The easier it is for us to reproduce and<br/>
          verify the vulnerability, the higher the reward.
        </Text>
        <br/>
        <Text fontSize={'11px'} fontWeight={'bold'}>Quality of fix, if included:</Text>
        <Text fontSize={'11px'} fontWeight={'600'}>Higher rewards are paid for submissions <br/>
          with clear description of how to fix the issue.</Text>

        <Wrap w={'full'} justify={"center"} spacing={'20px'} py={'60px'} px={'24px'}>
          <WrapItem w={'full'}>
            <Stack w={'full'} h={'300px'} bg={'rgba(255,255,255,0.8)'} borderRadius={'20px'} overflow={"hidden"}
                   boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'0'} border={'1px solid #EEEEEE'}>
              <Stack bg={'#EEEEEE'} minH={'44px'} justify={"center"}>
                <Text fontSize={'14px'} fontWeight={'bold'}>UP TO $2,000 NEST</Text>
              </Stack>
              <Stack p={'20px'} textAlign={"start"} spacing={0} h={'full'}>
                <Text fontSize={'12.5px'} fontWeight={'bold'}>Low</Text>
                <Text fontSize={'12.5px'} fontWeight={'600'}>UP TO $2,000 NEST</Text>
                <br/>
                <Text fontSize={'12.5px'} fontWeight={'600'}>UP TO 20,000 POINTS</Text>
                <br/>
                <Text fontSize={'12.5px'} fontWeight={'600'}>SEVERITY</Text>
                <Text fontSize={'12.5px'} fontWeight={'600'} textAlign={"left"}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px' }}>
                    <li>Low impact, medium likelihood</li>
                    <li>Medium impact, low likelihood</li>
                  </ul>
                </Text>
                <Spacer/>
                <Link href={'https://forms.gle/1wtob3WWBJwYT9PE7'} isExternal fontSize={'12.5px'} fontWeight={'600'}
                      color={'#00A0E9'}>Submit low risk bug <ChevronRightIcon/></Link>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem w={'full'}>
            <Stack w={'full'} h={'300px'} bg={'rgba(255,255,255,0.8)'} borderRadius={'20px'} overflow={"hidden"}
                   boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'0'} border={'1px solid #EEEEEE'}>
              <Stack bg={'#EEEEEE'} minH={'44px'} justify={"center"}>
                <Text fontSize={'14px'} fontWeight={'bold'}>UP TO $10,000 NEST</Text>
              </Stack>
              <Stack p={'20px'} textAlign={"start"} spacing={0} h={'full'}>
                <Text fontSize={'12.5px'} fontWeight={'bold'}>Medium</Text>
                <Text fontSize={'12.5px'} fontWeight={'600'}>UP TO $10,000 NEST</Text>
                <br/>
                <Text fontSize={'12.5px'} fontWeight={'600'}>UP TO 100,000 POINTS</Text>
                <br/>
                <Text fontSize={'12.5px'} fontWeight={'600'}>SEVERITY</Text>
                <Text fontSize={'12.5px'} fontWeight={'600'} textAlign={"left"}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px' }}>
                    <li>High impact, low likelihood</li>
                    <li>Medium impact, medium likelihood</li>
                    <li>Low impact, high likelihood</li>
                  </ul>
                </Text>
                <Spacer/>
                <Link href={'https://forms.gle/1wtob3WWBJwYT9PE7'} isExternal fontSize={'12.5px'} fontWeight={'600'}
                      color={'#00A0E9'}>Submit medium risk bug <ChevronRightIcon/></Link>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem w={'full'}>
            <Stack w={'full'} h={'300px'} bg={'rgba(255,255,255,0.8)'} borderRadius={'20px'} overflow={"hidden"}
                   boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'0'} border={'1px solid #EEEEEE'}>
              <Stack bg={'#EEEEEE'} minH={'44px'} justify={"center"}>
                <Text fontSize={'14px'} fontWeight={'bold'}>UP TO $50,000 NEST</Text>
              </Stack>
              <Stack p={'20px'} textAlign={"start"} spacing={0} h={'full'}>
                <Text fontSize={'12.5px'} fontWeight={'bold'}>High</Text>
                <Text fontSize={'12.5px'} fontWeight={'600'}>UP TO $50,000 NEST</Text>
                <br/>
                <Text fontSize={'12.5px'} fontWeight={'600'}>UP TO 500,000 POINTS</Text>
                <br/>
                <Text fontSize={'12.5px'} fontWeight={'600'}>SEVERITY</Text>
                <Text fontSize={'12.5px'} fontWeight={'600'} textAlign={"left"}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px' }}>
                    <li>High impact, medium likelihood</li>
                    <li>Medium impact, high likelihood</li>
                  </ul>
                </Text>
                <Spacer/>
                <Link href={'https://forms.gle/1wtob3WWBJwYT9PE7'} isExternal fontSize={'12.5px'} fontWeight={'600'}
                      color={'#00A0E9'}>Submit high risk bug <ChevronRightIcon/></Link>
              </Stack>
            </Stack>
          </WrapItem>
          <WrapItem w={'full'}>
            <Stack w={'full'} h={'300px'} bg={'rgba(255,255,255,0.8)'} borderRadius={'20px'} overflow={"hidden"}
                   boxShadow={'0px 0px 45px 5px #E5E5E5'} spacing={'0'} border={'1px solid #EEEEEE'}>
              <Stack bg={'#EEEEEE'} minH={'44px'} justify={"center"}>
                <Text fontSize={'14px'} fontWeight={'bold'}>UP TO $200,000 NEST</Text>
              </Stack>
              <Stack p={'20px'} textAlign={"start"} spacing={0} h={'full'}>
                <Text fontSize={'12.5px'} fontWeight={'bold'}>Low</Text>
                <Text fontSize={'12.5px'} fontWeight={'600'}>UP TO $200,000 NEST</Text>
                <br/>
                <Text fontSize={'12.5px'} fontWeight={'600'}>UP TO 2000,000 POINTS</Text>
                <br/>
                <Text fontSize={'12.5px'} fontWeight={'600'}>SEVERITY</Text>
                <Text fontSize={'12.5px'} fontWeight={'600'} textAlign={"left"}>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px' }}>
                    <li>High impact, high likelihood</li>
                  </ul>
                </Text>
                <Spacer/>
                <Link href={'https://forms.gle/1wtob3WWBJwYT9PE7'} isExternal fontSize={'12.5px'} fontWeight={'600'}
                      color={'#00A0E9'}>Submit critical risk bug <ChevronRightIcon/></Link>
              </Stack>
            </Stack>
          </WrapItem>
        </Wrap>
      </Stack>
      <Stack textAlign={"center"} align={"center"} bg={'rgba(255,255,255,0.7)'} py={'40px'}>
        <Heading fontSize={'25px'} id={'rules'}>Program Rules</Heading>
        <Text fontSize={'12.5px'} fontWeight={'600'} pt={'30px'}>The bug bounty program is an experimental and<br/>
          discretionary rewards program for our NEST<br/>
          community to encourage and reward those<br/>
          who are helping to improve the platform.<br/>
          We ask that you follow these rules of<br/>
          engagement while testing and participating<br/>
          in the Bug Bounty Program:</Text>
        <Text textAlign={"start"} fontWeight={'600'} fontSize={'11px'} pt={'30px'} px={'30px'} lineHeight={'22px'}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <li style={{fontWeight: "bold"}}>Don't attempt to access another user's account:</li>
          You can do cross-account testing, but only use accounts that you own/control.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Use the testnet for testing purposes:</li>
          The mainnet is for production use and should not be used for testing.
          <br/>
          <br/>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <li style={{fontWeight: "bold"}}>Do not publicly disclose a bug before it's been fixed:</li>
          Exposing a bug or vulnerability before NEST is able to remediate
          could directly harm the NEST network and the community, and
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          will result in not receiving a reward for the bug's discovery.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Do not impact other users with your testing:</li>
          This includes testing for vulnerabilities by impacting an account
          you do not own.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Never attempt non-technical attacks:</li>
          Social engineering, phishing, or physical attacks against NEST
          employees, users, or the network infrastructure is not allowed.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Please provide detailed reports with reproducible steps:</li>
          If the report is not detailed enough to reproduce the issue,
          the issue will not be eligible for a reward.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Submit one vulnerability per report:</li>
          Unless you need to chain vulnerabilities to provide impact.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Duplicates:</li>
          We only award the first report that was received (provided that it
          can be fully reproduced).
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Multiple vulnerabilities caused by an underlying issue:</li>
          Only one bounty will be rewarded.
          <br/>
          <br/>
          <li style={{fontWeight: "bold"}}>Within three working days after submitting the vulnerability,
            the staff will confirm the received vulnerability and deal with it.
            After processing, we will give relevant conclusions and contact
            you by email to send you rewards. If the vulnerability is ignored,
            we will also explain the relevant reasons and give feedback to you.
          </li>
          <br/>
          <li style={{fontWeight: "bold"}}>
            NEST reserves the ultimate decision and will determine at its
            discretion whether a vulnerability is eligible for a reward and the
            amount of the award depending on severity.
          </li>
        </Text>
      </Stack>
      {/*<Stack px={'24px'} py={'60px'}>*/}
      {/*  <Stack w={'full'} align={"center"} textAlign={"center"} py={'48px'} bg={'rgba(255,255,255,0.7)'}*/}
      {/*         borderRadius={'20px'}>*/}
      {/*    <Heading fontSize={'25px'}>Bug Bounty<br/> Leaderboard</Heading>*/}
      {/*  </Stack>*/}
      {/*</Stack>*/}
      <Stack textAlign={"center"} pt={'60px'} align={"center"} px={'24px'} spacing={'20px'}>
        <Heading fontSize={'25px'} pb={'10px'}>Frequently<br/>
          asked questions</Heading>
        <Stack textAlign={"start"} bg={"rgba(255,255,255,0.7)"} borderRadius={'20px'} py={'30px'} w={'full'}
               px={'20px'}>
          <HStack spacing={'10px'} alignItems={"start"}>
            <chakra.img src={'/svg/icon_Question.svg'} w={'36px'} />
            <Stack>
              <Text fontSize={'11px'} fontWeight={'bold'}>I reported an issue/vulnerability, how long does it take to get a
                response?</Text>
              <Text fontSize={'11px'} fontWeight={'600'}>Within three working days after submitting the vulnerability, the
                staff will confirm the received
                vulnerability and deal with it. After processing, we will give relevant conclusions and contact you
                by email, and ask you for the wallet address and issue corresponding rewards; if the vulnerability
                is ignored, we will also explain the relevant reasons and give feedback to you.
              </Text>
            </Stack>
          </HStack>
        </Stack>
        <Stack textAlign={"start"} bg={"rgba(255,255,255,0.7)"} borderRadius={'20px'} py={'30px'} w={'full'}
               px={'20px'}>
          <HStack spacing={'10px'} alignItems={"start"}>
            <chakra.img src={'/svg/icon_Question.svg'} w={'36px'} />
            <Stack>
              <Text fontSize={'11px'} fontWeight={'bold'}>Is the bug bounty program is time limited?</Text>
              <Text fontSize={'11px'} fontWeight={'600'}>No.</Text>
            </Stack>
          </HStack>
        </Stack>
        <Stack textAlign={"start"} bg={"rgba(255,255,255,0.7)"} borderRadius={'20px'} py={'30px'} w={'full'}
               px={'20px'}>
          <HStack spacing={'10px'} alignItems={"start"}>
            <chakra.img src={'/svg/icon_Question.svg'} w={'36px'} />
            <Stack>
              <Text fontSize={'11px'} fontWeight={'bold'}>I want to be anonymous / I do not want my name on the leader
                board.</Text>
              <Text fontSize={'11px'} fontWeight={'600'}>You can do this, but it might make you ineligble for
                rewards.</Text>
            </Stack>
          </HStack>
        </Stack>
        <Stack textAlign={"start"} bg={"rgba(255,255,255,0.7)"} borderRadius={'20px'} py={'30px'} w={'full'}
               px={'20px'}>
          <HStack spacing={'10px'} alignItems={"start"}>
            <chakra.img src={'/svg/icon_Question.svg'} w={'36px'} />
            <Stack>
              <Text fontSize={'11px'} fontWeight={'bold'}>How are bounties paid out?</Text>
              <Text fontSize={'11px'} fontWeight={'600'}>After the submission is verified, we will pay out the reward in
                NEST within seven working days. We will contact you by email and ask you to provide your BEP20/ERC20 wallet
                address.</Text>
            </Stack>
          </HStack>
        </Stack>
        <Stack textAlign={"start"} bg={"rgba(255,255,255,0.7)"} borderRadius={'20px'} py={'30px'} w={'full'}
               px={'20px'}>
          <HStack spacing={'10px'} alignItems={"start"}>
            <chakra.img src={'/svg/icon_Question.svg'} w={'36px'} />
            <Stack>
              <Text fontSize={'11px'} fontWeight={'bold'}>What do points in the leaderboard do?</Text>
              <Text fontSize={'11px'} fontWeight={'600'}>The scores are given by our professional technical team through
                strict review, and we will issue corresponding bonuses according to the scores of the vulnerability you
                submit.</Text>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
      <Stack py={'60px'} align={"center"} px={'24px'}>
        <Stack textAlign={"center"} align={"center"} py={'60px'} bg={'rgba(255,255,255, 0.84)'} w={'full'} borderRadius={'20px'}>
          <chakra.img src={'/image/Bug/icon_contact_us.png'} h={'80px'} mb={'50px'}/>
          <Text fontSize={'25px'} fontWeight={'bold'}>Contact us</Text>
          <Text fontSize={'12.5px'} fontWeight={'600'}>If you have any questions,<br/>
            or simply would want to chat with us,<br/>
            please do through one of our<br/>
            official channels, or email <br/>
            <Link color={'#00A0E9'} href={'mailto:nestprotocoldao@gmail.com'}>nestprotocoldao@gmail.com</Link> to ask
            us.</Text>
          <Stack spacing={'20px'} pt={'40px'}>
            <Button variant={'outline'} color={'#00A0E9'} borderColor={'#00A0E9'} as={Link}
                    href={'https://github.com/NEST-Protocol'} isExternal>
              Github
            </Button>
            <Button variant={'outline'} color={'#00A0E9'} borderColor={'#00A0E9'} as={Link}
                    href={'https://discord.gg/nestprotocol'} isExternal>
              Discord
            </Button>
            <Button variant={'outline'} color={'#00A0E9'} borderColor={'#00A0E9'} as={Link}
                    href={'https://t.me/NEST_Developer'} isExternal>
              Telegram
            </Button>
          </Stack>
        </Stack>
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

export default Bug