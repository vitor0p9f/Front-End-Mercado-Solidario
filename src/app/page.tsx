'use client'
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import { ThemeProvider } from "styled-components";
import { Login } from "../pages/Login";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  )
}      
