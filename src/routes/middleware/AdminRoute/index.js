import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Sidebar from '../../../components/Sidebar';

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Fragment>
      {/* Navigation Side Bar */}
      <Sidebar />

      {/* Main Component */}
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      ></Route>
    </Fragment>
  );
};

AdminRoute.propTypes = {
  component: PropTypes.any,
  name: PropTypes.string,
  location: PropTypes.any
};

export default AdminRoute;
