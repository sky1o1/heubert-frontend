import React from "react";
import styled from "styled-components";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";

const StyledMenu = styled(Menu)`
  .ant-menu-item {
    padding-left: 5px;
  }
  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover,
  .ant-menu-item a:hover,
  .ant-menu-item i:hover {
    color: #faebd7;
  }
  .ant-menu-item-selected,
  .ant-menu-submenu-selected .ant-menu-submenu-title {
    background-color: #faebd7 !important;
    border-radius: 30px 0px 0px 30px !important;
  }
  .ant-menu-submenu-title span {
    padding-left: 10px;
  }
  .ant-menu-item-selected a:hover {
    color: #fff !important;
  }

  .ant-menu-submenu-selected div span,
  .ant-menu-submenu-selected div i,
  .ant-menu-submenu-selected div svg {
    color: #fff !important;
  }

  .ant-menu-submenu-selected i {
    color: #fff !important;
  }
  .ant-menu-item-selected svg,
  .ant-menu-item-selected a {
    color: #fff;
  }
  ,
  .ant-menu-submenu-title {
    padding-left: 10px;
    margin-right: 10px;
  }
  .ant-menu-inline .ant-menu-submenu .ant-menu-submenu-title {
    height: 35px !important;
  }
  .ant-menu-sub .ant-menu-inline {
    background: rgba(0, 0, 0, 0.15);
  }
  .ant-menu-sub .ant-menu-item-selected {
    width: 90%;
    padding-left: 20px !important;
    float: right;
  }
  .ant-menu-item-selected::after {
    opacity: 0;
  }
`;

function Navbar() {
  const history = useHistory();
  return (
    <aside id="navbar">
      <StyledMenu
        style={{
          width: 256,
          height: 400,
        }}
        defaultSelectedKeys={["leads"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}>
        <Menu.Item
          onClick={() => history.push("/leads")}
          style={{ cursor: "pointer", padding: 15 }}
          key="leads">
          Leads
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push("/reports")}
          style={{ cursor: "pointer", padding: 15 }}
          key="reports">
          Report
        </Menu.Item>
      </StyledMenu>
    </aside>
  );
}

export default Navbar;
