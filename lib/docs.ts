import axios from 'axios';

export const getAllDocs = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/api/docs/?pagination[page]=1&pagination[pageSize]=100&fields[0]=slug&populate[category][fields][0]=name',
  })
  return req.data;
}

export const getDoc = async (category: string, slug: string) => {
  const req = await axios({
    method: 'get',
    url: `https://cms.nestfi.net/api/docs/?filter[category][eq]=${category}&filter[slug][eq]=${slug}`,
  })
  const data = req.data.data;
  if (data.length === 0) {
    return null;
  }

  return data[0];
}