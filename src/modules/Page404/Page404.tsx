import * as React from 'react';
import { Module } from 'shared/types/app';
import { ROUTES_PREFIX } from 'core/constants';
import { Route } from 'react-router-dom';
import Layout from './view/Layout/Layout';

class Page404Module extends Module {
  public getRoutes() {
    return <Route key="page404" component={Layout} />;
  }
}

export default Page404Module;
