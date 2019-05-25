import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 3.5rem;
  }
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  background-color: var(--color-mainLight);
  color: var(--color-white);
  border: none;

  margin-bottom: 0.5rem;

  font-weight: 700;
  font-size: 1.3rem;
  border-radius: 2rem;

  &::placeholder {
    color: var(--color-white);
  }
`;

const Error = styled.div`
  color: red;
  font-weight: 700;
  font-size: 1.2rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error>{errors[field.name]}</Error>
    </InputWrapper>
  );
};

export default Input;
