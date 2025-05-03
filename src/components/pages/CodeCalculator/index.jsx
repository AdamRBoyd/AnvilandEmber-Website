import { font, palette } from 'styled-theme';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import { PageTitleFrame, Spacer } from '../..';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 500px;
  margin-top: 2rem;
  border: 4px solid ${palette('primary', 1)};
  border-radius: 0.5rem;
  background: ${palette('primary', 1)};
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const ScreenArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  gap: 0.8rem;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const ScreenStyles = css`
  display: flex;
  align-items: center;
  text-align: right;
  color: ${palette('grayscale', 7)};
  background-color: ${palette('primary', 0)};
  border-radius: 0.5rem;
  border: none;
  width: 70%;
  padding: 0.2rem 1rem;
  font-family: ${font('primary')};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ScreenCalculation = styled.input`
  ${ScreenStyles}
  height: 2rem;
`;

const ScreenResult = styled.input`
  ${ScreenStyles}
  height: 3rem;
  font-size: 2.5rem;
`;

const KeyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 100%;
`;

const CalcKeys = styled.button`
  border-radius: 3px;
  border: 1px solid ${palette('primary', 1)};
  background-color: ${palette('primary', 2)};
  font-size: 2rem;
  color: ${palette('grayscale', 1)};
  &.operator {
    color: darkblue;
  }
  &.math {
    color: purple;
  }
  &.equalSign {
    grid-area: 3 / 4 / 7 / 5;
    border-bottom-right-radius: 0.5rem;
  }
  &.zero {
    grid-area: 6 / 1 / 7 / 3;
    border-bottom-left-radius: 0.5rem;
  }

  &:hover {
    background-color: ${palette('primary', 3)};
  }

  &:active {
    background-color: ${palette('primary', 0)};
  }
`;

const CodeCalculator = () => {
  const [result, setResult] = useState(0);
  const [calculation, setCalculation] = useState('');

  const buttons = [
    '(',
    ')',
    '/',
    '*',
    '-',
    '+',
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '.',
    '0',
  ];

  const getClassName = (button) => {
    return button === '(' || button === ')'
      ? 'operator'
      : button === '/' || button === '*' || button === '-' || button === '+'
      ? 'math'
      : button === '0'
      ? 'zero'
      : '';
  };

  const insert = (e) => {
    // input checking to help secure eval
    if (buttons.includes(e.target.id)) {
      setCalculation(calculation + e.target.id);
    }
  };

  const clear = () => {
    setCalculation('');
    setResult(0);
  };

  const back = () => {
    var exp = calculation;
    setCalculation(exp.substring(0, exp.length - 1));
  };

  const equals = () => {
    /**
     * NOTE: eval should be safe in this case
     * no direct access/input to calculation available
     */
    // eslint-disable-next-line no-eval
    var total = eval(calculation);
    setResult(total);
    setCalculation(total);
  };

  return (
    <PageTitleFrame title='Calculator' noBottomRule>
      <Spacer padding={1} />
      <MainWrapper>
        <ScreenArea>
          <ScreenCalculation
            type='text'
            className='calculationText'
            value={calculation}
            readOnly
          />
          <ScreenResult
            type='text'
            className='resultText'
            value={result}
            readOnly
          />
        </ScreenArea>
        <KeyContainer>
          <CalcKeys className='operator' id='C' onClick={clear}>
            {'C'}
          </CalcKeys>
          <CalcKeys className='operator' id='<' onClick={back}>
            {'<'}
          </CalcKeys>
          {buttons.map((button) => (
            <CalcKeys
              className={getClassName(button)}
              id={button}
              key={button}
              buttonValue={button}
              onClick={insert}
            >
              {button}
            </CalcKeys>
          ))}
          <CalcKeys className='operator equalSign' id='=' onClick={equals}>
            {'='}
          </CalcKeys>
        </KeyContainer>
      </MainWrapper>
    </PageTitleFrame>
  );
};

export default CodeCalculator;
