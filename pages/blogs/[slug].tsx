import {Heading, HStack, Stack, Text} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import {getAllBlogs, getBlog} from "../../lib/blogs";

export default function Page({id}: any) {
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
          <Text>{id}</Text>
        </Stack>
      </HStack>
    </Stack>
  )
}

export const getStaticPaths = async () => {
  const blogsRes = await getAllBlogs()
  return {
    paths: blogsRes.data.map((blog: any) => `/blogs/${blog.attributes.slug}`) || [],
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  const blogRes = await getBlog(params.slug)
  return {
    props: {
      id: blogRes.id,
    }
  }
}

