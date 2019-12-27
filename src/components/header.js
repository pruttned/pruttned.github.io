import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Container from './container';
import { LogoIcon } from './icon';

const Root = styled.div`
    display:grid;
    justify-content: center;
    align-content: center;
    justify-items: center;
    row-gap: 10px;
    min-height: 180px;
    color: ${p => p.theme.color.invText}
`;

const H1 = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    max-width: 600px; 
`;

const Header = ({ title }) => {
    const themeContext = React.useContext(ThemeContext);
    return (
        <Container background={themeContext.color.primary}>
            <Root>
                {(title &&
                    (<H1>{title}</H1>)) ||
                    (
                        <>
                            <LogoIcon size="52"></LogoIcon>
                            <div>My dev blog</div>
                        </>
                    )
                }
            </Root>
        </Container >
    );
};

export default Header;