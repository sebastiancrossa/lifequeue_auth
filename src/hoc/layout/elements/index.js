import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 160rem;
  margin: 0 auto;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 50rem;

  margin: 0 auto;
  padding: 4rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1rem;
  background-color: var(--color-mainDark);
  color: var(--color-white);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
`;

export const StyledForm = styled(Form)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
