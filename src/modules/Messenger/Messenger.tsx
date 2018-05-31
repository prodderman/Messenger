import * as React from 'react';
import { Module } from 'shared/types/app';
import { ROUTES_PREFIX } from 'core/constants';
import { PrivateRoute } from 'services/PrivateRoute';
import Layout from './view/Layout/Layout';

class MessengerModule extends Module {
  public getRoutes() {
    return (
      <PrivateRoute
        exact
        key="im"
        path={`${ROUTES_PREFIX}/im`}
        redirectPath={`${ROUTES_PREFIX}/authentication`}
        component={Layout}
      />
    );
  }
}

export default MessengerModule;
