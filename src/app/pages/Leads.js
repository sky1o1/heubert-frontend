import React from "react";
import { Typography, Table } from "antd";
import styled from "styled-components";
import { useLeadsTable } from "../hooks/component/useLeadsTable";

const StyledTable = styled(Table)`
  .ant-table {
    background: rgb(0, 0, 0.5);

    .ant-table-content {
      overflow: auto !important;

      border: 20px black;
    }

    table {
      thead tr th {
        background: #fff;
        padding: 12px 24px !important;

        &:first-child {
          border-top-left-radius: 20px !important;
        }

        &:last-child {
          border-top-right-radius: 20px !important;
        }
      }

      tbody tr {
        &.ant-table-row:hover > td {
          background: #e0e0e0;
        }

        td {
          background: #fff;

          &.ant-table-cell {
            padding: 8px 24px !important;
          }

          .ant-checkbox-inner {
            border-radius: 4px;
            background: #fff;
          }

          .ant-checkbox-checked .ant-checkbox-inner {
            background: #fff;
            border: 1px solid #fff;
          }
        }

        a {
          color: #fff;
          font-weight: 10;
        }

        &:last-child {
          td {
            &:first-child {
              border-bottom-left-radius: 20px !important;
            }
            &:last-child {
              border-bottom-right-radius: 20px !important;
            }
          }
        }
      }
    }
  }
`;

function Leads() {
  const { data, columns } = useLeadsTable();

  return (
    <div className="container">
      <Typography.Title>Leads Table</Typography.Title>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <StyledTable dataSource={data?.data} columns={columns} />
      </div>
    </div>
  );
}

export default Leads;
