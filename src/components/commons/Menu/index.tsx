import React from 'react';
import Link from '../../foundation/Link';
import { Logo } from '../../theme/Logo';

import Button from '../Button';
import { HeaderContainer } from './styles';

const links = [
  { texto: 'Home', url: '/' },
  { texto: 'Perguntas Frequentes', url: '/faq' },
  { texto: 'Sobre', url: '/about' },
];

const Menu: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContainer.LeftSide>
        <Logo />
      </HeaderContainer.LeftSide>

      <HeaderContainer.CentralSide>
        {links.map(link => {
          const { url, texto } = link;

          return (
            <li key={url}>
              <Link variant="smallestException" href={url}>
                {texto}
              </Link>
            </li>
          );
        })}
      </HeaderContainer.CentralSide>

      <HeaderContainer.RightSide>
        <Button label="Entrar" variant="secondary" ghost />
        <Button label="Cadastrar" variant="primary" />
      </HeaderContainer.RightSide>
    </HeaderContainer>
  );
};

export default Menu;
