import { useQuery } from "react-query";
import { getLeads } from "../../api/leads";

export const useGetLeads = () => {
  return useQuery(["getLeads"], () => getLeads(), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};
