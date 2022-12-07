import {Heading, HStack, Stack, Text} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import {getAllBlogs, getBlog} from "../../lib/blogs";

export default function Page({data}: any) {
  return (
    <Stack h={'100vh'}>
      <Navigation/>
      <HStack px={'45px'} h={'full'} borderTop={'0.5px solid #c8c9cc'}>
        <Stack minW={'400px'} w={'400px'} h={'full'} py={'40px'}>
          <Heading size={'md'}>Recent posts</Heading>
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

export const getStaticPaths = async () => {
  const paths = await getAllBlogs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  const data = await getBlog(params.id)
  return {
    props: {
      data: "Hello"
    }
  }
}

