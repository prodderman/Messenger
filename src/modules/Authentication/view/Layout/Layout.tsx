import * as React from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { featureConnect } from 'core';
import { Route, RouteComponentProps } from 'react-router-dom';
import Preloader from 'shared/view/elements/preloader';

import * as signInUpForm from 'features/signInUpForm';

import './Layout.scss';

interface IOwnProps {
  signInUpFormEntry: signInUpForm.Entry;
}

type IProps = IOwnProps & RouteComponentProps<signInUpForm.namespace.ITab>;

const b = block('authentication');

class AuthenticationLayout extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { SignInUpForm } = this.props.signInUpFormEntry.containers;
    return (
      <div className={b()}>
        <SignInUpForm {...this.props}/>
      </div>
    );
  }
}

export default (
  featureConnect({ signInUpFormEntry: signInUpForm.loadEntry }, <Preloader />)(
    AuthenticationLayout,
  )
);
