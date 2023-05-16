import axios from "axios";

export const getAllBlogs = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/cmsapi/blogs/?pagination[page]=1&pagination[pageSize]=100&fields[0]=slug',
  })
  return req.data;
}

export const getBlog = async (slug: any) => {
  const req = await axios({
    method: 'get',
    url: `https://cms.nestfi.net/cmsapi/blogs/?filters[slug][$eq]=${slug}`,
  })
  const data = req.data.data;
  if (data.length === 0) {
    return null;
  }

  return data[0];
}

export const getBlogCategory = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/cmsapi/blog-categories?populate=blogs',
  })
  return req.data;
}

export const getRecentBlogs = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/cmsapi/blogs/?pagination[page]=1&pagination[pageSize]=5&fields[0]=slug&fields[1]=title&sort=date%3Adesc',
  })
  return req.data;
}