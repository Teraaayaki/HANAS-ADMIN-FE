import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthService from '../../../services/AuthService';

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Fragment>
      <Route
        {...rest}
        render={(props) => {
          if (!AuthService.authenticated()) {
            return <Component {...props} />;
          }

          return (
            <Redirect
              to={{
                pathname: '/overview',
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

export default AuthRoute;
