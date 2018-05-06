import * as React from 'react';
import { Module } from 'shared/types/app';
import { ROUTES_PREFIX } from 'core/constants';
import { Route } from 'react-router-dom';
import Layout from './view/Layout/Layout';

class MessengerModule extends Module {
  public getRoutes() {
    return <Route key="messenger" path={`${ROUTES_PREFIX}/messenger`} component={Layout} />;
  }
}

export default MessengerModule;
