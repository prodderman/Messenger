import * as React from 'react';
import block from 'bem-cn';
import { bind } from 'decko';

import './Layout.scss';

class Page404Layout extends React.PureComponent<{}, {}> {
  private b = block('page404');

  public render() {
    const b = this.b;
    return(
      <h1>404</h1>
    );
  }
}

export default Page404Layout;
