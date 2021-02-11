import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyles';

interface IBoxProps {
  flex?: string | object;
  display?: string | object;
  flexWrap?: string | object;
  flexDirection?: string | object;
  justifyContent?: string | object;
  alignItems?: string | object;
  backgroundImage?: string | object;
  backgroundRepeat?: string | object;
  backgroundPosition?: string | object;
}

export const Box = styled.div<IBoxProps>`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;
