import axiosClient from "./axiosClient";
import axios from "axios";
import qs from "querystring";
const userApi = {
  getAll: () => {
    const url =
      "https://app.agrios.optechdemo2.com:3005/api/levels/getall?publish=&orderby=&keyword=&start=&limit=";
    return axiosClient.get(url);
  },
  add: (body) => {
    const url = "/api/new-meetup";
    return axiosClient.post(url, body);
  },
  getAccessTokenZalo: (body) => {
    const data = {
      app_id: "2406961892426225416",
      code: body,
      grant_type: "authorization_code",
    };
    const url = "https://oauth.zaloapp.com/v4/oa/access_token";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        secret_key: "6wkYMBXZBSC5jjZNfSV8",
      },
      data: qs.stringify(data),
      url,
    };
    console.log("options", options);
    return axios(options);
  },
  getAccessTokenZaloNormal: (body) => {
    const data = {
      app_id: "2406961892426225416",
      code: body,
      grant_type: "authorization_code",
    };
    const url = "https://oauth.zaloapp.com/v4/access_token";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        secret_key: "6wkYMBXZBSC5jjZNfSV8",
      },
      data: qs.stringify(data),
      url,
    };
    console.log("options", options);
    return axios(options);
  },
  getInfo: (body) => {
    const url = "https://graph.zalo.me/v2.0/me";
    const options = {
      method: "GET",
      headers: {
        access_token: body,
      },
      url,
    };
    return axios(options);
  },
};

export default userApi;
