import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';

// * Component imports
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email') // Error message that will be passed
    .required('Email is required'),
  password: Yup.string().required('Password required')
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        // callback function
        console.log(values);
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

            <Button disabled={!isValid} type='submit'>
              Login
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
