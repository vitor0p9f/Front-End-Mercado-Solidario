import { GlobalStyle } from "@/styles/global"
import { defaultTheme } from "@/styles/themes/default"
import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { ThemeProvider } from "styled-components"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

const renderWithTheme = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { renderWithTheme as render }

