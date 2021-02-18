import React, { ButtonHTMLAttributes } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';

import { Container, AtivarModoLight, AtivarModoDark } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const ChangeThemeMode: React.FC<ButtonProps> = ({
  loading,
  ...anotherProps
}) => {
  return (
    <Container {...anotherProps}>
      <AtivarModoLight>
        <HiOutlineLightBulb color="white" />
      </AtivarModoLight>

      <AtivarModoDark>
        <FaLightbulb color="black" />
      </AtivarModoDark>
    </Container>
  );
};

export default ChangeThemeMode;
