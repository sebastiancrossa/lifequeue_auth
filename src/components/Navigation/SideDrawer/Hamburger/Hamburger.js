import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  width: 30px;
  height: 22.5px;
  position: relative;
  padding: 1rem;
  margin-top: 1.5rem;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 4.5px;
    width: 100%;
    background: var(--color-white);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: ${props => (props.opened ? '9px' : '0px')};
      width: ${props => (props.opened ? '0%' : '100%')};
      left: ${props => (props.opened ? '50%' : '0px')};
    }

    &:nth-child(2) {
      -webkit-transform: ${props => (props.opened ? 'rotate(45deg)' : null)};
      -moz-transform: ${props => (props.opened ? 'rotate(45deg)' : null)};
      -o-transform: ${props => (props.opened ? 'rotate(45deg)' : null)};
      transform: ${props => (props.opened ? 'rotate(45deg)' : null)};
    }

    &:nth-child(3) {
      -webkit-transform: ${props => (props.opened ? 'rotate(-45deg)' : null)};
      -moz-transform: ${props => (props.opened ? 'rotate(-45deg)' : null)};
      -o-transform: ${props => (props.opened ? 'rotate(-45deg)' : null)};
      transform: ${props => (props.opened ? 'rotate(-45deg)' : null)};
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 9px;
    }

    &:nth-child(4) {
      top: ${props => (props.opened ? '9px' : '18px')};
      width: ${props => (props.opened ? '0%' : '100%')};
      left: ${props => (props.opened ? '50%' : '0px')};
    }
  }

  &.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;

const Hamburger = ({ opened, clicked }) => {
  return (
    <StyledHamburger onClick={clicked} opened={opened}>
      <span />
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
};

export default Hamburger;
