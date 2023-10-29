'use client'

import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <ToastContainer />
            {children}
        </ThemeProvider>
    )
}
