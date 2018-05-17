import * as React from 'react';
import block from 'bem-cn';

import './index.scss';
import { bind } from 'decko';

interface IProps {
  type: string;
  placeholder?: string;
  name?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  hidden?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IState {
  focused?: boolean;
  filled?: boolean;
}

class Input extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      focused: false,
      filled: false,
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
            type={props.type}
            name={props.name}
            minLength={props.minLength}
            maxLength={props.maxLength}
            step={props.step}
            disabled={props.disabled}
            pattern={props.pattern}
            required={props.required}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.isFilled}
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
  }

  @bind
  private onBlur(event: React.FocusEvent<HTMLInputElement>) {
    this.setState({focused: false});
  }

  @bind
  private isFilled(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      filled: event.target.value ? true : false,
    });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }
}

export default Input;
