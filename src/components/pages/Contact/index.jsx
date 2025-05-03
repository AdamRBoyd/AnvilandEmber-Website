import { font, palette } from 'styled-theme';
import { useRef, useState } from 'react';
import styled from 'styled-components';

// import emailjs from '@emailjs/browser';
// import apiKeys from '../../json/apiKeys.json';

import {
  Button,
  Heading,
  Input,
  Modal,
  PageTitleFrame,
  Paragraph,
  Spacer,
} from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`;

const StyledForm = styled.form`
  border: 1px solid transparent;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem 0;
  width: 500px;
  padding: 1rem 3rem 1.5rem;
  box-shadow: 0px 0px 5px 0px ${palette('grayscale', 4)};
`;

const StyledInput = styled(Input)`
  border: transparent;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  box-sizing: border-box;
  width: 100%;
  margin-top: 2rem;

  &:not(:placeholder-shown):not(:focus):invalid {
    background-color: ${palette('danger', 6)};
    outline: none;
    border-bottom: 1px solid ${palette('danger', 4)};
  }
`;

const StyledTextArea = styled(Input)`
  border: 1px solid ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  box-sizing: border-box;
  height: 14rem;
  width: 100%;
  resize: vertical;
  margin-top: 2rem;
`;

const StyledButton = styled(Button)`
  margin: 2rem 0 0.5rem;
  align-self: center;
  width: 50%;
  padding: 0.5rem;
`;

const ParagraphWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
`;

const SuccessImage = styled.img``;

const Contact = () => {
  const [disabled, setDisabled] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef();
  // const { serviceId, templateId, userName } = apiKeys.contact;

  const handleFormValidation = (e) => {
    if (
      e.target.form[0].validity.valid &&
      e.target.form[1].validity.valid &&
      e.target.form[2].validity.valid &&
      e.target.form[3].validity.valid
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitted(true);
    openModal();

    // NOTE: Uncomment when ready to send emails
    // emailjs.sendForm(serviceId, templateId, form.current, userName).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  // handle close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // handle open modal
  const openModal = (image) => {
    setIsOpen(true);
    setTimeout(() => closeModal(), 5000);
  };

  return (
    <PageTitleFrame title='Contact Me' noBottomRule>
      <Wrapper>
        {submitted ? (
          <ParagraphWrapper>
            <Heading>Thank You!</Heading>
            <Paragraph>I will get back to you as soon as possible!</Paragraph>
          </ParagraphWrapper>
        ) : (
          <StyledForm ref={form} onSubmit={sendEmail}>
            <StyledInput
              id='name'
              name='user_name'
              onChange={handleFormValidation}
              placeholder='Name'
              required
              type='text'
            />
            <StyledInput
              id='email'
              name='user_email'
              onChange={handleFormValidation}
              placeholder='Email'
              required
              type='email'
            />
            <StyledInput
              id='subject'
              name='subject'
              onChange={handleFormValidation}
              placeholder='Subject'
              required
              type='text'
            />
            <StyledTextArea
              id='message'
              name='message'
              onChange={handleFormValidation}
              placeholder='Write your message here...'
              required
              type='textarea'
            />
            <StyledButton
              className='submitButton'
              disabled={disabled}
              buttonHeight={3}
              type='submit'
            >
              Send
            </StyledButton>
          </StyledForm>
        )}
      </Wrapper>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalInner>
          <Spacer padding={1} />
          <SuccessImage src='/images/Success.png' />
          <Heading>Email Sent!</Heading>
          <Spacer padding={1} />
          <Button onClick={closeModal} variant='primary' buttonHeight={2}>
            Close
          </Button>
          <Spacer padding={1} />
        </ModalInner>
      </Modal>
    </PageTitleFrame>
  );
};

export default Contact;
