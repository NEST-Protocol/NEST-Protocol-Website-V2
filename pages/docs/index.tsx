import {Spacer, Spinner, Stack, useMediaQuery} from "@chakra-ui/react";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Navigation from "../../components/Navigation";
import NavigationMobile from "../../components/NavigationMobile";
import FooterMobile from "../../components/FooterMobile";
import Footer from "../../components/Footer";

export default function Page() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  useEffect(() => {
    router.push("/docs/Overview/What-is-NEST-Protocol")
  }, [router])

  const pcPage = (
    <Stack h={'100vh'}>
      <Navigation/>
      <Stack px={'45px'}>
        <Spinner/>
      </Stack>
      <Spacer/>
      <Footer/>
    </Stack>
  )

  const mobilePage = (
    <Stack h={'100vh'}>
      <NavigationMobile/>
      <Stack px={'24px'}>
        <Spinner/>
      </Stack>
      <Spacer/>
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