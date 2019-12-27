import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { rgba } from 'polished';

const ButtonLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    border: solid 1px ${p => p.theme.color.primary};
    padding: 5px 15px;
    transition: background-color 0.2s ease;
    &, &:visited {
        color: ${p => p.theme.color.primary};
        text-decoration: none;
    }
    &:hover, &:focus, &:active {
        color: ${p => p.theme.color.primary};
        background: ${p => rgba(p.theme.color.primary, 0.1)};
        text-decoration: none;
    }
`;

export default ButtonLink;