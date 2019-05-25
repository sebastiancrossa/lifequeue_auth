import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  outline: none;

  padding: 1.2rem 2rem;
  border: none;
  border-radius: 2rem;
  font-size: 1.2rem;

  color: var(--color-white);
  font-weight: 700;

  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  background-color: var(--color-mainLighter);

  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translate(2px);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-main);
  }
`;

const Button = ({ children, disabled, ...rest }) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
