import styled, { css } from "styled-components";
import { theme } from "../../theme";

interface IButtonProps {
  ghost?: boolean;
  variant?: string;
}

const ButtonGhost = css`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: transparent;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const ButtonDefault = css`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonContainer = styled.button<IButtonProps>`
  border: 0;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  border: 1px solid transparent;
  margin-right: 1px;
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
