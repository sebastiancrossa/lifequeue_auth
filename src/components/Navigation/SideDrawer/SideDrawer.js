import React, { useState } from 'react';
import styled from 'styled-components';

// Component Imports
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Hamburger from './Hamburger/Hamburger';

const FixedWrapper = styled.div`
  position: fixed;

  display: flex;
  justify-content: space-between;

  top: 0;
  left: 0;

  background-color: var(--color-main);
  padding: 0rem 2rem;

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

const SideDrawer = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <FixedWrapper>
      <Wrapper>
        <Logo />
        <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
      </Wrapper>
    </FixedWrapper>
  );
};

export default SideDrawer;
