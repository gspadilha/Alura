import { NextRouter } from "next/dist/next-server/lib/router/router";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../src/styles/globalStyle";

export default function App({
  Component,
  pageProps,
}: PropsWithChildren<AppPropsType<NextRouter, {}>>) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
