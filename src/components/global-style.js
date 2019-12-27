import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${p => p.theme.color.bodyBackground};
        color: ${p => p.theme.color.text};
    }
`;

export default GlobalStyle;