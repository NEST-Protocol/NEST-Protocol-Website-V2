import {
  HStack,
  Stack,
  Text,
  Link,
  useMediaQuery,
  Divider,
} from "@chakra-ui/react";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navigation from "../../components/Navigation";
import NavigationMobile from "../../components/NavigationMobile";
import useSWR from "swr";
import {useRouter} from "next/router";

export default function Page() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const router = useRouter();
  const slug = router.query.slug?.[1];
  const {data: menu} = useSWR('https://cms.nestfi.net/cmsapi/doc-categories?populate[docs][fields][0]=slug&populate[docs][fields][1]=title', (url) => fetch(url)
    .then((res) => res.json())
    .then((data) => data.data)
  );
  const {data: doc} = useSWR( slug ? `https://cms.nestfi.net/cmsapi/docs/?filters[slug][$eq]=${slug}` : undefined, (url) => fetch(url)
    .then((res) => res.json())
    .then((data) => data.data[0])
  );

  const pcPage = (
    <Stack h={'100vh'}>
      <Navigation/>
      <HStack px={'45px'} h={'full'} borderTop={'0.5px solid #c8c9cc'}>
        <Stack minW={'300px'} w={'300px'} h={'full'} borderRight={'0.5px solid #c8c9cc'} py={'40px'}>
          {
            menu?.map((item: any) => (
              <Stack key={item.id}>
                {item.attributes.docs.data.length > 0 && (
                  <Text fontWeight={'600'}>{item.attributes.name}</Text>
                )}
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
        <Stack w={'container.xl'} h={'full'} p={'40px'} overflow={"scroll"}>
          {/* eslint-disable-next-line react/no-children-prop */}
          <ReactMarkdown children={doc?.attributes?.content} remarkPlugins={[remarkGfm]} className={'markdown-body'}/>
          <Moment format="YYYY/MM/DD">{doc?.attributes?.publishedAt}</Moment>
        </Stack>
      </HStack>
    </Stack>
  )

  const mobilePage = (
    <Stack>
      <NavigationMobile/>
      <Divider/>
      <Stack w={'full'} h={'full'} p={'24px'} overflow={"scroll"}>
        {/* eslint-disable-next-line react/no-children-prop */}
        <ReactMarkdown children={doc?.attributes?.content} remarkPlugins={[remarkGfm]} className={'markdown-body'}/>
        <br/>
        <Text fontSize={'sm'}>Published at: <Moment format="YYYY/MM/DD">{doc?.attributes?.publishedAt}</Moment></Text>
      </Stack>
      <Divider/>
      <Stack w={'full'} h={'full'} borderRight={'0.5px solid #c8c9cc'} p={'24px'}>
        {
          menu?.map((item: any) => (
            <Stack key={item.id}>
              {item.attributes.docs.data.length > 0 && (
                <Text fontWeight={'600'}>{item.attributes.name}</Text>
              )}
              {
                item.attributes.docs.data.map((doc: any) => (
                  <Link key={doc.id} href={`/docs/${item.attributes.name}/${doc?.attributes?.slug}`}>
                    <Text fontSize={'sm'} cursor={"pointer"}>{doc?.attributes?.title}</Text>
                  </Link>
                ))
              }
            </Stack>
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