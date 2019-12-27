import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${p => p.theme.color.bodyBackground};
        color: ${p => p.theme.color.text};
    }
    img, svg{
        vertical-align: middle;
    }
`;

export default GlobalStyle;