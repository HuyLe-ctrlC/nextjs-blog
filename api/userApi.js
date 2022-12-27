import axiosClient from "./axiosClient";

const userApi = {
  getAll: () => {
    const url =
      "https://app.agrios.optechdemo2.com:3005/api/levels/getall?publish=&orderby=&keyword=&start=&limit=";
    return axiosClient.get(url);
  },
};

export default userApi;
