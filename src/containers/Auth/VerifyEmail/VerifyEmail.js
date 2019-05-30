import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import styled from 'styled-components';

//* Component imports
import { FormWrapper } from '../../../hoc/layout/elements';
import Heading from '../../../components/UI/Headings/Heading';
import Button from '../../../components/UI/Forms/Button/Button';
import Message from '../../../components/UI/Message/Message';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VerifyEmail = ({ sendVerification, loading, error }) => {
  return (
    <FormWrapper>
      <Wrapper>
        <Heading color='white' size='h1'>
          Please verify your email.
        </Heading>

        <Heading color='white' bold size='h4'>
          Check your email box and verify your email.
        </Heading>

        <Button
          loading={loading ? 'Sending email verification...' : null}
          onClick={() => sendVerification()}
          disabled={loading}
        >
          Re-send verification email
        </Button>

        <MessageWrapper>
          <Message error show={error}>
            {error}
          </Message>
          <Message success show={error === false}>
            Email verification sent succesfully
          </Message>
        </MessageWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);
