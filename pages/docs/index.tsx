import {Stack, Text} from "@chakra-ui/react";
import {useEffect} from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "/docs/a/b"
  }, [])

  return (
    <Stack>
      <Text>
        Loading...
      </Text>
    </Stack>
  )
}