import axios from "axios";

export const getAllPartnerCategory = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/api/partner-categories?populate=partners',
  })
  return req.data;
}