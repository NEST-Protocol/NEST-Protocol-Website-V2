import axios from "axios";

export const getAllPartnerCategory = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/api/partner-categories',
  })
  return req.data;
}

export const getAllPartners = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/api/partners?populate[0]=category&populate[1]=logo',
  })
  return req.data;
}