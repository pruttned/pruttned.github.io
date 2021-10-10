import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${p => p.theme.color.bodyBackground};
        color: ${p => p.theme.color.text};
    }
    blockquote{
        border-left: 5px solid ${p => p.theme.color.blockquote};
        margin: 0 0 1.666rem 0;
        padding: 0 0 0 1.666rem;
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