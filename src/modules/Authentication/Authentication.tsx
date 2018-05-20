import * as React from 'react';
import { Module } from 'shared/types/app';
import { ROUTES_PREFIX } from 'core/constants';

import { PrivateRoute } from 'services/PrivateRoute';
import Layout from './view/Layout/Layout';

class AuthenticationModule extends Module {
  public getRoutes() {
    return (
      <PrivateRoute
        key="authentication"
        path={`${ROUTES_PREFIX}/authentication/:tab`}
        redirectPath={`${ROUTES_PREFIX}/messenger`}
        component={Layout}
        isLoginPage
      />
    );
  }
}

export default AuthenticationModule;
