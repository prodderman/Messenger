import * as React from 'react';
import { Module } from 'shared/types/app';

import { Route } from 'react-router-dom';
import Layout from './view/Layout/Layout';

class MessengerModule extends Module {
  public getRoutes() {
    return <Route key="messenger" path={`/messenger`} component={Layout} />;
  }
}

export default MessengerModule;
