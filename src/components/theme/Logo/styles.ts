import styled from 'styled-components';
import { getLodash } from '../utils/getLodash';

export const LogoContainer = styled.span`
  filter: ${({ theme }) => {
    return getLodash(theme, `colors.tertiary.main.${theme.mode}.filter`);
  }};
`;
