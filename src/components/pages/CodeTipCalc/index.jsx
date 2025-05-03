import { palette } from 'styled-theme';
import { useState } from 'react';
import styled from 'styled-components';

import { Button, Input, Label, PageTitleFrame } from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 2rem;
  margin-top: 3rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  width: 90%;
`;

const StyledLabel = styled(Label)``;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
`;

const StyledValue = styled(Input)`
  background-color: transparent;
  width: 7rem;
  height: 2rem;
  text-align: center;
  border-radius: 0.5rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const CodeTipCalc = () => {
  const [tip, setTip] = useState(0.0);
  const [total, setTotal] = useState(0.0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let bill = Number(e.target[0].value).toFixed(2);
    let tipPercentage = Number(e.target[1].value / 100);
    let tip = Number(bill) * tipPercentage;
    let total = Number(bill) + tip;
    setTip(tip.toFixed(2));
    setTotal(total.toFixed(2));
  };

  return (
    <PageTitleFrame title='Tip Calculator' noBottomRule>
      <Wrapper className='container'>
        <StyledForm onSubmit={handleSubmit}>
          <FormRow>
            <StyledLabel>Bill Amount</StyledLabel>
            <StyledValue type='text' id='billAmount' />
          </FormRow>
          <FormRow>
            <StyledLabel>Tip Percentage</StyledLabel>
            <StyledValue type='number' id='tipAmount' />
          </FormRow>
          <FormRow>
            <StyledButton type='submit' value='Submit' variant='primary'>
              Calculate
            </StyledButton>
          </FormRow>
          <FormRow>
            <StyledLabel>Tip Amount</StyledLabel>
            <StyledValue
              type='text'
              id='color-code'
              value={`$${tip}`}
              readOnly
            />
          </FormRow>
          <FormRow>
            <StyledLabel>Total with Tip</StyledLabel>
            <StyledValue
              type='text'
              id='color-code'
              value={`$${total}`}
              readOnly
            />
          </FormRow>
        </StyledForm>
      </Wrapper>
    </PageTitleFrame>
  );
};

export default CodeTipCalc;
