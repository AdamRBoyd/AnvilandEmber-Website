import { palette } from 'styled-theme';
import { useState } from 'react';
import styled from 'styled-components';

import { Icon, Input, Label, PageTitleFrame, Spacer } from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 2rem 2rem 4rem;
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const GradientBox = styled.div`
  height: 16rem;
  width: 32rem;
  margin: 1rem 0;
  border-radius: 10px;
`;

const CopyCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  background-color: ${palette('grayscale', 7)};
  border-radius: 5px;
  border: 1px solid ${palette('grayscale', 4)};
  margin: 0 0 1rem 1rem;
`;

const ColorCode = styled(Input)`
  color: ${palette('primary', 0)};
  font-size: 0.9rem;
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

const SelectionInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const DegreeInput = styled.input`
  width: 20rem;
  margin: 0 1rem;
  accent-color: ${palette('primary', 0)};
`;

const ColorInput = styled(Input)`
  background-color: transparent;
  border: none;
  width: 4rem;
  padding: 0.2rem;
  margin: 0 0 0 1.2rem;
`;

const StyledLabel = styled(Label)`
  display: flex;
  flex-direction: row;
`;

const StyledColorCodeLabel = styled(Label)`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;

const CodeGradient = () => {
  const [color1, setColor1] = useState('#8dd9f5');
  const [color2, setColor2] = useState('#0003ff');
  const [degree, setDegree] = useState(45);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `linear-gradient(${degree}deg, ${color1}, ${color2})`
    );
  };

  return (
    <PageTitleFrame title='Gradient Picker' noBottomRule>
      <Wrapper className='container'>
        <GradientBox
          id='gradient-box'
          style={{
            background: `linear-gradient(${degree}deg, ${color1}, ${color2})`,
          }}
        />
        <StyledColorCodeLabel>
          Color Code:
          <CopyCode className='copyCode'>
            <ColorCode
              type='text'
              id='color-code'
              value={`linear-gradient(${degree}deg, ${color1}, ${color2})`}
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
        </StyledColorCodeLabel>
        <Spacer padding={1} />
        <SelectionInputs>
          <StyledLabel>
            Colors:
            <ColorInput
              type='color'
              name='color1'
              id='color1'
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
            />
            <ColorInput
              type='color'
              name='color2'
              id='color2'
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
            />
          </StyledLabel>
          <Spacer padding={2} />
          <StyledLabel>
            Degree:
            <DegreeInput
              type='range'
              value={degree}
              min='0'
              max='180'
              onChange={(e) => setDegree(e.target.value)}
            />
          </StyledLabel>
        </SelectionInputs>
      </Wrapper>
    </PageTitleFrame>
  );
};

export default CodeGradient;
