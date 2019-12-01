import { createGlobalStyle } from 'styled-components';
import theme from '../theme';


const GlobalStyle = createGlobalStyle`
    body {
        background: ${theme.bodyBackgroundColor};
    }
`;

export default GlobalStyle;