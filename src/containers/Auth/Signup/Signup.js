import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';

// * Component imports
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Heading';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name required')
    .min(3, 'First name too short')
    .max(25, 'First name too long'),
  lastName: Yup.string()
    .required('Last name required')
    .min(3, 'Last name too short')
    .max(25, 'Last name too long'),
  email: Yup.string()
    .email('Invalid email') // Error message that will be passed
    .required('Email is required'),
  password: Yup.string()
    .required('Password required')
    .min(8, 'Password too short'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('You need to confirm your password')
});

const Signup = ({ signUp }) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        // callback function
        console.log(values);
        signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size='h1' color='white'>
            Create an account
          </Heading>
          <Heading bold size='h4' color='white'>
            Fill in your details to register your new account
          </Heading>
          <StyledForm>
            <Field
              type='text'
              name='firstName'
              placeholder='First name...'
              component={Input}
            />
            <Field
              type='text'
              name='lastName'
              placeholder='Last name...'
              component={Input}
            />
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

            <Field
              type='password'
              name='confirmPassword'
              placeholder='Confirm password...'
              component={Input}
            />

            <Button disabled={!isValid} type='submit'>
              Sign up
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signUp: actions.signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
