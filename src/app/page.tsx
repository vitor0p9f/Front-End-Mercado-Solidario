"use client"
import Login from "@/pages/Login"
import { GlobalStyle } from "@/styles/global"
import { defaultTheme } from "@/styles/themes/default"
import { ThemeProvider } from "styled-components"

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  )
}      
