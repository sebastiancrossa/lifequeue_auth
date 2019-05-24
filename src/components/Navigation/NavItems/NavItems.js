import React from 'react';
import styled from 'styled-components';

// Component Imports
import NavItem from './NavItem/NavItem';

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mobile ? 'column' : 'row')};
  align-items: center;
  height: 100%;
`;

const NavItems = ({ mobile, clicked }) => {
  return (
    <Nav>
      <Ul mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link='/'>
          Home
        </NavItem>
        <NavItem clicked={clicked} mobile={mobile} link='todos'>
          Todos
        </NavItem>
      </Ul>
    </Nav>
  );
};

export default NavItems;
