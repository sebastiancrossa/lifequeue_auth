import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  height: 100%;
`;

const A = styled.a`
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
      <A href={link}>{children}</A>
    </Li>
  );
};

export default NavItem;
