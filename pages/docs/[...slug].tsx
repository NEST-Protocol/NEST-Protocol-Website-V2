import {HStack, Stack, Text, Link} from "@chakra-ui/react";
import {getAllDocs, getAllDocsCategory, getDoc} from "../../lib/docs";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navigation from "../../components/Navigation";

export default function Page({content, publishedAt, menu}: any) {
  return (
    <Stack h={'100vh'}>
      <Navigation/>
      <HStack px={'45px'} h={'full'} borderTop={'0.5px solid #c8c9cc'}>
        <Stack minW={'300px'} w={'300px'} h={'full'} borderRight={'0.5px solid #c8c9cc'} py={'40px'}>
          {
            menu.map((item: any) => (
              <Stack key={item.id}>
                <Text fontWeight={'600'}>{item.attributes.name}</Text>
                {
                  item.attributes.docs.data.map((doc: any) => (
                    <Link key={doc.id} href={`/docs/${item.attributes.name}/${doc.attributes.slug}`}>
                      <Text fontSize={'sm'} cursor={"pointer"}>{doc.attributes.title}</Text>
                    </Link>
                  ))
                }
              </Stack>
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

// get the path of the page
export const getStaticPaths = async () => {
  const docsRes = await getAllDocs()
  return {
    paths: docsRes.data.map((doc: any) => `/docs/${doc.attributes.category.data.attributes.name}/${doc.attributes.slug}`) || [],
    fallback: false
  }
}

export async function getStaticProps({params}: any) {
  const category = params.slug[0]
  const slug = params.slug[1]
  const docRes = await getDoc(category, slug)
  const menu = await getAllDocsCategory()

  return {
    props: {
      id: docRes.id,
      slug: docRes.attributes.slug,
      title: docRes.attributes.title,
      content: docRes.attributes.content,
      publishedAt: docRes.attributes.publishedAt,
      menu: menu.data
    }
  }
}