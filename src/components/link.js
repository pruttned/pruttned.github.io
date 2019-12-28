import styled from 'styled-components';
import { Link as GLink } from 'gatsby';

const Link = styled(GLink)`
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s ease;
    &, &:visited{
        color: ${p => p.inText ? p.theme.color.primary : 'currentColor'} ;
        text-decoration: none;
    }
    &:hover, &:focus, &:active {
        color: ${p => p.theme.color.primary};
        text-decoration: ${p => p.inText ? 'underline' : 'none'} ;
    }
`;

export default Link;