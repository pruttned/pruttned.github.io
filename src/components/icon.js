import React from 'react';
import facebookIcon from '../assets/facebook.svg';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import logoIcon from '../assets/logo.svg';
import styled from 'styled-components';

const Svg = styled.svg`
    width: ${props => props.size || 32}px;
    height: ${props => props.size || 32}px;
`;

const Icon = (id) => ({ size }) => {
    return (
        <Svg size={size}>
            <use xlinkHref={`#${id}`} />
        </Svg>
    );
};

export const FacebookIcon = Icon(facebookIcon.id);
export const GithubIcon = Icon(githubIcon.id);
export const LinkedinIcon = Icon(linkedinIcon.id);
export const LogoIcon = Icon(logoIcon.id);