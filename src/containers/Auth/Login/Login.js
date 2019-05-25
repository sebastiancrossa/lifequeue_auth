import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';

// * Component imports
import Input from '../../../components/UI/Forms/Input/Input';

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
          <h1>Login</h1>
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

            <button type='submit'>Login</button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
