import * as React from 'react';
import * as block from 'bem-cn';
import { bind } from 'decko';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import { IAppReduxState } from 'shared/types/app';
import { IReduxState, ITab } from '../../../namespace';
// import { actions, selectors } from './../../../redux';

import Preloader from 'shared/view/elements/preloader';
import Input from 'shared/view/elements/input';
import Button from 'shared/view/elements/button';

import './SignInUpForm.scss';

// interface IOwnProps {
//
// }

// interface IStateProps {

// }

// interface IActionProps {

// }

type IProps = RouteComponentProps<ITab>;

function mapState(state: IAppReduxState): {} {
  return {};
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): {} {
  return bindActionCreators({}, dispatch);
}

const b = block('signinup-form');

class SignInUpForm extends React.PureComponent<IProps, {}> {
  public render() {
    const match = this.props.match;
    const currentPath = this.props.match.url;
    const pathname = currentPath.substring(0, currentPath.lastIndexOf('/'));

    return (
      <div className={b()}>
        {/* <div className={b('loading')()}>
          <Preloader/>
        </div> */}
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
            <h2 className={b('title')()}>Log In</h2>
            <div className={b('row')()}>
              <Input type="email" name="email" placeholder="Email" required/>
            </div>
            <div className={b('row')()}>
              <Input type="password" name="password" placeholder="Password" required/>
            </div>
            <div className={b('footer')()}>
              <Button title="Submit" type="submit"/>
            </div>
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

  @bind
  private onSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
  }
}

export default connect<{}, {}, {}>(mapState, mapDispatch)(SignInUpForm);
