import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthWrapper } from 'services/AuthWrapper';
import { IAppData } from 'shared/types/app';

import createRoutes from './routes';

function App({ modules, store }: IAppData) {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <Router>{createRoutes(modules)}</Router>
      </AuthWrapper>
    </Provider>
  );
}

export default App;
