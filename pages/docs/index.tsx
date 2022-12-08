import {Stack, Text} from "@chakra-ui/react";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("/docs/Overview/What-is-NEST-Protocol")
  }, [router])

  return (
    <Stack>
      <Text>
        Loading...
      </Text>
    </Stack>
  )
}