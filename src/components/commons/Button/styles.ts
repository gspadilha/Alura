import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text/styles';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../theme/utils/propToStyles';
import { getLodash } from '../../theme/utils/getLodash';
interface IButtonProps {
  ghost?: boolean;
  variant?: string;
  margin?: string | object;
  display?: string | object;
}

const ButtonGhost = css<IButtonProps>`
  color: ${({ theme, variant }) =>
    getLodash(theme, `colors.${variant}.${theme.mode}.color`)};
  background-color: transparent;

  &:hover {
    border: 1px solid
      ${({ theme, variant }) =>
        getLodash(theme, `colors.${variant}.${theme.mode}.color`)};
  }
`;

const ButtonDefault = css<IButtonProps>`
  color: ${({ theme, variant }) =>
    getLodash(theme, `colors.${variant}.${theme.mode}.contrastText`)};
  background-color: ${({ theme, variant }) =>
    getLodash(theme, `colors.${variant}.${theme.mode}.color`)};

  &:hover {
    border: 1px solid
      ${({ theme, variant }) =>
        getLodash(theme, `colors.${variant}.${theme.mode}.color`)};
  }
`;

export const ButtonContainer = styled.button<IButtonProps>`
  border: 0;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid transparent;
  margin-right: 1px;

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;
