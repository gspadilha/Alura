import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../components/theme';

interface IThemeContextProviderProps {
  children: ReactNode;
}

interface IThemeContextDataProps {
  handleChangeMode: () => void;
}

export const ThemeChangerContext = createContext({} as IThemeContextDataProps);

export const ThemeContextProvider = ({
  children,
}: IThemeContextProviderProps) => {
  const [themeModeIsLight, setThemeModeIsLight] = useState(true);
  const [themeSelected, setThemeSelected] = useState(theme);

  const handleChangeMode = () => {
    setThemeModeIsLight(currentState => !currentState);
  };

  useEffect(() => {
    setThemeSelected({
      ...theme,
      mode: themeModeIsLight ? 'light' : 'dark',
    });
  }, [themeModeIsLight]);

  return (
    <ThemeChangerContext.Provider value={{ handleChangeMode }}>
      <ThemeProvider theme={themeSelected}>{children}</ThemeProvider>
    </ThemeChangerContext.Provider>
  );
};
