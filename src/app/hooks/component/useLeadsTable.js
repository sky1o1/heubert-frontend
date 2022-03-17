import moment from "moment";
import { useGetLeads } from "../api/useLeads";

export const useLeadsTable = () => {
  const { data, isLoading } = useGetLeads();
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
      filters: [
        {
          text: "API",
          value: "API",
        },
        {
          text: "Landing Page Submission",
          value: "Landing Page Submission",
        },
      ],
      onFilter: (value, record) => record.leadOrigin.indexOf(value) === 0,
    },
    {
      title: "Lead Source",
      key: "leadSource",
      dataIndex: "leadSource",
      filters: [
        {
          text: "Olark Chat",
          value: "Olark Chat",
        },
        {
          text: "Organic Search",
          value: "Organic Search",
        },
        {
          text: "Google",
          value: "Google",
        },
        {
          text: "Direct Traffic",
          value: "Direct Traffic",
        },
        {
          text: "Referral Sites",
          value: "Referral Sites",
        },
        {
          text: "Welingak Website",
          value: "Welingak Website",
        },
      ],
      onFilter: (value, record) => record.leadSource.indexOf(value) === 0,
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
      render: (_, record) =>
        moment(record?.lastActivityDate).format("YYYY-MM-DD"),
    },
  ];

  return {
    data,
    isLoading,
    columns,
  };
};
