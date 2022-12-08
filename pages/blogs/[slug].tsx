import {Heading, HStack, Link, Stack} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import {getAllBlogs, getBlog, getRecentBlogs} from "../../lib/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Moment from "react-moment";

export default function Page({content, publishedAt, recentBlogs}: any) {
  return (
    <Stack h={'100vh'}>
      <Navigation/>
      <HStack px={'45px'} h={'full'} borderTop={'0.5px solid #c8c9cc'}>
        <Stack minW={'400px'} w={'400px'} h={'full'} py={'40px'}>
          <Heading size={'md'}>Recent posts</Heading>
          {
            recentBlogs.map((item: any) => (
              <Link key={item.id} href={`/blogs/${item.attributes.slug}`}>{item.attributes.title}</Link>
            ))
          }
        </Stack>
        <Stack w={'container.xl'} h={'full'} p={'40px'}>
          {/* eslint-disable-next-line react/no-children-prop */}
          <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} className={'markdown-body'}/>
          <Moment format="YYYY/MM/DD">{publishedAt}</Moment>
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
  const recentBlogs = await getRecentBlogs()
  return {
    props: {
      id: blogRes.id,
      slug: blogRes.attributes.slug,
      title: blogRes.attributes.title,
      content: blogRes.attributes.content,
      date: blogRes.attributes.date,
      recentBlogs: recentBlogs.data
    }
  }
}

