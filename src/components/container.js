import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    display: grid;
    background: ${p => p.background || 'none'};
    grid-template-columns: minmax(20px, auto) minmax(0px, ${p => p.narrow ? `680px` : `1200px`}) minmax(20px, auto);
`;

const Content = styled.div`
    grid-column: 2;
`;
const Container = ({ children, background, narrow = false }) => {
    return (
        <Root background={background} narrow={narrow}>
            <Content>
                {children}
            </Content>
        </Root>
    )
};

export default Container;