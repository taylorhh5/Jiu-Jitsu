import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        } else {
            alert('You are currently browsing as a guest. If you would like a profile, please click on "Register" and create an account.')

           return<Redirect to="/review" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

