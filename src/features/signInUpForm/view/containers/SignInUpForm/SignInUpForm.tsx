import * as React from 'react';
import * as block from 'bem-cn';
import { bind } from 'decko';
import { ROUTES_PREFIX } from 'core/constants';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Preloader from 'shared/view/elements/preloader';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import Input from 'shared/view/elements/input';

import { IAppReduxState } from 'shared/types/app';

import { IReduxState } from '../../../namespace';
// import { actions, selectors } from './../../../redux';

import './SignInUpForm.scss';

// interface IOwnProps {
//
// }

// interface IStateProps {

// }

// interface IActionProps {

// }

type IProps = RouteComponentProps<{}>;

function mapState(state: IAppReduxState): {} {
  return {};
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): {} {
  return bindActionCreators({}, dispatch);
}

const b = block('signinup-form');

class SignInUpForm extends React.PureComponent<IProps, {}> {
  public render() {
    const currentPath = this.props.match.url;
    const pathname = currentPath.substring(0, currentPath.lastIndexOf('/'));

    console.info(this.props.match);
    return (
      <div className={b()}>
        <ul className={b('tabs')()}>
          <li className={b('tab')()}>
            <a href="login" className={b('title')()} onClick={this.swapForm}>Log In</a>
          </li>
          <li className={b('tab')()}>
            <a href="register" className={b('title')()} onClick={this.swapForm}>Sign Up</a>
          </li>
          <div className={b('indicator')()}/>
        </ul>
        <Switch>
          <Route path={`${pathname}/login`} render={this.loginForm}/>
          <Route path={`${pathname}/register`} render={this.registerForm}/>
          <Redirect from={`${pathname}`} to={`${pathname}/login`}/>
        </Switch>
      </div>
    );
  }

  @bind
  private loginForm() {
    return (
      <div className={b('login')()}>
          <form action="" method="post">
            login
          </form>
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
    this.props.history.replace(`./${event.currentTarget.getAttribute('href')}`);
  }
}

export default connect<{}, {}, {}>(mapState, mapDispatch)(SignInUpForm);
