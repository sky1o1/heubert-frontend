import { axiosInstance } from "./axiosInterceptor";

export const getLeads = async () => {
  const { data } = await axiosInstance.get(`leads`);
  return data;
};

export const getLeadSource = async () => {
  const { data } = await axiosInstance.get(`leads/leadsource`);
  return data;
};

export const getLeadOrigin = async (leadSource) => {
  const { data } = await axiosInstance.get(
    `leads/leadorigin?leadSource=${leadSource}`
  );
  return data;
};
