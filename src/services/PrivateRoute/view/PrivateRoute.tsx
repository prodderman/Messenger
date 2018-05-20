import * as React from 'react';
import { RouteComponentProps, RouteProps, Route, Redirect } from 'react-router-dom';
import { bind } from 'decko';
import { IAppReduxState } from 'shared/types/app';
import { connect } from 'react-redux';

interface IOwnProps {
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  redirectPath: string;
  isLoginPage?: boolean;
  key?: React.Key;
}

interface IStateProps {
  hasAccess: boolean | null;
}

type IProps = IOwnProps & IStateProps & RouteProps;

function mapState(state: IAppReduxState): IStateProps {
  const hasAccess = state.authWrapper.data.hasAccess;
  return {
    hasAccess,
  };
}

class PrivateRoute extends React.Component<IProps> {
  public render() {
    const props = this.props as RouteProps;
    const hasAccess = !!this.props.hasAccess;
    const isLoginPage = !!this.props.isLoginPage;
    const renderVar = hasAccess !== isLoginPage;
    return (
      renderVar ? (
        <Route {...props}/>
      ) : (
        <Redirect to={this.props.redirectPath}/>
      )
    );
  }
}

export { PrivateRoute };
export default connect(mapState)(PrivateRoute);
