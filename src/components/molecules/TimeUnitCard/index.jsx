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
  width: 15rem;
  background-color: transparent;
  color: ${palette('grayscale', 0)};
  border-radius: 0.4rem;
  text-overflow: ellipsis;
`;

const StyledLabel = styled(Label)`
  color: ${palette('primary', 0)};
  text-transform: capitalize;
`;

const TimeUnitCard = () => {
  const [measurements, setMeasurements] = useState({
    nanosecond: 0,
    microsecond: 0,
    millisecond: 0,
    second: 0,
    minute: 0,
    hour: 0,
    day: 0,
    week: 0,
    month: 0,
    year: 0,
    decade: 0,
    century: 0,
  });

  const measure = [
    'nanosecond',
    'microsecond',
    'millisecond',
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
    'decade',
    'century',
  ];

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'nanosecond':
        setMeasurements({
          nanosecond: e.target.value,
          microsecond: e.target.value / 1000,
          millisecond: e.target.value / 1e6,
          second: e.target.value / 1e9,
          minute: e.target.value / 1.6667e-11,
          hour: e.target.value / 3.6e12,
          day: e.target.value / 8.64e13,
          week: e.target.value / 6.048e14,
          month: e.target.value / 2.628e15,
          year: e.target.value / 3.154e16,
          decade: e.target.value / 3.154e17,
          century: e.target.value / 3.154e18,
        });
        break;
      case 'microsecond':
        setMeasurements({
          nanosecond: e.target.value * 1000,
          microsecond: e.target.value,
          millisecond: e.target.value / 1000,
          second: e.target.value / 1e6,
          minute: e.target.value / 6e7,
          hour: e.target.value / 3.6e9,
          day: e.target.value / 8.64e10,
          week: e.target.value / 6.048e11,
          month: e.target.value / 2.628e12,
          year: e.target.value / 3.154e13,
          decade: e.target.value / 3.154e14,
          century: e.target.value / 3.154e15,
        });
        break;
      case 'millisecond':
        setMeasurements({
          nanosecond: e.target.value * 1e6,
          microsecond: e.target.value * 1000,
          millisecond: e.target.value,
          second: e.target.value / 1000,
          minute: e.target.value / 60000,
          hour: e.target.value / 3.6e6,
          day: e.target.value / 8.64e7,
          week: e.target.value / 6.048e8,
          month: e.target.value / 2.628e9,
          year: e.target.value / 3.154e10,
          decade: e.target.value / 3.154e11,
          century: e.target.value / 3.154e12,
        });
        break;
      case 'second':
        setMeasurements({
          nanosecond: e.target.value * 1e9,
          microsecond: e.target.value * 1e6,
          millisecond: e.target.value * 1000,
          second: e.target.value,
          minute: e.target.value / 60,
          hour: e.target.value / 3600,
          day: e.target.value / 86400,
          week: e.target.value / 604800,
          month: e.target.value / 2.628e6,
          year: e.target.value / 3.154e7,
          decade: e.target.value / 3.154e8,
          century: e.target.value / 3.154e9,
        });
        break;
      case 'minute':
        setMeasurements({
          nanosecond: e.target.value * 6e10,
          microsecond: e.target.value * 6e7,
          millisecond: e.target.value * 60000,
          second: e.target.value * 60,
          minute: e.target.value,
          hour: e.target.value / 60,
          day: e.target.value / 1440,
          week: e.target.value / 10080,
          month: e.target.value / 43800,
          year: e.target.value / 525600,
          decade: e.target.value / 5.256e6,
          century: e.target.value / 5.256e7,
        });
        break;
      case 'hour':
        setMeasurements({
          nanosecond: e.target.value * 3.6e12,
          microsecond: e.target.value * 3.6e9,
          millisecond: e.target.value * 3.6e6,
          second: e.target.value * 3600,
          minute: e.target.value * 60,
          hour: e.target.value,
          day: e.target.value / 24,
          week: e.target.value / 168,
          month: e.target.value / 730,
          year: e.target.value / 8760,
          decade: e.target.value / 87600,
          century: e.target.value / 876000,
        });
        break;
      case 'day':
        setMeasurements({
          nanosecond: e.target.value * 8.64e13,
          microsecond: e.target.value * 8.64e10,
          millisecond: e.target.value * 8.64e7,
          second: e.target.value * 86400,
          minute: e.target.value * 1440,
          hour: e.target.value * 24,
          day: e.target.value,
          week: e.target.value / 7,
          month: e.target.value / 30.417,
          year: e.target.value / 365,
          decade: e.target.value / 3650,
          century: e.target.value / 36500,
        });
        break;
      case 'week':
        setMeasurements({
          nanosecond: e.target.value * 6.048e14,
          microsecond: e.target.value * 6.048e11,
          millisecond: e.target.value * 6.048e8,
          second: e.target.value * 604800,
          minute: e.target.value * 10080,
          hour: e.target.value * 168,
          day: e.target.value * 7,
          week: e.target.value,
          month: e.target.value / 4.345,
          year: e.target.value / 52.143,
          decade: e.target.value / 521.4,
          century: e.target.value / 5214,
        });
        break;
      case 'month':
        setMeasurements({
          nanosecond: e.target.value * 2.628e15,
          microsecond: e.target.value * 2.628e12,
          millisecond: e.target.value * 2.628e9,
          second: e.target.value * 2.628e6,
          minute: e.target.value * 43800,
          hour: e.target.value * 730,
          day: e.target.value * 30.417,
          week: e.target.value * 4.345,
          month: e.target.value,
          year: e.target.value / 12,
          decade: e.target.value / 120,
          century: e.target.value / 1200,
        });
        break;
      case 'year':
        setMeasurements({
          nanosecond: e.target.value * 3.154e16,
          microsecond: e.target.value * 3.154e13,
          millisecond: e.target.value * 3.154e10,
          second: e.target.value * 3.154e7,
          minute: e.target.value * 525600,
          hour: e.target.value * 8760,
          day: e.target.value * 365,
          week: e.target.value * 52.143,
          month: e.target.value * 12,
          year: e.target.value,
          decade: e.target.value / 10,
          century: e.target.value / 100,
        });
        break;
      case 'decade':
        setMeasurements({
          nanosecond: e.target.value * 3.154e17,
          microsecond: e.target.value * 3.154e14,
          millisecond: e.target.value * 3.154e11,
          second: e.target.value * 3.154e8,
          minute: e.target.value * 5.256e6,
          hour: e.target.value * 87600,
          day: e.target.value * 3650,
          week: e.target.value * 521.4,
          month: e.target.value * 120,
          year: e.target.value * 10,
          decade: e.target.value,
          century: e.target.value / 10,
        });
        break;
      case 'century':
        setMeasurements({
          nanosecond: e.target.value * 3.154e18,
          microsecond: e.target.value * 3.154e15,
          millisecond: e.target.value * 3.154e12,
          second: e.target.value * 3.154e9,
          minute: e.target.value * 5.256e7,
          hour: e.target.value * 876000,
          day: e.target.value * 36500,
          week: e.target.value * 5214,
          month: e.target.value * 1200,
          year: e.target.value * 100,
          decade: e.target.value * 10,
          century: e.target.value,
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

export default TimeUnitCard;
