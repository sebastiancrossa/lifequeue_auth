import React from 'react';
import styled from 'styled-components';

// Component Imports
import Logo from '../../Logo/Logo';
import Container from '../../../hoc/layout/elements/Container';
import NavItems from '../NavItems/NavItems';

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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.4rem;
`;

const Navbar = () => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavItems />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
