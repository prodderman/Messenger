import * as React from 'react';
import block from 'bem-cn';

import './index.scss';
import { bind } from 'decko';

type IProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface IState {
  focused?: boolean;
  filled?: boolean;
}

class Input extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      focused: false,
      filled: !!this.props.defaultValue,
    };
  }
  public render() {
    const b = block('input-group');
    const props = this.props;
    const state = this.state;
    return (
      <div className={b()}>
        <label className={b('label')()}>
          <input
            className={b('field')()}
            {...props}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onChange={this.isFilled}
            placeholder=""
          />
          <span className={b('placeholder', {focus: state.focused || state.filled ? true : false})()}>
            {props.placeholder}
          </span>
        </label>
      </div>
    );
  }

  @bind
  private onFocus(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({focused: true});
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  @bind
  private onBlur(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({focused: false});
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  @bind
  private isFilled(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({filled: event.target.value ? true : false});
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }
}

export default Input;
