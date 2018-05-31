import * as React from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { IAppReduxState } from 'shared/types/app';
import {actions as authWrapperAction} from 'services/AuthWrapper';
import { Dispatch, bindActionCreators } from 'redux';

import './Layout.scss';
import { connect } from 'react-redux';

function mapState(state: IAppReduxState): {} {
  return {};
}

interface IActionProps {
  logOutCommunications: typeof authWrapperAction.logOut;
}

function mapDispatch(dispatch: Dispatch<IAppReduxState>): IActionProps {
  return bindActionCreators({
    logOutCommunications: authWrapperAction.logOut,
  }, dispatch);
}

type IProps = IActionProps;

class MessengerLayout extends React.PureComponent<IProps> {
  public render() {
    const b = block('messenger');
    const props = this.props;

    return(
      <div className={b()}>
        <button onClick={this.logOut}>Log Out</button>
        <div className={b('users-list')()}>
          users
        </div>
        <div className={b('splitter')()}/>
        <div className={b('messages')()}>
          messages
        </div>
      </div>
    );
  }

  @bind
  private logOut() {
    this.props.logOutCommunications();
  }
}

export default connect(mapState, mapDispatch)(MessengerLayout);
