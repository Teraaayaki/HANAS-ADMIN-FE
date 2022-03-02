import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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
