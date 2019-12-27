import * as React from 'react';
import styled from 'styled-components';
import Photo from './photo';
import SocialLinks from './social-links';

const photoSize = 140;
const iconSize = 40;
const photoTopOffset = photoSize * 1 / 3;

const Root = styled.div`
    background: ${p => p.theme.color.background};
    position: relative;
    padding: ${p => photoSize - photoTopOffset + 10 + p.theme.grid.gutter}px 0 ${p => p.theme.grid.gutter}px 0;
`;

//background - to prevent leaking of overlapped element between image and border
const PhotoContainer = styled.div` 
    position: absolute;    
    top: -${p => photoTopOffset + p.theme.grid.gutter}px;
    left: calc(50% - ${p => photoSize / 2 + p.theme.grid.gutter}px);
    background: ${props => props.theme.color.bodyBackground}; 
    border: solid ${p => p.theme.grid.gutter}px ${props => props.theme.color.bodyBackground};
    border-radius: 50%; 
    overflow:hidden;
`;
const Content = styled.div`
    grid-row: 2;
`;
const Social = styled.div`
    grid-row: 3;
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: ${p => p.theme.grid.gutter}px;
    justify-content: center;
    color: ${p => p.theme.color.secLink}
`;

const PersonCard = ({ children }) => {
    return (
        <Root>
            <PhotoContainer>
                <Photo size={photoSize} />
            </PhotoContainer>
            <Content>
                {children}
            </Content>
            <Social>
                <SocialLinks iconSize={iconSize}></SocialLinks>
            </Social>
        </Root>
    )
};

export default PersonCard;