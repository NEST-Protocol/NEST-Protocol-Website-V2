import {HStack, Stack, Text} from "@chakra-ui/react";
import {getAllDocs, getDoc} from "../../lib/docs";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navigation from "../../components/Navigation";

export default function Page({content, publishedAt}: any) {
  return (
    <Stack h={'100vh'}>
      <Navigation/>
      <HStack px={'45px'} h={'full'} borderTop={'0.5px solid #c8c9cc'}>
        <Stack minW={'300px'} w={'300px'} h={'full'} borderRight={'0.5px solid #c8c9cc'} py={'40px'}>
          <Text>Menu1</Text>
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

// get the path of the page
export const getStaticPaths = async () => {
  const docsRes = await getAllDocs()
  return {
    paths: docsRes.data.map((doc: any) => `/docs/${doc.attributes.category}/${doc.attributes.slug}`) || [],
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  const category = params.slug[0]
  const slug = params.slug[1]
  const docRes = await getDoc(category, slug)
  return {
    props: {
      id: docRes.id,
      slug: docRes.attributes.slug,
      title: docRes.attributes.title,
      content: docRes.attributes.content,
      publishedAt: docRes.attributes.publishedAt,
    }
  }
}