import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../redux/auth/auth.selectors';

const PublicRoute = ({
  component: Component,
  redirectTo,

  ...routeProps
}) => {
  const isAuth = useSelector(getIsAuth);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth ? <Redirect to='/home' /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
