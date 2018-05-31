import * as React from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IAppReduxState } from 'shared/types/app';
import { actions, selectors } from './../../../redux';
import { ICommunication } from 'shared/types/redux';
import './LoginForm.scss';

import Input from 'shared/view/elements/input';
import Button from 'shared/view/elements/button';
import { ILogin } from 'shared/types/models';
import Preloader from 'shared/view/elements/preloader';

interface IStateProps {
  loginFormData: ILogin;
  communication: { authentication: ICommunication };
}

interface IActionProps {
  authentication: typeof actions.authentication;
  changeLoginEmail: typeof actions.changeLoginEmail;
  changeLoginPassword: typeof actions.changeLoginPassword;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    loginFormData: selectors.getLoginData(state),
    communication: selectors.getCommunicationsState(state),
  };
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionProps {
  return bindActionCreators({
    authentication: actions.authentication,
    changeLoginEmail: actions.changeLoginEmail,
    changeLoginPassword: actions.changeLoginPassword,
  }, dispatch);
}

type IProps = IStateProps & IActionProps;

class LoginForm extends React.Component<IProps> {
  public render() {
    const b = block('login-form');
    const authStatus = this.props.communication.authentication;
    const savedData = this.props.loginFormData;
    return (
      <div className={b()}>
        <form action="" method="post" onSubmit={this.onSubmit}>
          <fieldset className={b('row')()}>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={this.changeLoginEmail}
              disabled={authStatus.isRequesting}
              defaultValue={savedData.email}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.changeLoginPassword}
              disabled={authStatus.isRequesting}
              defaultValue={savedData.password}
              required
            />
          </fieldset>
          <div className={b('submit-button')()}>
            <Button type="submit">
              {authStatus.isRequesting ? <Preloader size="20" altColor/> : 'Login'}
            </Button>
          </div>
        </form>
        <div className={b('forgot-password')()}>
          <a className={b('forgot-password-link')()} href="/mock">Forgot password?</a>
        </div>
      </div>
    );
  }

  @bind
  private onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.authentication(this.props.loginFormData);
  }

  @bind
  private changeLoginEmail(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.changeLoginEmail(event.currentTarget.value);
  }

  @bind
  private changeLoginPassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.changeLoginPassword(event.currentTarget.value);
  }
}

export default connect(mapState, mapDispatch)(LoginForm);
