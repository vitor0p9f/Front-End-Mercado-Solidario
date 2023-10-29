import { createGlobalStyle, styled } from "styled-components";

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

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.white};
`;

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
