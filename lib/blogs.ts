import axios from "axios";

export const getAllBlogs = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/api/blogs/?pagination[page]=1&pagination[pageSize]=100&fields[0]=slug',
  })
  return req.data;
}

export const getBlog = async (slug: any) => {
  const req = await axios({
    method: 'get',
    url: `https://cms.nestfi.net/api/blogs/?filter[slug][eq]=${slug}`,
  })
  const data = req.data.data;
  if (data.length === 0) {
    return null;
  }

  return data[0];
}