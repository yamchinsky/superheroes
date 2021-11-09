import React, { Suspense } from 'react';
import { Switch } from 'react-router';
import { useLocation } from 'react-router-dom';

import AppLoader from '../../shared/components/loader/Loader';
import { mainRoutes } from '../../routes/mainRoutes';
import PrivateRoutes from '../../routes/PrivateRoutes';
import PublicRoutes from '../../routes/PublicRoutes';

import styles from './Main.module.scss';

const Main = () => {
  const location = useLocation();

  const isRegisterPage = location.pathname === '/';
  const classes = isRegisterPage ? styles.registerWrapper : styles.mainWrapper;

  return (
    <>
      <div className={classes}>
        <Suspense fallback={<AppLoader />}>
          <Switch>
            {mainRoutes.map(route =>
              route.isPrivate ? (
                <PrivateRoutes
                  {...route}
                  redirectTo={route.redirectTo}
                  key={route.name}
                />
              ) : (
                <PublicRoutes
                  {...route}
                  redirectTo={route.redirectTo}
                  key={route.name}
                />
              )
            )}
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default Main;
