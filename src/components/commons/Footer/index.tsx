import React from 'react';
import { FooterContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo.svg"
          alt="Logo Alura"
        />
      </a>

      <p>
        Orgulhosamente criado por{' '}
        <a href="https://gspadilha.dev.br/">
          <span>Guilherme Padilha</span>
        </a>{' '}
        durante o{' '}
        <a href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
