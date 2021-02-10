import React from "react";
import Button from "../Button";
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
          const { url, texto } = link;

          return (
            <li key={url}>
              <a href={url}>{texto}</a>
            </li>
          );
        })}
      </HeaderContainer.CentralSide>

      <HeaderContainer.RightSide>
        <Button ghost label={"Entrar"} />
        <Button label={"Cadastrar"} />
      </HeaderContainer.RightSide>
    </HeaderContainer>
  );
};

export default Menu;
