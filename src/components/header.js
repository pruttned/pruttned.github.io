import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';

const Root = styled.nav`
    min-height: 150px;
`;

const Header = () => {
    const themeContext = React.useContext(ThemeContext);
    return (
        <Container background={themeContext.color.primary}>
            <Root>
                header
            </Root>
        </Container>
    );
};

export default Header;