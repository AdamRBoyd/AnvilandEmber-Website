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

const WeightUnitCard = () => {
  const [measurements, setMeasurements] = useState({
    microgram: 0,
    milligram: 0,
    gram: 0,
    kilogram: 0,
    mton: 0,
    iton: 0,
    ounce: 0,
    pound: 0,
    uton: 0,
  });

  const measure = [
    'microgram',
    'milligram',
    'gram',
    'kilogram',
    'mton',
    'iton',
    'ounce',
    'pound',
    'uton',
  ];

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'microgram':
        setMeasurements({
          microgram: e.target.value,
          milligram: e.target.value / 1000,
          gram: e.target.value / 1e6,
          kilogram: e.target.value / 1e9,
          mton: e.target.value / 1e12,
          iton: e.target.value / 1.016e12,
          ounce: e.target.value / 2.835e7,
          pound: e.target.value / 4.536e8,
          uton: e.target.value / 9.072e11,
        });
        break;
      case 'milligram':
        setMeasurements({
          microgram: e.target.value * 1000,
          milligram: e.target.value,
          gram: e.target.value / 1000,
          kilogram: e.target.value / 1e6,
          mton: e.target.value / 1e9,
          iton: e.target.value / 1.016e9,
          ounce: e.target.value / 28350,
          pound: e.target.value / 453600,
          uton: e.target.value / 9.072e8,
        });
        break;
      case 'gram':
        setMeasurements({
          microgram: e.target.value * 1e6,
          milligram: e.target.value * 1000,
          gram: e.target.value,
          kilogram: e.target.value / 1000,
          mton: e.target.value / 1e6,
          iton: e.target.value / 1.016e6,
          ounce: e.target.value / 28.35,
          pound: e.target.value / 453.6,
          uton: e.target.value / 907200,
        });
        break;
      case 'kilogram':
        setMeasurements({
          microgram: e.target.value * 1e9,
          milligram: e.target.value * 1e6,
          gram: e.target.value * 1000,
          kilogram: e.target.value,
          mton: e.target.value / 1000,
          iton: e.target.value / 1016,
          ounce: e.target.value * 35.274,
          pound: e.target.value * 2.205,
          uton: e.target.value / 907.2,
        });
        break;
      case 'mton':
        setMeasurements({
          microgram: e.target.value * 1e12,
          milligram: e.target.value * 1e9,
          gram: e.target.value * 1e6,
          kilogram: e.target.value * 1000,
          mton: e.target.value,
          iton: e.target.value / 1.016,
          ounce: e.target.value * 35270,
          pound: e.target.value * 2205,
          uton: e.target.value * 1.102,
        });
        break;
      case 'iton':
        setMeasurements({
          microgram: e.target.value * 1.016e12,
          milligram: e.target.value * 1.016e9,
          gram: e.target.value * 1.016e6,
          kilogram: e.target.value * 1016,
          mton: e.target.value * 1.016,
          iton: e.target.value,
          ounce: e.target.value * 35840,
          pound: e.target.value * 2240,
          uton: e.target.value * 1.12,
        });
        break;
      case 'ounce':
        setMeasurements({
          microgram: e.target.value * 2.835e7,
          milligram: e.target.value * 28350,
          gram: e.target.value * 28.35,
          kilogram: e.target.value / 35.274,
          mton: e.target.value / 35270,
          iton: e.target.value / 35840,
          ounce: e.target.value,
          pound: e.target.value / 16,
          uton: e.target.value / 32000,
        });
        break;
      case 'pound':
        setMeasurements({
          microgram: e.target.value * 4.536e8,
          milligram: e.target.value * 453600,
          gram: e.target.value * 453.6,
          kilogram: e.target.value / 2.205,
          mton: e.target.value / 2205,
          iton: e.target.value / 2240,
          ounce: e.target.value * 16,
          pound: e.target.value,
          uton: e.target.value / 2000,
        });
        break;
      case 'uton':
        setMeasurements({
          microgram: e.target.value * 9.072e11,
          milligram: e.target.value * 9.072e8,
          gram: e.target.value * 907200,
          kilogram: e.target.value * 907.2,
          mton: e.target.value / 1.102,
          iton: e.target.value / 1.12,
          ounce: e.target.value * 32000,
          pound: e.target.value * 2000,
          uton: e.target.value,
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
            {item === 'mton'
              ? 'Metric Ton:'
              : item === 'uton'
              ? 'US Ton:'
              : item === 'iton'
              ? 'Imperial Ton:'
              : `${item}:`}
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

export default WeightUnitCard;
