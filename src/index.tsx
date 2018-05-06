import * as React from 'react';
import * as ReactDOM from 'react-dom';

import configureApp from 'core/configureApp';
import { AppContainer } from 'react-hot-loader';
import App from 'core/App';

let appData = configureApp();
const render = (component: React.ReactElement<any>) => ReactDOM.render(
  <AppContainer>{component}</AppContainer>,
  document.getElementById('root'),
);

render(<App modules={appData.modules} store={appData.store} />);

if ((module as any).hot && process.env.NODE_ENV !== 'production') {
  (module as any).hot.accept(['./core/App', './core/configureApp'], () => {
    const nextConfigureApp: typeof configureApp = require('./core/configureApp').default;
    const NextApp: typeof App = require('./core/App').default;
    appData = nextConfigureApp(appData);
    render(<NextApp modules={appData.modules} store={appData.store} />);
  });
}
