import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

// Middleware Route Components
import AdminRoute from './middleware/AdminRoute';
import AuthRoute from './middleware/AuthRoute';

//Admin Components
import Login from '../pages/Login';
import Overview from '../pages/Overview';
import VerificationRequestList from '../pages/verification/VerificationRequestList';
import VerificationRequestDetail from '../pages/verification/VerificationRequestDetail';
import ClientList from '../pages/client/ClientList';
import ClientDetail from '../pages/client/ClientDetail';
import SkilledWorkerList from '../pages/skilledworker/SkilledWorkerList';
import SkilledWorkerDetail from '../pages/skilledworker/SkilledWorkerDetail';
import Transaction from '../pages/Transaction';
import UserReport from '../pages/UserReport';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>

      <AuthRoute path="/login" exact component={Login}></AuthRoute>

      <AdminRoute path="/overview" exact component={Overview}></AdminRoute>

      <AdminRoute
        path="/verification-requests"
        exact
        component={VerificationRequestList}
      ></AdminRoute>

      <AdminRoute
        path="/verification-requests/:request-id"
        exact
        component={VerificationRequestDetail}
      ></AdminRoute>

      <AdminRoute path="/clients" exact component={ClientList}></AdminRoute>

      <AdminRoute
        path="/clients/:client-id"
        exact
        component={ClientDetail}
      ></AdminRoute>

      <AdminRoute
        path="/skilledworkers"
        exact
        component={SkilledWorkerList}
      ></AdminRoute>

      <AdminRoute
        path="/skilledworkers/:skilledworker-id"
        exact
        component={SkilledWorkerDetail}
      ></AdminRoute>

      <AdminRoute
        path="/transactions"
        exact
        component={Transaction}
      ></AdminRoute>

      <AdminRoute
        path="/user-reports"
        exact
        component={UserReport}
      ></AdminRoute>
    </Switch>
  );
};

export default withRouter(Routes);
