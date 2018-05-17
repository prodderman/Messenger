import * as React from 'react';
import block from 'bem-cn';

import './index.scss';

interface IProps {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

class Button extends React.Component<IProps, {}> {
  public render() {
    const b = block('button');
    const { type = 'button', disabled, onClick, children } = this.props;
    return (
      <button
        className={b()}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
