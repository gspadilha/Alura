import styled, { css } from 'styled-components';
import { propToStyle } from '../../theme/utils/propToStyles';

interface ITextProps {
  tag: string;
  variant: string;
  textAlign?: Record<string, string>;
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
  ${props => TextStyleVariantsMap[props.variant]}

  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;
