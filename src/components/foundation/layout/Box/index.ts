import styled, { css } from 'styled-components';
import { getLodash } from '../../../theme/utils/getLodash';
import { propToStyle } from '../../../theme/utils/propToStyles';

interface IBoxProps {
  flex?: string | object;
  display?: string | object;
  flexWrap?: string | object;
  flexDirection?: string | object;
  justifyContent?: string | object;
  alignItems?: string | object;
  backgroundImage?: string | object;
  backgroundImageDark?: string | object;
  backgroundRepeat?: string | object;
  backgroundPosition?: string | object;
}

export const Box = styled.div<IBoxProps>`
  background-color: ${({ theme }) =>
    getLodash(theme, `colors.background.${theme.mode}.color`)};

  background-image: ${({ theme, backgroundImage, backgroundImageDark }) => {
    if (theme.mode === 'light') {
      return css`
        ${`${backgroundImage}`}
      `;
    }

    return `${backgroundImageDark}`;
  }};

  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  //${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;
