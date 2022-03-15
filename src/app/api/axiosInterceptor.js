import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
  },
});
