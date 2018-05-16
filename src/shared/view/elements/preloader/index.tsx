import * as React from 'react';
import block from 'bem-cn';
import './index.scss';

interface IProps {
  size?: number;
}

const b = block('preloader');
const Preloader = ({size = 65}: IProps) => (
  <div className={b()}>
    <svg
      className={b('view')()}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className={b('circle')()} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"/>
    </svg>
  </div>
);

export default Preloader;
