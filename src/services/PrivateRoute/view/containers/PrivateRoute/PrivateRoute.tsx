import * as React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { ROUTES_PREFIX } from 'core/constants';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IAppReduxState } from 'shared/types/app';
import { ICommunication } from 'shared/types/redux';
import { IReduxState } from '../../../namespace';
import { actions, selectors } from './../../../redux';

interface IOwnProps extends RouteProps {
  isLoginPage?: boolean;
  key?: React.Key;
}

interface IStateProps {
  isLogin: boolean | null;
  communication: { cookieFetching: ICommunication };
}

interface IActionProps {
  loadCookie: typeof actions.loadCookie;
}

type IProps = IStateProps & IActionProps & IOwnProps;

function mapState(state: IAppReduxState): IStateProps {
  const isLogin = selectors.selectLogin(state.privateRoute);
  const communication = selectors.selectCommunication(state.privateRoute);
  return {
    isLogin,
    communication,
  };
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionProps {
  return bindActionCreators({
    loadCookie: actions.loadCookie,
  }, dispatch);
}

class PrivateRoute extends React.Component<IProps, {}> {
  public componentWillMount() {
    if (this.props.isLogin === null) {
      this.props.loadCookie();
    }
  }

  public render() {
    const props = this.props;
    const isRequesting = this.props.communication.cookieFetching.isRequesting;
    const isLogin = this.props.isLogin;
    const isLoginPage = this.props.isLoginPage;
    if (isRequesting) {
      return <h1>preloader</h1>;
    }
    if (isLogin) {
      if (isLoginPage) {
        return <Redirect to={`${ROUTES_PREFIX}/messenger`} />;
      } else {
        return <Route {...props} />;
      }
    } else {
      if (isLoginPage) {
        return <Route {...props} />;
      } else {
        return <Redirect to={`${ROUTES_PREFIX}/authorization/login`} />;
      }
    }
  }
}

export { PrivateRoute };
export default connect(mapState, mapDispatch)(PrivateRoute);
