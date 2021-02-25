import styled, { css } from 'styled-components';
import { getLodash } from '../../theme/utils/getLodash';
import { propToStyle } from '../../theme/utils/propToStyles';

interface ITextProps {
  variant: string;
  textAlign?: string | object;
  colorVariant?: string | object;
  marginBottom?: string | object;
  margin?: string | object;
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

  color: ${({ theme, colorVariant }) =>
    getLodash(theme, `colors.${colorVariant}.${theme.mode}.color`)};

  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;
