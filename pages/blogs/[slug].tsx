import {Divider, Heading, HStack, Link, Stack, useMediaQuery} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import {getAllBlogs, getBlog, getRecentBlogs} from "../../lib/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Moment from "react-moment";
import NavigationMobile from "../../components/NavigationMobile";
import Head from "next/head";

export default function Page({content, date, recentBlogs, title, description, banner}: any) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const SEO = (
    <Head>
      <title>{title}</title>
      { title && (
        <>
          <meta name="og:title" content={title}/>
          <meta name="twitter:title" content={title}/>
        </>
      ) }
      { description && (
        <>
          <meta name="description" content={description}/>
          <meta name="og:description" content={description}/>
          <meta name="twitter:description" content={description}/>
        </>
      ) }
      { banner && (
        <>
          <meta name="og:image" content={'https://cms.nestfi.net/' + banner}/>
          <meta name="twitter:image" content={'https://cms.nestfi.net/' + banner}/>
        </>
      ) }
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )

  const pcPage = (
    <Stack h={'100vh'}>
      { SEO }
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
          <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={'markdown-body'}/>
          <br/>
          <Moment format="YYYY/MM/DD">{date}</Moment>
        </Stack>
      </HStack>
    </Stack>
  )

  const mobilePage = (
    <Stack>
      { SEO }
      <NavigationMobile/>
      <Divider/>
      <Stack w={'full'} h={'full'} p={'24px'}>
        {/* eslint-disable-next-line react/no-children-prop */}
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={'markdown-body'}/>
        <br/>
        <Moment format="YYYY/MM/DD">{date}</Moment>
      </Stack>
      <Divider/>
      <Stack w={'full'} h={'full'} p={'24px'}>
        <Heading size={'md'}>Recent posts</Heading>
        {
          recentBlogs.map((item: any) => (
            <Link key={item.id} href={`/blogs/${item.attributes.slug}`}>{item.attributes.title}</Link>
          ))
        }
      </Stack>
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
      description: blogRes.attributes?.description || '',
      banner: blogRes.attributes?.banner?.data?.attributes?.url || '',
      date: blogRes.attributes.date,
      recentBlogs: recentBlogs.data
    }
  }
}

