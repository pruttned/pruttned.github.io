import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    display: grid;
    background: ${p => p.background || 'none'};
    grid-template-columns: auto minmax(0px, 1200px) auto;
`;

const Content = styled.div`
    grid-column: 2;
`;
const Container = ({ children, background }) => {
    return (
        <Root background={background}>
            <Content>
                {children}
            </Content>
        </Root>
    )
};

export default Container;