import * as React from 'react';
import block from 'bem-cn';
import { bind } from 'decko';

import './Layout.scss';

interface IProps {
  startWidth?: string;
}

interface IState {
  width: string;
  isPressed: boolean;
}

class MessengerLayout extends React.PureComponent<IProps, IState> {
  private b = block('messenger');
  private resizableContainer: HTMLDivElement | null = null;
  private splitter: HTMLDivElement | null = null;
  private parentContainer: HTMLDivElement | null = null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      width: props.startWidth !== undefined ? props.startWidth : '25%',
      isPressed: false,
    };
  }

  public render() {
    const b = this.b;
    const { width } = this.state;

    return(
      <div className={b()} ref={(parentContainer) => { this.parentContainer = parentContainer as HTMLDivElement; }}>
        <div
          className={b('users-list')()}
          style={{width: `${width}`}}
          ref={(resizableContainer) => { this.resizableContainer = resizableContainer as HTMLDivElement; }}
        >
          users
        </div>
        <div
          onMouseDown={this.startDragging}
          className={b('splitter')()}
          ref={(splitter) => { this.splitter = splitter as HTMLDivElement; }}
        />
        <div className={b('messages')()}>
          messages
        </div>
      </div>
    );
  }

  @bind
  private startDragging() {
    document.addEventListener('mouseup', this.stopDragging);
    document.addEventListener('mousemove', this.handleDragging);
    this.setState({isPressed: true});
  }

  @bind
  private stopDragging(event: MouseEvent | TouchEvent) {
    this.setState({isPressed: false});
    document.removeEventListener('mouseup', this.stopDragging);
    document.removeEventListener('mousemove', this.handleDragging);
  }

  @bind
  private handleDragging(event: MouseEvent | TouchEvent) {
    if (this.state.isPressed) {
      const parentContainerWidth = (this.parentContainer as HTMLDivElement).clientWidth;
      console.log(this.resizableContainer, this.splitter);

      if (event instanceof MouseEvent) {
        const offset = event.clientX * 100 / parentContainerWidth;
        this.setState({width: `${offset}%`});
      }
    }
  }
}

export default MessengerLayout;
