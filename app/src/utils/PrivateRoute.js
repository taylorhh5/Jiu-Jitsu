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
            alert("You must be logged in to do that!")

           return<Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

