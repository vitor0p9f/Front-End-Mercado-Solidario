'use client'

import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import { ThemeProvider } from "styled-components";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}