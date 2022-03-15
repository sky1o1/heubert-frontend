import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageLayout from "../app/layout/PageLayout";
import Leads from "../app/pages/Leads";
import Report from "../app/pages/Report";

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <PageLayout>
          <Route exact path="/leads" component={Leads} />
          <Route exact path="/reports" component={Report} />
        </PageLayout>
      </Switch>
    </Router>
  );
};

export default AppRoute;
