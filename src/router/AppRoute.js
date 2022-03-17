import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageLayout from "../app/layout/PageLayout";
import Home from "../app/pages/Home";
import Leads from "../app/pages/Leads";
import Report from "../app/pages/Report";
import PieChart from "../app/pages/PieChart";

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <PageLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/leads" component={Leads} />
          <Route exact path="/reports" component={Report} />
          <Route exact path="/piechart/:leadSource" component={PieChart} />
        </PageLayout>
      </Switch>
    </Router>
  );
};

export default AppRoute;
