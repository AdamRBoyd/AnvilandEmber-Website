import { font, palette } from 'styled-theme';
import { useState } from 'react';
import styled from 'styled-components';

import {
  AreaUnitCard,
  DistanceUnitCard,
  MassUnitCard,
  PageTitleFrame,
  TemperatureUnitCard,
  TimeUnitCard,
  VolumeUnitCard,
} from '../..';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  margin-top: 2rem;
  border-radius: 0.5rem;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;

  > :first-child {
    border-top-left-radius: 0.5rem;
  }

  > :not(:first-child) {
    border-left: none;
  }

  > :last-child {
    border-top-right-radius: 0.5rem;
  }
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 2.5rem;
  border: 1px solid ${palette('grayscale', 4)};
  text-transform: capitalize;
  font-family: ${font('primary')};
  font-weight: 600;
`;

const CalcSection = styled.div`
  border: 1px solid ${palette('grayscale', 4)};
  border-radius: 0 0 0.5rem 0.5rem;
  border-top: none;
  background-color: ${palette('primary', 3)};
  padding: 1rem;
`;

const CalcBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${palette('grayscale', 7)};
  border-radius: 0.5rem;
  padding: 2rem 0;
`;

const Note = styled.div`
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 4rem 0;
`;

const CodeUnitConverter = () => {
  const [active, setActive] = useState('distance');
  const sections = [
    'distance',
    'temperature',
    'area',
    'volume',
    'mass',
    'time',
  ];

  const handleClick = (e) => {
    setActive(e.target.id);
  };

  return (
    <PageTitleFrame title='Unit Converter' noBottomRule>
      <MainWrapper>
        <Tabs>
          {sections.map((section, index) => (
            <Tab
              onClick={handleClick}
              id={section}
              key={section}
              style={
                active === section
                  ? {
                      backgroundColor: '#fccea2',
                      borderBottom: `1px solid #fccea2`,
                    }
                  : {}
              }
            >
              {section}
            </Tab>
          ))}
        </Tabs>
        <CalcSection>
          <CalcBox>
            {active === 'distance' && <DistanceUnitCard />}
            {active === 'temperature' && <TemperatureUnitCard />}
            {active === 'area' && <AreaUnitCard />}
            {active === 'volume' && <VolumeUnitCard />}
            {active === 'mass' && <MassUnitCard />}
            {active === 'time' && <TimeUnitCard />}
          </CalcBox>
        </CalcSection>
      </MainWrapper>
      <Note>
        All results are approximate and based on formulas from Google Unit
        Converter
      </Note>
    </PageTitleFrame>
  );
};

export default CodeUnitConverter;
