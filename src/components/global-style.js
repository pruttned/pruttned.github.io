import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${p => p.theme.color.bodyBackground};
        color: ${p => p.theme.color.text};
    }
    img, svg{
        vertical-align: middle;
    }
    .gatsby-highlight{
        margin-bottom: 1em;
        font-size: 0.8em;
    }
`;

export default GlobalStyle;