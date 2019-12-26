import * as React from 'react';
import styled, { css } from 'styled-components';

const Inner = styled.div`
    position: absolute;
    background: ${p => p.theme.color.primary};
    top: ${p => p.size / 5 * 2}px;
    height: ${p => p.size / 5}px;
    left: 0;
    width: 100%;
    transition: opacity 200ms ease;
`;

const Root = styled.div`
    position: relative;
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    cursor: pointer;
    &::before,
    &::after {
        display: block;
        position: absolute;
        background: ${p => p.theme.color.primary};
        height: ${p => p.size / 5}px;
        left: 0;
        width: 100%;
        content: '';
        transition: transform 200ms ease, top 100ms ease 100ms;
    }
    &::before {
        top: 0;
    }
    &::after {
        top: ${p => p.size / 5 * 4}px;
    }
    ${p => p.isOpen && css`
        ${Inner}{
            opacity: 0;
        }
        &::before,
        &::after {
            top: ${p => p.size / 5 * 2}px;
            transition: transform 100ms ease 100ms, top 200ms ease;
        }
        &::after {
            transform: rotate(45deg);
        }
        &::before {
            transform: rotate(-45deg);
        }
    `}
`;


const MenuButton = ({ isOpen = false, size = 40, className, onClick }) => {
    return (
        <Root className={className} size={size} onClick={onClick} isOpen={isOpen}>
            <Inner size={size}></Inner>
        </Root>
    )
}

export default MenuButton;