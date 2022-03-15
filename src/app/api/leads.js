import { axiosInstance } from "./axiosInterceptor";

export const getLeads = async () => {
  const { data } = await axiosInstance.get(`leads`);
  return data;
};
