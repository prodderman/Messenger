import * as React from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { Route, RouteComponentProps } from 'react-router-dom';

import Form from '../Form/Form';

import './Layout.scss';

interface ITabs {
  tab: 'login' | 'register';
}

type IProps = RouteComponentProps<ITabs>;

const b = block('authorization');

class AuthorizationLayout extends React.PureComponent<IProps, {}> {
  public render() {
    return (
      <div className={b()}>
        <Form {...this.props}/>
      </div>
    );
  }
}

export default AuthorizationLayout;
