import * as React from 'react';
import styled from 'styled-components';
import { Link as GLink } from 'gatsby';

const Link = styled(GLink)`
    cursor: pointer;
    text-decoration: none;
    &, &:visited{
        color: currentColor;
    }
    &:hover, &:focus, &:active {
        color: ${p => p.theme.color.primary};
    }
`;

export default Link;