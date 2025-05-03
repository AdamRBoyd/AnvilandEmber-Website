import { palette } from 'styled-theme';
import { useState } from 'react';
import styled from 'styled-components';

import { Button, Icon, Input, Label, PageTitleFrame, Spacer } from '../..';

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*_-+=';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 2rem 2rem 4rem;
  margin-top: 3rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const CopyCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: ${palette('grayscale', 7)};
  border-radius: 5px;
  border: 1px solid ${palette('grayscale', 4)};
  margin: 0 0 1rem 0;
`;

const PasswordField = styled(Input)`
  color: ${palette('primary', 0)};
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  background: transparent;
  border: none;
  outline: none;
  width: 90%;
`;

const CopyButton = styled.button`
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
`;

const StyledPasswordLabel = styled(Label)`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  width: 80%;
`;

const StyledLabel = styled(Label)``;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0.3rem 0;
`;

const StyledRange = styled.input`
  width: 10rem;
  margin: 0 1rem;
  accent-color: ${palette('primary', 0)};
`;

const StyledValue = styled(Input)`
  background-color: transparent;
  width: 2.5rem;
  height: 2rem;
  margin: 0 0 0 1rem;
  text-align: center;
  border-radius: 0.5rem;
`;

const StyledCheckbox = styled(Input)`
  accent-color: ${palette('primary', 0)};
`;

const StyledButton = styled(Button)``;

const CodePasswordGen = () => {
  const [password, setPassword] = useState('');
  const [passLength, setPassLength] = useState(16);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  const generatePassword = (e) => {
    e.preventDefault();
    let passData = ALPHA;
    if (e.target[2].checked) passData += UPPER;
    if (e.target[3].checked) passData += NUMBERS;
    if (e.target[4].checked) passData += SYMBOLS;
    let password = '';
    for (let i = 0; i < passLength; i++) {
      password += passData.charAt(Math.floor(Math.random() * passData.length));
    }
    setPassword(password);
  };

  return (
    <PageTitleFrame title='Password Generator' noBottomRule>
      <Wrapper>
        <StyledPasswordLabel>Password:</StyledPasswordLabel>
        <CopyCode className='copyCode'>
          <PasswordField
            type='text'
            id='color-code'
            value={password}
            readOnly
          />
          <CopyButton
            title='Click to Copy'
            id='copyBtn'
            onClick={copyToClipboard}
          >
            <Icon name='copy' icon='copy-regular' />
          </CopyButton>
        </CopyCode>
        <Spacer padding={2} />
        <StyledForm onSubmit={generatePassword}>
          <FormRow>
            <StyledLabel>Length:</StyledLabel>
            <StyledRange
              type='range'
              id='length'
              min='8'
              max='64'
              value={passLength}
              onChange={(e) => setPassLength(e.target.value)}
            />
            <StyledValue type='text' value={passLength} readOnly />
          </FormRow>
          <Spacer padding={1} />
          <FormRow>
            <StyledLabel>Include Upper Case:</StyledLabel>
            <StyledCheckbox type='checkbox' id='upper' />
          </FormRow>
          <FormRow>
            <StyledLabel>Include Numbers:</StyledLabel>
            <StyledCheckbox type='checkbox' id='number' />
          </FormRow>
          <FormRow>
            <StyledLabel>Include Symbols:</StyledLabel>
            <StyledCheckbox type='checkbox' id='symbol' />
          </FormRow>
          <Spacer padding={2} />
          <StyledButton type='submit' value='Submit' variant='primary'>
            Generate Password
          </StyledButton>
        </StyledForm>
      </Wrapper>
    </PageTitleFrame>
  );
};

export default CodePasswordGen;
