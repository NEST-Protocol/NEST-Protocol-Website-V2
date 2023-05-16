import axios from "axios";

export const getAllRoundtable = async () => {
  const req = await axios({
    method: 'get',
    url: 'https://cms.nestfi.net/cmsapi/roundtables?populate=invited_user_icons&sort=scheduled_start%3Adesc',
  })
  return req.data;
}