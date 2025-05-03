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

const AreaUnitCard = () => {
  const [measurements, setMeasurements] = useState({
    meter: 0,
    kilometer: 0,
    inch: 0,
    foot: 0,
    yard: 0,
    mile: 0,
    acre: 0,
  });

  const measure = [
    'meter',
    'kilometer',
    'inch',
    'foot',
    'yard',
    'mile',
    'acre',
  ];

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'meter':
        setMeasurements({
          meter: e.target.value,
          kilometer: e.target.value / 1e6,
          inch: e.target.value * 1550,
          foot: e.target.value * 10.764,
          yard: e.target.value * 1.196,
          mile: e.target.value / 2.59e6,
          acre: e.target.value / 4047,
        });
        break;
      case 'kilometer':
        setMeasurements({
          meter: e.target.value * 1e6,
          kilometer: e.target.value,
          inch: e.target.value * 1.55e9,
          foot: e.target.value * 1.076e7,
          yard: e.target.value * 1.196e6,
          mile: e.target.value / 2.59,
          acre: e.target.value * 247.1,
        });
        break;
      case 'inch':
        setMeasurements({
          meter: e.target.value / 1550,
          kilometer: e.target.value / 1.55e9,
          inch: e.target.value,
          foot: e.target.value / 144,
          yard: e.target.value / 1296,
          mile: e.target.value / 4.014e9,
          acre: e.target.value / 6.273e6,
        });
        break;
      case 'foot':
        setMeasurements({
          meter: e.target.value / 10.764,
          kilometer: e.target.value / 1.076e7,
          inch: e.target.value * 144,
          foot: e.target.value,
          yard: e.target.value / 9,
          mile: e.target.value / 2.788e7,
          acre: e.target.value / 43560,
        });
        break;
      case 'yard':
        setMeasurements({
          meter: e.target.value / 1.196,
          kilometer: e.target.value / 1.196e6,
          inch: e.target.value * 1296,
          foot: e.target.value * 9,
          yard: e.target.value,
          mile: e.target.value / 3.098e6,
          acre: e.target.value / 4840,
        });
        break;
      case 'mile':
        setMeasurements({
          meter: e.target.value * 2.59e6,
          kilometer: e.target.value * 2.59,
          inch: e.target.value * 4.014e9,
          foot: e.target.value * 2.788e7,
          yard: e.target.value * 3.098e6,
          mile: e.target.value,
          acre: e.target.value * 640,
        });
        break;
      case 'acre':
        setMeasurements({
          meter: e.target.value * 4047,
          kilometer: e.target.value / 247.1,
          inch: e.target.value * 6.273e6,
          foot: e.target.value * 43560,
          yard: e.target.value * 4840,
          mile: e.target.value / 640,
          acre: e.target.value,
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
            {item === 'acre' ? item : `Square ${item}:`}
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

export default AreaUnitCard;
