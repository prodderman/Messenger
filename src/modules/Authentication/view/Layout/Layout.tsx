import * as React from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { featureConnect } from 'core';
import { RouteComponentProps } from 'react-router-dom';
import Preloader from 'shared/view/elements/preloader';
import { bindActionCreators, Dispatch } from 'redux';
import { IAppReduxState } from 'shared/types/app';

import * as signInUpForm from 'features/signInUpForm';
import {actions as authWrapperAction} from 'services/AuthWrapper';

import './Layout.scss';
import { connect } from 'react-redux';

interface IOwnProps {
  signInUpFormEntry: signInUpForm.Entry;
}

function mapState(state: IAppReduxState): {} {
  return {};
}

interface IActionProps {
  changeAccess: typeof authWrapperAction.changeAccess;
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionProps {
  return bindActionCreators({
    changeAccess: authWrapperAction.changeAccess,
  }, dispatch);
}

type IProps = IActionProps & IOwnProps & RouteComponentProps<signInUpForm.namespace.ITab>;

const b = block('authentication');

class AuthenticationLayout extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { SignInUpForm } = this.props.signInUpFormEntry.containers;
    const routeProps = this.props as RouteComponentProps<signInUpForm.namespace.ITab>;
    return (
      <div className={b()}>
        <SignInUpForm onAccessChange={this.onAccessChange} routeProps={routeProps} />
      </div>
    );
  }

  @bind
  private onAccessChange(hasAccess: boolean | null) {
    this.props.changeAccess(hasAccess);
  }
}

export default (
  featureConnect({ signInUpFormEntry: signInUpForm.loadEntry }, <Preloader />)(
    connect(mapState, mapDispatch)(AuthenticationLayout),
  )
);
