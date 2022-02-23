import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { PropTypes } from 'prop-types';

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Fragment>
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      ></Route>
    </Fragment>
  );
};

AuthRoute.propTypes = {
  component: PropTypes.any,
  name: PropTypes.string,
  location: PropTypes.any
};

export default AuthRoute;
