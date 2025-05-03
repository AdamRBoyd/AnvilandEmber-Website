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

const VolumeUnitCard = () => {
  const [measurements, setMeasurements] = useState({
    teaspoon: 0,
    tablespoon: 0,
    ounce: 0,
    cup: 0,
    pint: 0,
    quart: 0,
    gallon: 0,
    milliliter: 0,
    liter: 0,
    meter: 0,
    inch: 0,
    foot: 0,
  });

  const measure = [
    'teaspoon',
    'tablespoon',
    'ounce',
    'cup',
    'pint',
    'quart',
    'gallon',
    'milliliter',
    'liter',
    'meter',
    'inch',
    'foot',
  ];

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'teaspoon':
        setMeasurements({
          teaspoon: e.target.value,
          tablespoon: e.target.value / 3,
          ounce: e.target.value / 6,
          cup: e.target.value / 48.692,
          pint: e.target.value / 96,
          quart: e.target.value / 192,
          gallon: e.target.value / 768,
          milliliter: e.target.value * 4.929,
          liter: e.target.value / 202.9,
          meter: e.target.value / 202900,
          inch: e.target.value / 3.325,
          foot: e.target.value / 5745,
        });
        break;
      case 'tablespoon':
        setMeasurements({
          teaspoon: e.target.value * 3,
          tablespoon: e.target.value,
          ounce: e.target.value / 2,
          cup: e.target.value / 16.231,
          pint: e.target.value / 32,
          quart: e.target.value / 64,
          gallon: e.target.value / 256,
          milliliter: e.target.value * 14.787,
          liter: e.target.value / 67.628,
          meter: e.target.value / 67630,
          inch: e.target.value / 1.108,
          foot: e.target.value / 1915,
        });
        break;
      case 'cup':
        setMeasurements({
          teaspoon: e.target.value * 48.692,
          tablespoon: e.target.value * 16.231,
          ounce: e.target.value * 8.115,
          cup: e.target.value,
          pint: e.target.value / 1.972,
          quart: e.target.value / 3.943,
          gallon: e.target.value / 15.772,
          milliliter: e.target.value * 240,
          liter: e.target.value / 4.167,
          meter: e.target.value / 4167,
          inch: e.target.value * 14.646,
          foot: e.target.value / 118,
        });
        break;
      case 'pint':
        setMeasurements({
          teaspoon: e.target.value * 96,
          tablespoon: e.target.value * 32,
          ounce: e.target.value * 16,
          cup: e.target.value * 1.972,
          pint: e.target.value,
          quart: e.target.value / 2,
          gallon: e.target.value / 8,
          milliliter: e.target.value * 473.2,
          liter: e.target.value / 2.113,
          meter: e.target.value / 2113,
          inch: e.target.value * 28.875,
          foot: e.target.value / 59.844,
        });
        break;
      case 'quart':
        setMeasurements({
          teaspoon: e.target.value * 192,
          tablespoon: e.target.value * 64,
          ounce: e.target.value * 32,
          cup: e.target.value * 3.943,
          pint: e.target.value * 2,
          quart: e.target.value,
          gallon: e.target.value / 4,
          milliliter: e.target.value * 946.4,
          liter: e.target.value / 1.057,
          meter: e.target.value / 1057,
          inch: e.target.value * 57.75,
          foot: e.target.value / 29.922,
        });
        break;
      case 'gallon':
        setMeasurements({
          teaspoon: e.target.value * 768,
          tablespoon: e.target.value * 256,
          ounce: e.target.value * 128,
          cup: e.target.value * 15.773,
          pint: e.target.value * 8,
          quart: e.target.value * 4,
          gallon: e.target.value,
          milliliter: e.target.value * 3785,
          liter: e.target.value * 3.785,
          meter: e.target.value / 264.2,
          inch: e.target.value * 231,
          foot: e.target.value / 7.48,
        });
        break;
      case 'milliliter':
        setMeasurements({
          teaspoon: e.target.value / 4.929,
          tablespoon: e.target.value / 14.787,
          ounce: e.target.value / 29.574,
          cup: e.target.value / 240,
          pint: e.target.value / 473.2,
          quart: e.target.value / 946.4,
          gallon: e.target.value / 3785,
          milliliter: e.target.value,
          liter: e.target.value / 1000,
          meter: e.target.value / 1e6,
          inch: e.target.value / 16.387,
          foot: e.target.value / 28320,
        });
        break;
      case 'liter':
        setMeasurements({
          teaspoon: e.target.value * 202.9,
          tablespoon: e.target.value * 67.628,
          ounce: e.target.value * 33.814,
          cup: e.target.value * 4.167,
          pint: e.target.value * 2.113,
          quart: e.target.value * 1.057,
          gallon: e.target.value / 3.785,
          milliliter: e.target.value * 1000,
          liter: e.target.value,
          meter: e.target.value / 1000,
          inch: e.target.value * 61.024,
          foot: e.target.value / 28.317,
        });
        break;
      case 'meter':
        setMeasurements({
          teaspoon: e.target.value * 202900,
          tablespoon: e.target.value * 67630,
          ounce: e.target.value * 33810,
          cup: e.target.value * 4167,
          pint: e.target.value * 2113,
          quart: e.target.value * 1057,
          gallon: e.target.value * 264.2,
          milliliter: e.target.value * 1e6,
          liter: e.target.value * 1000,
          meter: e.target.value,
          inch: e.target.value * 61020,
          foot: e.target.value * 35.315,
        });
        break;
      case 'inch':
        setMeasurements({
          teaspoon: e.target.value * 3.325,
          tablespoon: e.target.value * 1.108,
          ounce: e.target.value / 1.805,
          cup: e.target.value / 14.646,
          pint: e.target.value / 28.875,
          quart: e.target.value / 57.75,
          gallon: e.target.value / 231,
          milliliter: e.target.value * 16.387,
          liter: e.target.value / 61.024,
          meter: e.target.value / 61020,
          inch: e.target.value,
          foot: e.target.value / 1728,
        });
        break;
      case 'foot':
        setMeasurements({
          teaspoon: e.target.value * 5745,
          tablespoon: e.target.value * 1915,
          ounce: e.target.value * 957.5,
          cup: e.target.value * 118,
          pint: e.target.value * 59.844,
          quart: e.target.value * 29.922,
          gallon: e.target.value * 7.481,
          milliliter: e.target.value * 28320,
          liter: e.target.value * 28.317,
          meter: e.target.value / 35.315,
          inch: e.target.value * 1728,
          foot: e.target.value,
        });
        break;
      case 'ounce':
        setMeasurements({
          teaspoon: e.target.value * 6,
          tablespoon: e.target.value * 2,
          ounce: e.target.value,
          cup: e.target.value / 8.115,
          pint: e.target.value / 16,
          quart: e.target.value / 32,
          gallon: e.target.value / 128,
          milliliter: e.target.value * 29.574,
          liter: e.target.value / 33.814,
          meter: e.target.value / 33810,
          inch: e.target.value * 1.805,
          foot: e.target.value / 957.5,
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
          <StyledLabel>
            {item === 'meter' || item === 'inch' || item === 'foot'
              ? `Cubic ${item}:`
              : item === 'milliliter' || item === 'liter'
              ? `${item}:`
              : item === 'ounce'
              ? `Fluid ${item} (US):`
              : `${item} (US):`}
          </StyledLabel>
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

export default VolumeUnitCard;
