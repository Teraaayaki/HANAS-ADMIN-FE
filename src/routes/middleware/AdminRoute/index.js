import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthService from '../../../services/AuthService';
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';

const AdminRoute = ({ pageTitle, component: Component, ...rest }) => {
  return (
    <Fragment>
      {/* Navigation Sidebar and Header*/}
      <Sidebar />
      <Header pageTitle={pageTitle} />

      {/* Main Component */}
      <Route
        {...rest}
        render={(props) => {
          if (AuthService.authenticated()) {
            return <Component {...props} />;
          }

          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }}
      ></Route>
    </Fragment>
  );
};

export default AdminRoute;
