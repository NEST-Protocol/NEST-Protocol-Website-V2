import axios from 'axios';

export const getAllDocs = async () => {
  const req = await axios({
    method: 'get',
    url: 'http://localhost:1337/api/docs/?pagination[page]=1&pagination[pageSize]=100&fields[0]=slug&fields[1]=category',
  })
  return req.data;
}

export const getDoc = async (category: string, slug: string) => {
  const req = await axios({
    method: 'get',
    url: `http://localhost:1337/api/docs/?filter[category][eq]=${category}&filter[slug][eq]=${slug}&fields[0]=id`,
  })
  const data = req.data.data;
  if (data.length === 0) {
    return null;
  }

  return data[0];
}