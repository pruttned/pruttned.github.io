import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    body {
        background: ${p => p.theme.color.bodyBackground};
        color: ${p => p.theme.color.text}
    }
    .token.keyword {
	    color: ${p => p.theme.color.primary};
    }
`;

export default GlobalStyle;