import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IAppReduxState } from 'shared/types/app';
import { actions, selectors } from './../../../redux';
import Preloader from 'shared/view/elements/preloader';

interface IStateProps {
  hasAccess: boolean | null;
}

interface IActionProps {
  authorization: typeof actions.authorization;
}

type IProps = IStateProps & IActionProps;

function mapState(state: IAppReduxState): IStateProps {
  const hasAccess = selectors.selectAccess(state.authWrapper);
  return {
    hasAccess,
  };
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionProps {
  return bindActionCreators({
    authorization: actions.authorization,
  }, dispatch);
}

class AuthWrapper extends React.PureComponent<IProps> {
  public componentWillMount() {
    if (this.props.hasAccess === null) {
      this.props.authorization();
    }
  }

  public render() {
    const children = this.props.children;
    const hasAccess = this.props.hasAccess;
    if (hasAccess !== null) {
      return children;
    } else {
      return <Preloader />;
    }
  }
}

export { AuthWrapper };
export default connect(mapState, mapDispatch)(AuthWrapper);
