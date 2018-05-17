import * as React from 'react';
import block from 'bem-cn';

import './index.scss';

interface IProps {
  title?: string;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

class Button extends React.Component<IProps, {}> {
  public render() {
    const b = block('button');
    const { title, type = 'button', disabled, onSubmit } = this.props;
    return (
      <button
        className={b()}
        type={type}
        disabled={disabled}
        onSubmit={onSubmit}
      >
        {title}
      </button>
    );
  }
}

export default Button;
