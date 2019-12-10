
import styled from 'styled-components';

export const SecLink = styled.a`
    cursor: pointer;
    &, &:visited{
        color: ${p => p.theme.color.secLink};
    }
    &:hover, &:focus, &:active {
        color: ${p => p.theme.color.primary};
    }
`;