import { useGetLeads } from "../api/useBlogs";

export const useLeadsTable = () => {
  const { data } = useGetLeads();

  const columns = [
    {
      title: "Lead Number",
      key: "leadNumber",
      dataIndex: "leadNumber",
      sorter: (a, b) => a.leadNumber - b.leadNumber,
    },
    {
      title: "Lead Origin",
      key: "leadOrigin",
      dataIndex: "leadOrigin",
    },
    {
      title: "Lead Source",
      key: "leadSource",
      dataIndex: "leadSource",
    },
    {
      title: "Lead Stage",
      key: "leadStage",
      dataIndex: "leadStage",
    },
    {
      title: "Engagement Score",
      key: "engagementScore",
      dataIndex: "engagementScore",
      sorter: (a, b) => a.engagementScore - b.engagementScore,
    },
    {
      title: "Last Activity Date",
      key: "lastActivityDate",
      dataIndex: "lastActivityDate",
      // sorter: (a, b) => a.lastActivityDate - b.lastActivityDate,
    },
  ];

  return {
    data,
    // isLoading,
    // isError,
    columns,
  };
};
