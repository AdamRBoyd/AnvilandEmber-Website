import { palette } from 'styled-theme';
import { useState } from 'react';
import styled from 'styled-components';

import { Input, Label } from '../..';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem;
`;

const StyledInput = styled(Input)`
  width: 13rem;
  background-color: transparent;
  color: ${palette('grayscale', 0)};
  border-radius: 0.4rem;
  text-overflow: ellipsis;
`;

const StyledLabel = styled(Label)`
  color: ${palette('primary', 0)};
  text-transform: capitalize;
`;

const TemperatureUnitCard = () => {
  const [measurements, setMeasurements] = useState({
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.15,
  });

  const measure = ['celsius', 'fahrenheit', 'kelvin'];

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'celsius':
        setMeasurements({
          celsius: e.target.value,
          fahrenheit: e.target.value * (9 / 5) + 32,
          kelvin: Number(e.target.value) + 273.15,
        });
        break;
      case 'fahrenheit':
        setMeasurements({
          celsius: (e.target.value - 32) * (5 / 9),
          fahrenheit: e.target.value,
          kelvin: (e.target.value - 32) * (5 / 9) + 273.15,
        });
        break;
      case 'kelvin':
        setMeasurements({
          celsius: e.target.value - 273.15,
          fahrenheit: (e.target.value - 273.15) * (9 / 5) + 32,
          kelvin: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  return (
    <MainWrapper>
      {measure.map((item, index) => (
        <InfoRow key={item + index}>
          <StyledLabel>{`${item}:`}</StyledLabel>
          <StyledInput
            type='text'
            id={item}
            onChange={handleChange}
            value={measurements[`${item}`]}
          />
        </InfoRow>
      ))}
    </MainWrapper>
  );
};

export default TemperatureUnitCard;
