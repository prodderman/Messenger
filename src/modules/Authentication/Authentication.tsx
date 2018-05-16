import * as React from 'react';
import { Module } from 'shared/types/app';
import { ROUTES_PREFIX } from 'core/constants';

import { PrivateRoute } from 'services/PrivateRoute';
import Layout from './view/Layout/Layout';

class AuthenticationModule extends Module {
  public getRoutes() {
    // tslint:disable-next-line:max-line-length
    return <PrivateRoute exact key="authentication" path={`${ROUTES_PREFIX}/authentication/:tab`} component={Layout} isLoginPage />;
  }
}

export default AuthenticationModule;
