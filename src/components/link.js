
import styled from 'styled-components';

export const SecLink = styled.a`
    cursor: pointer;
    &, &:visited{
        color: ${props => props.theme.secLinkColor};
    }
    &:hover, &:focus, &:active {
        color: ${props => props.theme.primaryColor};
    }
`;