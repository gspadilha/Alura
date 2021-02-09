import React from "react";
import { HeaderContainer } from "./styles";

const links = [
  { texto: "Home", url: "/" },
  { texto: "Perguntas Frequentes", url: "/faq" },
  { texto: "Sobre", url: "/about" },
];

const Menu: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContainer.LeftSide>Logo</HeaderContainer.LeftSide>

      <HeaderContainer.CentralSide>
        {links.map((link) => {
          return (
            <li>
              <a href={link.url}>{link.texto}</a>
            </li>
          );
        })}
      </HeaderContainer.CentralSide>

      <HeaderContainer.RightSide>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </HeaderContainer.RightSide>
    </HeaderContainer>
  );
};

export default Menu;
