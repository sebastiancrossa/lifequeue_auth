import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-bottom: 3.5rem;

  position: relative;

  &:last-of-type {
    margin-bottom: 4.5rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;

  padding: 1rem 2rem;
  background-color: var(--color-mainLight);
  color: var(--color-white);
  border: none;

  font-weight: 500;
  font-size: 1.2rem;
  border-radius: 2rem;

  &::placeholder {
    color: var(--color-white);
  }
`;

const Error = styled.div`
  color: var(--color-errorRed);

  padding: 0rem 2rem;

  position: absolute;
  bottom: 0;
  left: 0;

  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '20px' : '10px')});
  transition: all 0.1s;

  font-weight: 500;
  font-size: 1.2rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
