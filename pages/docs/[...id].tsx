import {HStack, Stack, Text} from "@chakra-ui/react";
import {getAllDocs, getDoc} from "../../lib/docs";
import Navigation from "../../components/Navigation";

export default function Page({data}) {
  return (
    <Stack h={'100vh'}>
      <Navigation/>
      <HStack px={'45px'} h={'full'} borderTop={'0.5px solid #c8c9cc'}>
        <Stack minW={'300px'} w={'300px'} h={'full'} borderRight={'0.5px solid #c8c9cc'} py={'40px'}>
          <Text>Menu1</Text>
          <Text>Menu2</Text>
          <Text>Menu3</Text>
          <Text>Menu4</Text>
          <Text>Menu5</Text>
        </Stack>
        <Stack w={'full'} h={'full'} p={'40px'}>
          <Text>Content</Text>
        </Stack>
      </HStack>
    </Stack>
  )
}

// get the path of the page
export const getStaticPaths = async () => {
  const paths = await getAllDocs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const data = await getDoc(params.id)
  return {
    props: {
      data: "Hello"
    }
  }
}