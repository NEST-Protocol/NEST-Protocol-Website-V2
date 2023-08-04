import {Divider, Heading, HStack, Link, Stack, useMediaQuery} from "@chakra-ui/react";
import Navigation from "../../components/Navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Moment from "react-moment";
import NavigationMobile from "../../components/NavigationMobile";
import Head from "next/head";
import {useRouter} from "next/router";
import useSWR from "swr";

export default function Page() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const router = useRouter()
  const slug = router.query.slug;
  const {data: recentBlogs} = useSWR('https://cms.nestfi.net/cmsapi/blogs/?pagination[page]=1&pagination[pageSize]=5&fields[0]=slug&fields[1]=title&sort=date%3Adesc', (url) => fetch(url)
    .then((res) => res.json())
    .then((data) => data.data)
  );
  const {data: blogRes} = useSWR( slug ? `https://cms.nestfi.net/cmsapi/blogs/?filters[slug][$eq]=${slug}` : undefined, (url) => fetch(url)
    .then((res) => res.json())
    .then((data) => data.data[0])
  );

  const SEO = (
    <Head>
      <title>{blogRes?.attributes?.title}</title>
      { blogRes?.attributes?.title && (
        <>
          <meta name="og:title" content={blogRes?.attributes?.title}/>
          <meta name="twitter:title" content={blogRes?.attributes?.title}/>
        </>
      ) }
      { blogRes?.attributes?.description && (
        <>
          <meta name="description" content={blogRes?.attributes?.description}/>
          <meta name="og:description" content={blogRes?.attributes?.description}/>
          <meta name="twitter:description" content={blogRes?.attributes?.description}/>
        </>
      ) }
      { blogRes?.attributes?.banner?.data?.attributes?.url && (
        <>
          <meta name="og:image" content={'https://cms.nestfi.net/' + blogRes?.attributes?.banner?.data?.attributes?.url}/>
          <meta name="twitter:image" content={'https://cms.nestfi.net/' + blogRes?.attributes?.banner?.data?.attributes?.url}/>
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
            recentBlogs?.map((item: any) => (
              <Link key={item.id} href={`/blogs/${item.attributes.slug}`}>{item.attributes.title}</Link>
            ))
          }
        </Stack>
        <Stack w={'container.xl'} h={'full'} p={'40px'}>
          {/* eslint-disable-next-line react/no-children-prop */}
          <ReactMarkdown children={blogRes?.attributes?.content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={'markdown-body'}/>
          <br/>
          <Moment format="YYYY/MM/DD">{blogRes?.attributes?.date}</Moment>
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
        <ReactMarkdown children={blogRes?.attributes?.content} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={'markdown-body'}/>
        <br/>
        <Moment format="YYYY/MM/DD">{blogRes?.attributes?.date}</Moment>
      </Stack>
      <Divider/>
      <Stack w={'full'} h={'full'} p={'24px'}>
        <Heading size={'md'}>Recent posts</Heading>
        {
          recentBlogs?.map((item: any) => (
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


