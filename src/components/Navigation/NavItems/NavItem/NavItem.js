import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;

  text-transform: uppercase;
  border-bottom: 2px solid transparent;

  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-white);

  padding: 1rem;
  margin: 0 1rem;

  transition: all 0.2s;

  &:hover {
    border-bottom: 2px soid var(--color-white);
  }
`;

const NavItem = ({ link, children }) => {
  return (
    <Li>
      <StyledNavLink to={link}>{children}</StyledNavLink>
    </Li>
  );
};

export default NavItem;
