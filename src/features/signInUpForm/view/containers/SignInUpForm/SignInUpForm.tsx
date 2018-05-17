import * as React from 'react';
import * as block from 'bem-cn';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import { IAppReduxState } from 'shared/types/app';
import { IReduxState, ITab } from '../../../namespace';
import { actions, selectors } from './../../../redux';
import { ICommunication } from 'shared/types/redux';

import Preloader from 'shared/view/elements/preloader';
import LoginForm from '../LoginForm/LoginForm';
import { ILogin } from 'shared/types/models';

import './SignInUpForm.scss';

interface IOwnProps {
  routeProps: RouteComponentProps<ITab>;
  onAccessChange: (hasAccess: boolean | null) => void;
}

interface IStateProps {
  communication: { authentication: ICommunication };
  authData: IReduxState['data'];
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    communication: selectors.getCommunicationsState(state),
    authData: selectors.getDataState(state),
  };
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): {} {
  return bindActionCreators({}, dispatch);
}

type IProps = IOwnProps & IStateProps;

const b = block('signinup-form');

class SignInUpForm extends React.PureComponent<IProps> {
  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.authData.hasAccess !== this.props.authData.hasAccess) {
      this.props.onAccessChange(nextProps.authData.hasAccess);
    }
  }

  public render() {
    const match = this.props.routeProps.match;
    const currentPath = this.props.routeProps.match.url;
    const pathname = currentPath.substring(0, currentPath.lastIndexOf('/'));

    return (
      <div className={b()}>
        <ul className={b('tabs')()}>
          <li className={b('tab')()}>
            <a
              href="login"
              className={b('tab-title', {active: match.params.tab === 'login' ? true : false})()}
              onClick={this.swapForm}
            >
              Log In
            </a>
          </li>
          <li className={b('tab')()}>
            <a
              href="register"
              className={b('tab-title', {active: match.params.tab === 'register' ? true : false})()}
              onClick={this.swapForm}
            >
              Sign Up
            </a>
          </li>
          <div className={b('indicator')()}/>
        </ul>
        <Switch>
          <Route path={`${pathname}/login`}><LoginForm /></Route>
          <Route path={`${pathname}/register`} render={this.registerForm}/>
          <Redirect from={`${pathname}`} to={`${pathname}/login`}/>
        </Switch>
      </div>
    );
  }

  @bind
  private registerForm() {
    return (
      <div className={b('signup')()}>
          <form action="" method="post">
            reg
          </form>
        </div>
    );
  }

  @bind
  private swapForm(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    this.props.routeProps.history.replace(`./${event.currentTarget.getAttribute('href')}`);
  }
}

export default connect(mapState, {})(SignInUpForm);
