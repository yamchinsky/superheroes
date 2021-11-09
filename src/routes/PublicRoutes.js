import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../redux/auth/auth.selectors';

const PublicRoute = ({
  component: Component,
  redirectTo,
  redirectToMob,
  isAuthenticated,
  isMobileMedia,
  ...routeProps
}) => {
  const isAuth = useSelector(getIsAuth);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth ? (
          <Redirect to={isMobileMedia ? '/main' : '/home'} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
