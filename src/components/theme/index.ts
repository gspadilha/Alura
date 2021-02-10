import colors from "./colorVariants";
import typography from "./typographyVariants";

const theme = {
  colors,
  typography,
  borderRadius: "12px",
  transition: "200ms ease-in-out",
  fontFamily: "'Rubik', sans-serif",
};

type ThemeType = typeof theme;

export type { ThemeType };
export default theme;
