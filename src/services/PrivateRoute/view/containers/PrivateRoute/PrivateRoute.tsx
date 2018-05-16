import * as React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { ROUTES_PREFIX } from 'core/constants';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IAppReduxState } from 'shared/types/app';
import { ICommunication } from 'shared/types/redux';
import { IReduxState } from '../../../namespace';
import { actions, selectors } from './../../../redux';
import Preloader from 'shared/view/elements/preloader';

interface IOwnProps extends RouteProps {
  isLoginPage?: boolean;
  key?: React.Key;
}

interface IStateProps {
  hasAccess: boolean | null;
  communication: { authorization: ICommunication };
}

interface IActionProps {
  authorization: typeof actions.authorization;
}

type IProps = IStateProps & IActionProps & IOwnProps;

function mapState(state: IAppReduxState): IStateProps {
  const hasAccess = selectors.selectAccess(state.privateRoute);
  const communication = selectors.selectCommunication(state.privateRoute);
  return {
    hasAccess,
    communication,
  };
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionProps {
  return bindActionCreators({
    authorization: actions.authorization,
  }, dispatch);
}

class PrivateRoute extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public componentWillMount() {
    if (this.props.hasAccess === null) {
      this.props.authorization();
    }
  }

  public render() {
    const props = this.props;
    const isRequesting = this.props.communication.authorization.isRequesting;
    const hasAccess = this.props.hasAccess;
    const isLoginPage = this.props.isLoginPage;
    if (isRequesting) {
      return <Preloader />;
    }
    if (hasAccess) {
      if (isLoginPage) {
        return <Redirect to={`${ROUTES_PREFIX}/messenger`} />;
      } else {
        return <Route {...props} />;
      }
    } else {
      if (isLoginPage) {
        return <Route {...props} />;
      } else {
        return <Redirect to={`${ROUTES_PREFIX}/authentication/login`} />;
      }
    }
  }
}

export { PrivateRoute };
export default connect(mapState, mapDispatch)(PrivateRoute);
