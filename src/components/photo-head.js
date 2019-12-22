import * as React from 'react';
import styled from 'styled-components';
import Photo from './photo';

const photoSize = 140;

const Root = styled.div`
    position: absolute;    
    top: -${p => photoSize / 2 + p.theme.grid.gutter}px;
    left: calc(50% - ${p => photoSize / 2 + p.theme.grid.gutter}px);
    border: solid ${p => p.theme.grid.gutter}px ${props => props.theme.color.bodyBackground};
    border-radius: 50%; 
    overflow:hidden;
`;

const PhotoHead = () => {
    return (
        <Root>
            <Photo size={photoSize} />
        </Root>
    )
};

export default PersonAside;