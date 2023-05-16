import axios from "axios";

export const getAllPartnerCategory = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/cmsapi/partner-categories',
  })
  return req.data;
}

export const getAllPartners = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/cmsapi/partners?populate[0]=category&populate[1]=logo&pagination[page]=1&pagination[pageSize]=100',
  })
  return req.data;
}