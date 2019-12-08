import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme.bodyBackgroundColor};
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;