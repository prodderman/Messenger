import * as React from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { RouteComponentProps } from 'react-router-dom';
import { ROUTES_PREFIX } from 'core/constants';

import './Form.scss';

interface ITabs {
  tab: 'login' | 'register';
}

type IProps = RouteComponentProps<ITabs>;

const b = block('form');

class Form extends React.PureComponent<IProps, {}> {
  public render() {
    const {match} = this.props;
    return (
      <div className={b()}>
        <ul className={b('tab-group')()}>
          <li
            onClick={this.swapForm}
            className={`${b('tab')()} ${match.params.tab === 'login' ? b('tab')({active: true}) : ''}`}
            data-tab="login"
          >Log In
          </li>
          <li
            onClick={this.swapForm}
            className={`${b('tab')()} ${match.params.tab === 'register' ? b('tab')({active: true}) : ''}`}
            data-tab="register"
          >Sing Up
          </li>
        </ul>
        {this.tabContent(match.params.tab)}
      </div>
    );
  }

  @bind
  private swapForm(event: React.MouseEvent<HTMLLIElement>) {
    this.props.history.replace(`./${event.currentTarget.getAttribute('data-tab')}`);
  }

  @bind
  private tabContent(tab: ITabs['tab']) {
    if (tab === 'login') {
      return (
        <div className={b('tab-content')()}>
          <div className={b('login')()}>
            <h1>Welcome Back!</h1>
            <form action="" method="post">
              <fieldset className={b('fields')()}>
                <div className={b('field')()}>
                  <label>
                    Email Address<span className={b('require')()}>*</span>
                  </label>
                  <input type="email"required/>
                </div>
                <div className={b('field')()}>
                  <label>
                    Password<span className={b('require')()}>*</span>
                  </label>
                  <input type="password"required/>
                </div>
              </fieldset>
              <button className={b('submit')()}>Log In</button>
            </form>
          </div>
        </div>);
    } else if (tab === 'register') {
      return null;
    }
    return null;
  }
}

export default Form;
