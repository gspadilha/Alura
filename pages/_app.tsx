import { NextRouter } from 'next/dist/next-server/lib/router/router';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { PropsWithChildren } from 'react';
import { GlobalStyle } from '../src/components/theme/GlobalStyle';
import { ThemeContextProvider } from '../src/contexts/ThemeContextProvider';

export default function App({
  Component,
  pageProps,
}: PropsWithChildren<AppPropsType<NextRouter, {}>>) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
