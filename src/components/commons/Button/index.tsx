import React, { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  ghost?: boolean;
  variant?: string;
  margin?: string | object;
  display?: string | object;
};

const Button: React.FC<IButtonProps> = ({
  label,
  ghost,
  variant,
  ...anotherProps
}) => {
  return (
    <ButtonContainer ghost={ghost} variant={variant} {...anotherProps}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
