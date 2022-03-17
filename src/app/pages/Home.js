import React from "react";
import { Typography, Card } from "antd";

export default function Home() {
  return (
    <div className="container">
      <Typography.Title>Reports on Leads</Typography.Title>
      <Card>
        <Typography.Paragraph>
          In the context of sales and marketing, a lead refers to an unqualified
          potential customer. For example, they might have downloaded a piece of
          information from the website, or submitted a lightweight form that
          asked for their email address and are now registered in the database.
          They are called “unqualified” at this point there is not enough
          information to determine the chances of becoming an actual customer
          i.e. buying a product.
        </Typography.Paragraph>
        <Typography.Paragraph>
          This site helps to visualize the data of leads graphically.
        </Typography.Paragraph>
      </Card>
    </div>
  );
}
