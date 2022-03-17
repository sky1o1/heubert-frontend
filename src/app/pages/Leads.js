import React from "react";
import { Typography, Table } from "antd";
import { useLeadsTable } from "../hooks/component/useLeadsTable";

function Leads() {
  const { data, isLoading, columns } = useLeadsTable();

  return (
    <div className="container">
      <Typography.Title>Leads Table</Typography.Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Table loading={isLoading} dataSource={data?.data} columns={columns} />
      </div>
    </div>
  );
}

export default Leads;
