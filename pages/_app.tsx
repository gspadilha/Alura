import { NextRouter } from 'next/dist/next-server/lib/router/router';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { PropsWithChildren, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/components/theme/GlobalStyle';
import theme from '../src/components/theme';
import ChangeThemeMode from '../src/components/commons/ChangeThemeMode';

export default function App({
  Component,
  pageProps,
}: PropsWithChildren<AppPropsType<NextRouter, {}>>) {
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
    <>
      <ThemeProvider theme={themeSelected}>
        <GlobalStyle />
        <ChangeThemeMode onClick={handleChangeMode}>Teste</ChangeThemeMode>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
