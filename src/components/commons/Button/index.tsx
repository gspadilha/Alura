import React from "react";
import { ButtonContainer } from "./styles";

interface IButton {
  label: string;
  ghost?: boolean;
  variant?: string;
  children?: React.ReactNode;
}

const Button: React.FC<IButton> = ({
  label,
  ghost,
  variant,
  ...anotherProps
}) => {
  return (
    <ButtonContainer ghost={ghost} variant={variant}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
