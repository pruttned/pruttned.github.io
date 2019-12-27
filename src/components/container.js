import * as React from 'react';
import styled from 'styled-components';
const Root = styled.div`
    display: grid;
    background: ${p => p.background || 'none'};
    grid-template-columns: auto [content-start] minmax(0px, ${p => p.narrow ? `680px` : `1000px`}) [content-end] auto;
`;

const Content = styled.div`
    grid-column: content-start / content-end ;
    padding: 0 ${p => p.noPadding ? '0' : `${p.theme.grid.gutter}px`};
    background: ${p => p.background || 'none'};
    border-bottom: ${p => p.bottomBorder ? p.theme.card.bottomBorder : 'none'} ;
`;
const Container = ({ children, background, contentBackground, narrow = false, noPadding = false, bottomBorder = false }) => {
    return (
        <Root background={background} narrow={narrow}>
            <Content background={contentBackground} noPadding={noPadding} bottomBorder={bottomBorder}>
                {children}
            </Content>
        </Root>
    )
};

export default Container;