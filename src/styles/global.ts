import { createGlobalStyle, styled } from "styled-components";

const sizes = {
    mobile: '430px',
    tablet: '768px',
    laptop: '1024px',
};

export const devices = {
    mobile: `(min-width: ${sizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
};

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 :focus {
    outline: 0;
    box-shadow:0 0 0 2 ${props => props.theme['Highlight']}
}

body {
    background-color: ${props => props.theme['Foreground']};
    color: ${props => props.theme['black']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font: 400, 1rem Roboto, sans-serif;
}
`;

type PageContainerProps = {
    $horizontalPadding?: number
}

export const PageContainer = styled.div<PageContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.white};
    padding-left: ${props => (props.$horizontalPadding ? (props.$horizontalPadding - 1) : 0)}rem;
    padding-right: ${props => (props.$horizontalPadding ? (props.$horizontalPadding - 1) : 0)}rem;

    @media ${devices.laptop} {
        padding-left: ${props => (props.$horizontalPadding || 0)}rem;
        padding-right: ${props => (props.$horizontalPadding || 0)}rem;
     }
`;
