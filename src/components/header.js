import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';

const Root = styled.nav`
`;

const Header = () => {
    const themeContext = React.useContext(ThemeContext);
    return (
        <Container background={themeContext.color.primary}>
            header
        </Container>
    );
};

export default Header;