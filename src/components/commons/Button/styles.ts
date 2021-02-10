import styled, { css } from "styled-components";
import get from "lodash/get";
import { TextStyleVariantsMap } from "../../foundation/Text/styles";
interface IButtonProps {
  ghost?: boolean;
  variant?: string;
}

const ButtonGhost = css<IButtonProps>`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;

  &:hover {
    border: 1px solid
      ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  }
`;

const ButtonDefault = css<IButtonProps>`
  color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) =>
    get(theme, `colors.${variant}.color`)};

  &:hover {
    border: 1px solid
      ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
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

  ${TextStyleVariantsMap.smallestException}

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
