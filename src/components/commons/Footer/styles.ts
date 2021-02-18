import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text/styles';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { getLodash } from '../../theme/utils/getLodash';

export const FooterContainer = styled.footer`
  padding: 1rem 1.5rem 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) =>
    getLodash(theme, `colors.tertiary.main.${theme.mode}.color`)};

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: ${({ theme }) =>
      getLodash(theme, `colors.primary.${theme.mode}.color`)};
    text-decoration: none;
    transition: 0.3s;

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
`;
