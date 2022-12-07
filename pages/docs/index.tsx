import {Stack, Text} from "@chakra-ui/react";
import {useEffect} from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "/docs/Overview/What-is-NEST-Protocol"
  }, [])

  return (
    <Stack>
      <Text>
        Loading...
      </Text>
    </Stack>
  )
}