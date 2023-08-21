'use client'
import { ThemeProvider } from "styled-components";
import { Login } from "../pages/Login";
import { GlobalStyle } from "../styles/global";
import { defaultTheme } from "../styles/themes/default";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  )
}
