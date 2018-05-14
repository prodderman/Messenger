import * as React from 'react';
import { Module } from 'shared/types/app';
import { ROUTES_PREFIX } from 'core/constants';

import { PrivateRoute } from 'services/PrivateRoute';
import Layout from './view/Layout/Layout';

class AuthorizationModule extends Module {
  public getRoutes() {
    // tslint:disable-next-line:max-line-length
    return <PrivateRoute exact key="authorization" path={`${ROUTES_PREFIX}/authorization/:tab(login|register)`} component={Layout} isLoginPage />;
  }
}

export default AuthorizationModule;
