import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';

const Root = styled.aside`
    color: ${p => p.theme.color.invBackgroundText};
`;

const Footer = () => {
    const themeContext = React.useContext(ThemeContext);
    return (
        <Container background={themeContext.color.invBackground}>
            <Root>
                Footer
            </Root>
        </Container>
    );
};

export default Footer;