import React, { useState } from 'react';
import styled from 'styled-components';

// Component Imports
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Hamburger from './Hamburger/Hamburger';

const FixedWrapper = styled.header`
  position: fixed;

  display: flex;
  justify-content: space-between;

  top: 0;
  left: 0;

  background-color: var(--color-mainDark);
  padding: 0rem 2rem;
  z-index: 10;

  width: 100%;
  height: 6rem;

  display: none;

  @media ${props => props.theme.mediaQueries.small} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  padding-top: 0.4rem;
`;

const Menu = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-mainDark);

  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  visibility: ${props => (props.opened ? 'visible' : 'hidden')};
  transform: translateY(${props => (props.opened ? '0%' : '-100%')});
  transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  position: fixed;
  top: 0;
  left: 0;

  display: none;

  @media ${props => props.theme.mediaQueries.small} {
    display: flex;
  }
`;

const SideDrawer = ({ loggedIn }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <FixedWrapper>
        <Wrapper>
          <Logo />
          <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
        </Wrapper>
      </FixedWrapper>
      <Menu opened={isOpened}>
        <NavItems
          loggedIn={loggedIn}
          mobile
          clicked={() => setIsOpened(false)}
        />
      </Menu>
    </>
  );
};

export default SideDrawer;
