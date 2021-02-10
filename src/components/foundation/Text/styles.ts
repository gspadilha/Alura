import styled, { css } from "styled-components";

interface ITextProps {
  tag: string;
  variant: string;
}

export const TextStyleVariantsMap: Record<string, any> = {
  smallestException: css`
    font-size: ${({ theme }) => theme.typography.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typography.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typography.smallestException.lineHeight};
  `,

  paragraph1: css`
    font-size: ${({ theme }) => theme.typography.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typography.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typography.paragraph1.lineHeight};
  `,
};

export const TextBase = styled.span<ITextProps>`
  ${(props) => TextStyleVariantsMap[props.variant]}
`;
