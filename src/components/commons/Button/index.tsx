import React, { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  ghost?: boolean;
  variant?: string;
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
