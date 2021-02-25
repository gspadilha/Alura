import React, { useContext } from 'react';
import { ThemeChangerContext } from '../../../context/ThemeContextProvider';
import Link from '../../foundation/Link';
import { Logo } from '../../theme/Logo';

import Button from '../Button';
import ButtonTheme from '../ButtonTheme';
import { HeaderContainer } from './styles';

const links = [
  { texto: 'Home', url: '/' },
  { texto: 'Perguntas Frequentes', url: '/faq' },
  { texto: 'Sobre', url: '/about' },
];

const Menu: React.FC = () => {
  const { handleChangeMode } = useContext(ThemeChangerContext);

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
        <ButtonTheme onClick={handleChangeMode} />
      </HeaderContainer.RightSide>
    </HeaderContainer>
  );
};

export default Menu;
