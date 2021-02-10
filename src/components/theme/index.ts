import colors from "./colorVariants";
import typography from "./typographyVariants";

export const breakpoints = {
  xs: "0",
  sm: "480",
  md: "768",
  lg: "992",
  xl: "1200",
};

const theme = {
  colors,
  typography,
  breakpoints,
  borderRadius: "12px",
  transition: "200ms ease-in-out",
  fontFamily: "'Rubik', sans-serif",
};

type ThemeType = typeof theme;

export type { ThemeType };
export default theme;
