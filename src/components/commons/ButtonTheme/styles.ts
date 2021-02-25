import styled from 'styled-components';
import { getLodash } from '../../theme/utils/getLodash';

export const Container = styled.button`
  //position: fixed;
  border: 0;
  margin: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  z-index: 2;
  font-weight: bold;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) =>
    getLodash(theme, `colors.primary.${theme.mode}.color`)};
`;

export const AtivarModoLight = styled.span`
  display: ${({ theme }) => {
    return theme.mode === 'light' ? 'none' : 'flex';
  }};

  align-items: center;
  justify-content: center;
`;

export const AtivarModoDark = styled.span`
  display: ${({ theme }) => {
    return theme.mode === 'dark' ? 'none' : 'flex';
  }};

  align-items: center;
  justify-content: center;
`;
