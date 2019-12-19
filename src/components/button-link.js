import * as React from 'react';
import styled from 'styled-components';
import { Link as GLink } from 'gatsby';
import { rgba } from 'polished';

const ButtonLink = styled(GLink)`
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    border: solid 1px ${p => p.theme.color.primary};
    padding: 5px 15px;
    &, &:visited{
        color: ${p => p.theme.color.primary};
    }
    &:hover, &:focus, &:active {
        color: ${p => p.theme.color.primary};
        background: ${p => rgba(p.theme.color.primary, 0.1)};
    }
`;

export default ButtonLink;