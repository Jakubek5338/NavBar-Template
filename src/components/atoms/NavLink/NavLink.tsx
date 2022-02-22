import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import styled from 'styled-components';

interface NavLinkProps extends LinkProps {
  isDown: boolean;
}

const StyledLink = styled(Link)<NavLinkProps>`
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  position: relative;
  color: ${({ isDown }) => (isDown ? 'black' : 'white')};
  &:hover {
    color: #3486dd;
  }

  &::before {
    content: '';
    width: 130%;
    height: 3px;
    border-radius: 5px;
    background-color: #3486dd;
    position: absolute;
    top: 110%;
    left: -15%;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &.active {
    color: #3486dd;
  }
  color: ${({ isDown }) => (isDown ? 'black' : 'white')};
`;

function NavLink({ children, to, isDown, ...props }: NavLinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <StyledLink className={match ? 'active' : ''} to={to} {...props} isDown={isDown}>
      {children}
    </StyledLink>
  );
}

export default NavLink;
