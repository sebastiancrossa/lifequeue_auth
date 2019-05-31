import React from 'react';
import { Formik, Field } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';

// Component imports
import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';
import Heading from '../../../components/UI/Headings/Heading';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Message from '../../../components/UI/Message/Message';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const RecoverSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email') // Error message that will be passed
    .required('Email is required')
});

const RecoverPassword = ({ sendPasswordRecovery, loading, error }) => {
  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={RecoverSchema}
      onSubmit={async (values, { setSubmitting }) => {
        sendPasswordRecovery(values);
        setSubmitting = false;
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin color='white' size='h1'>
            Recover password
          </Heading>
          <Heading color='white' size='h4'>
            Type in your email to recovery your password
          </Heading>

          <StyledForm>
            <Field
              type='email'
              name='email'
              placeholder='Your email...'
              component={Input}
            />
            <Button
              disabled={loading}
              loading={loading ? 'Sending email' : null}
              type='submit'
            >
              Recover email
            </Button>

            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
              <Message success show={error === false}>
                Recover password email sent
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoverPassword.loading,
  error: auth.recoverPassword.error
});

const mapDispatchToProps = {
  sendPasswordRecovery: actions.recoverPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoverPassword);
