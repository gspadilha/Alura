import colors from './color';
import typography from './typography';
import breakpoints from './breakpoints';

const theme = {
  mode: 'light',
  colors,
  typography,
  breakpoints,
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: "'Rubik', sans-serif",
};

type ThemeType = typeof theme;

export type { ThemeType };
export default theme;
