import { ButtonProps } from '@src/types';
import { FC } from 'react';
import './index.css';

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { label, onClick } = props;
  return (
    <button type="button" className="glow-on-hover" onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
