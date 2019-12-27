import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background: ${p => p.theme.color.bodyBackground};
        color: ${p => p.theme.color.text};
    }
    a {
        &, &:visited{
            text-decoration: none;
            color: ${p => p.theme.color.primary};
        }
        &:hover, &:focus, &:active {
            text-decoration: underline;
            color: ${p => p.theme.color.primary};
        }
    }
`;

export default GlobalStyle;