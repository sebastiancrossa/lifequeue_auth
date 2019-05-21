import React from 'react';
import styled from 'styled-components';

// Component Imports
import Logo from '../Logo/Logo';

const Wrapper = styled.div`
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

const Navbar = () => {
  return (
    <div>
      <Wrapper>
        <Logo />
        <nav>
          <ul>
            <li>MENU</li>
          </ul>
        </nav>
      </Wrapper>
    </div>
  );
};

export default Navbar;
