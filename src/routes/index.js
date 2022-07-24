import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

// Middleware Route Components
import AdminRoute from "./middleware/AdminRoute";
import AuthRoute from "./middleware/AuthRoute";

//Admin Components
import Login from "../pages/Login";
import Overview from "../pages/Overview";
import PaginatedVerificationRequestList from "../pages/verification/VerificationRequestList";
import VerificationRequestDetail from "../pages/verification/VerificationRequestDetail";
import PaginatedClientList from "../pages/client/ClientList";
import ClientDetail from "../pages/client/ClientDetail";
import PaginatedSkilledWorkerList from "../pages/skilledworker/SkilledWorkerList";
import SkilledWorkerDetail from "../pages/skilledworker/SkilledWorkerDetail";
import Transaction from "../pages/transaction/TransactionList";
import PaginatedReportList from "../pages/report/ReportList";
import ReportDetail from "../pages/report/ReportDetail";
import PaginatedCertificationList from "../pages/certification/CertificationList";
import CertificationDetail from "../pages/certification/CertificationDetail";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>

      <AuthRoute path="/login" exact component={Login}></AuthRoute>

      <AdminRoute
        path="/overview"
        pageTitle="Overview"
        exact
        component={Overview}
      ></AdminRoute>

      <AdminRoute
        path="/verification-requests"
        pageTitle="Verification Requests"
        exact
        component={PaginatedVerificationRequestList}
      ></AdminRoute>

      <AdminRoute
        path="/verification-requests/:requestID"
        pageTitle="Verification Request Detail"
        exact
        component={VerificationRequestDetail}
      ></AdminRoute>

      <AdminRoute
        path="/certification-requests"
        pageTitle="Certification Requests"
        exact
        component={PaginatedCertificationList}
      ></AdminRoute>

      <AdminRoute
        path="/certification-requests/:certificationID"
        pageTitle="Certification Request Detail"
        exact
        component={CertificationDetail}
      ></AdminRoute>

      <AdminRoute
        path="/clients"
        pageTitle="Clients"
        exact
        component={PaginatedClientList}
      ></AdminRoute>

      <AdminRoute
        path="/clients/:clientID"
        pageTitle="Client Details"
        exact
        component={ClientDetail}
      ></AdminRoute>

      <AdminRoute
        path="/skilledworkers"
        pageTitle="Skilled Workers"
        exact
        component={PaginatedSkilledWorkerList}
      ></AdminRoute>

      <AdminRoute
        path="/skilledworkers/:workerID"
        pageTitle="Skilled Worker Details"
        exact
        component={SkilledWorkerDetail}
      ></AdminRoute>

      <AdminRoute
        path="/transactions"
        pageTitle="Transactions"
        exact
        component={Transaction}
      ></AdminRoute>

      <AdminRoute
        path="/user-reports"
        pageTitle="User Reports"
        exact
        component={PaginatedReportList}
      ></AdminRoute>

      <AdminRoute
        path="/user-reports/:reportID"
        pageTitle="User Reports"
        exact
        component={ReportDetail}
      ></AdminRoute>
    </Switch>
  );
};

export default withRouter(Routes);
