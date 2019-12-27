import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { TwitterIcon, LinkedinIcon, GithubIcon } from './icon';
import ExtLink from './ext-link';
import styled from 'styled-components';

const Link = styled(ExtLink)`
    &, &:visited{
        color: currentColor;
        text-decoration: none;
    }
    &:hover, &:focus, &:active {
        color: ${p => p.theme.color.primary};
        text-decoration: none;
    }
;`

const SocialLinks = ({ iconSize, color }) => {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            twitter
            linkedIn
            github
          }
        }
      }
    `
    );
    const { twitter, linkedIn, github } = site.siteMetadata;

    return (
        <>
            <Link href={twitter}>
                <TwitterIcon size={iconSize} />
            </Link>
            <Link href={github}>
                <GithubIcon size={iconSize} />
            </Link>
            <Link href={linkedIn}>
                <LinkedinIcon size={iconSize} />
            </Link>
        </>
    )
};

export default SocialLinks;