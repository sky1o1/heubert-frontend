import { useQuery } from "react-query";
import { getLeads, getLeadSource, getLeadOrigin } from "../../api/leads";

export const useGetLeads = () => {
  return useQuery(["getLeads"], () => getLeads(), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useGetLeadsByLeadSource = () => {
  return useQuery(["getLeadSource"], () => getLeadSource(), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};

export const useGetLeadsByLeadOrigin = (leadSource) => {
  return useQuery(
    ["getLeadOrigin", leadSource],
    () => getLeadOrigin(leadSource),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
    }
  );
};
