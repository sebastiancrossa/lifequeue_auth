import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';

import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';

// * Component imports
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';
import Message from '../../../components/UI/Message/Message';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email') // Error message that will be passed
    .required('Email is required'),
  password: Yup.string()
    .required('Password required')
    .min(8, 'Password is too short')
});

const Login = ({ login, loading, error }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await login(values);
        setSubmitting = false;
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size='h1' color='white'>
            Login into your account
          </Heading>
          <Heading bold size='h4' color='white'>
            Fill in your details to log into your account
          </Heading>
          <StyledForm>
            <Field
              type='email'
              name='email'
              placeholder='Email...'
              component={Input}
            />

            <Field
              type='password'
              name='password'
              placeholder='Password...'
              component={Input}
            />

            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? 'Logging in...' : null}
              type='submit'
            >
              Login
            </Button>

            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

// access to global state
const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error
});

const mapDispatchToProps = {
  login: actions.signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
