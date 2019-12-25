import { createGlobalStyle } from 'styled-components';

// height 100% - https://github.com/negomi/react-burger-menu/wiki/FAQ#my-page-content-is-still-scrollable-when-the-menu-is-open
const GlobalStyle = createGlobalStyle`
    body {
        background: ${p => p.theme.color.bodyBackground};
        color: ${p => p.theme.color.text}
    }
    body,
    html,
    #___gatsby,
    #gatsby-focus-wrapper {
        height: 100%;
    }
    .token.keyword {
	    color: ${p => p.theme.color.primary};
    }
`;

export default GlobalStyle;