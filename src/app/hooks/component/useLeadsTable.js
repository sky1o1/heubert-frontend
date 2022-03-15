export const useLeadsTable = () => {
  const data = [
    {
      leadNumber: 1212,
      leadOrigin: "api",
      leadSource: "asd",
      leadStage: "1st",
      engagementScore: "100",
    },
    {
      leadNumber: 324,
      leadOrigin: "test",
      leadSource: "dasd",
      leadStage: "sec",
      engagementScore: "200",
    },
    {
      leadNumber: 143,
      leadOrigin: "hey",
      leadSource: "rwe",
      leadStage: "third",
      engagementScore: "300",
    },
    {
      leadNumber: 5234,
      leadOrigin: "bro",
      leadSource: "asdasg",
      leadStage: "4th",
      engagementScore: "400",
    },
    {
      leadNumber: 4264,
      leadOrigin: "sis",
      leadSource: "arewht",
      leadStage: "5th",
      engagementScore: "500",
    },
    {
      leadNumber: 978,
      leadOrigin: "bruh",
      leadSource: "dsd",
      leadStage: "6th",
      engagementScore: "600",
    },
  ];

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
      sorter: (a, b) => a.lastActivityDate - b.lastActivityDate,
    },
  ];

  return {
    data,
    // isLoading,
    // isError,
    columns,
  };
};
