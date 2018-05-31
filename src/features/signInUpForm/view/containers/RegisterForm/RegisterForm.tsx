import * as React from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IAppReduxState } from 'shared/types/app';
import { actions, selectors } from './../../../redux';
import { ICommunication } from 'shared/types/redux';
import './RegisterForm.scss';

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

class RegisterForm extends React.Component<IProps> {

  public render() {
    const b = block('register-form');
    return (
      <div className={b()}>
        <form action="" method="post">
          <fieldset className={b('fieldset')()}>
            <Input placeholder="E-mail"/>
            <Input placeholder="Password"/>
            <Input placeholder="Confirm password"/>
          </fieldset>
          <div className={b('submit-button')()}>
            <Button type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(RegisterForm);
