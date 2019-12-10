import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';

const Root = styled.nav`
`;

const TopMenu = () => {
    const themeContext = React.useContext(ThemeContext);
    return (
        <Container background={themeContext.color.background}>
            top menu
        </Container>
    );
};

export default TopMenu;