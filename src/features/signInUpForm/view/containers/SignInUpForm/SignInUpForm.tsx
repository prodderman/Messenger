import * as React from 'react';
import * as block from 'bem-cn';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { IAppReduxState } from 'shared/types/app';
import { IReduxState, ITab, IFormActive } from '../../../namespace';
import { actions, selectors } from './../../../redux';
import { ICommunication } from 'shared/types/redux';
import Preloader from 'shared/view/elements/preloader';

import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

import './SignInUpForm.scss';

interface IOwnProps {
  routeProps: RouteComponentProps<ITab>;
  onAccessChange: (hasAccess: boolean | null) => void;
}

interface IStateProps {
  communication: { authentication: ICommunication };
  activeForm: IFormActive;
  authData: IReduxState['data'];
}

interface IActionsProps {
  resetLogin: typeof actions.resetLogin;
  chooseTab: typeof actions.chooseTab;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    communication: selectors.getCommunicationsState(state),
    activeForm: selectors.getActiveFormState(state),
    authData: selectors.getDataState(state),
  };
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionsProps {
  return bindActionCreators({
    resetLogin: actions.resetLogin,
    chooseTab: actions.chooseTab,
  }, dispatch);
}

type IProps = IOwnProps & IStateProps & IActionsProps;

const b = block('signinup-form');

class SignInUpForm extends React.PureComponent<IProps> {
  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.authData.hasAccess) {
      this.props.onAccessChange(nextProps.authData.hasAccess);
      this.props.resetLogin();
    }
  }

  public render() {
    const activeForm = this.props.activeForm;

    return (
      <div className={b()}>
        <h2>Sign in</h2>
        <p>Please choose your country and enter your full phone number.</p>
      </div>
    );
  }

  @bind
  private renderFrom() {
    const activeFrom = this.props.activeForm;
    switch (activeFrom) {
      case 'login':
       return <LoginForm/>;
      case 'register':
        return <RegisterForm/>;
      case 'forgot':
      default:
        return <Preloader/>;
    }
  }

  @bind
  private swapForm(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (href && href !== this.props.activeForm) {
      this.props.routeProps.history.replace({search: `?${href}`});
      this.props.chooseTab(href as IFormActive);
    }
  }
}

export default connect(mapState, mapDispatch)(SignInUpForm);
