import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email') // Error message that will be passed
    .required('Email is required'),
  password: Yup.string().required('Password required')
});

const Login = () => {
  return (
    <div style={{ padding: '3rem' }}>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field type='email' name='email' placeholder='Email...' />
            <ErrorMessage name='email' />

            <Field type='password' name='password' placeholder='Password...' />
            <ErrorMessage name='password' />
            <button type='submit'>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
