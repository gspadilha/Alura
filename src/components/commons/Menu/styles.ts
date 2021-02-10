import styled, { StyledComponentBase } from "styled-components";

interface IHeaderContainer extends StyledComponentBase<any, {}> {
  LeftSide?: any;
  CentralSide?: any;
  RightSide?: any;
}

export const HeaderContainer: IHeaderContainer = styled.nav`
  font-family: "Rubik", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

HeaderContainer.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
`;

HeaderContainer.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #88989e;
  padding: 0.75rem;

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;

    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`;

HeaderContainer.RightSide = styled.div`
  padding: 0;
  margin: 0;
  order: 2;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
