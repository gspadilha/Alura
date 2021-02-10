import styled, { css, StyledComponentBase } from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text/styles';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

interface IHeaderContainer extends StyledComponentBase<any, {}> {
  LeftSide?: any;
  CentralSide?: any;
  RightSide?: any;
}

export const HeaderContainer: IHeaderContainer = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

HeaderContainer.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;

  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
    `,
  })}

  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
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

  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;

    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.smallestException}
      `,
      md: css`
        ${TextStyleVariantsMap.paragraph1}
      `,
    })}

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

  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;
