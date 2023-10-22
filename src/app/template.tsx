'use client'

import { GlobalStyle, StyledToastContainer } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import { ThemeProvider } from "styled-components";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <StyledToastContainer />
            {children}
        </ThemeProvider>
    )
}
