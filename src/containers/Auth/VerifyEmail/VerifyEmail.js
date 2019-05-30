import React from 'react';

//* Component imports
import { FormWrapper } from '../../../hoc/layout/elements';
import Heading from '../../../components/UI/Headings/Heading';

const VerifyEmail = () => {
  return (
    <FormWrapper>
      <Heading color='white' size='h1'>
        Please verify your email.
      </Heading>

      <Heading color='white' bold size='h4'>
        Check your email box and verify your email by clicking the link
        provided.
      </Heading>
    </FormWrapper>
  );
};

export default VerifyEmail;
