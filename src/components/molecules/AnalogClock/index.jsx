import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const AnalogClockContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: relative;
  box-shadow: 0px 0px 20px 0px ${palette('grayscale', 4)};
`;

const ClockFace = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${palette('white', 0)};
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center bottom;
  border: 2px solid ${palette('grayscale', 4)};
`;

const Number = styled.div`
  width: 44%;
  height: 44%;
  position: absolute;
  bottom: 50.2%;
  left: 27.8%;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-align: center;
  transform-origin: center bottom;
  color: ${palette('primary', 1)};
  font-family: ${font('primary')};
  font-weight: 600;
  font-size: 1.5rem;
`;

const TickAfter = css`
  content: '';
  width: 3px;
  background-color: ${palette('grayscale', 2)};
  position: absolute;
  left: 0;
  transform: translate(-50%, -50%);
`;

const Tick = styled.div`
  width: 2px;
  height: 75%;
  position: absolute;
  bottom: 50.5%;
  left: 49.5%;
  text-align: center;
  transform-origin: center bottom;

  &:nth-child(5n-2) {
    &:after {
      ${TickAfter}
      height: 5%;
      bottom: 57.5%;
    }
  }

  &:after {
    ${TickAfter}
    height: 3%;
    bottom: 60%;
  }
`;

const Hand = styled.div`
  background-color: ${palette('grayscale', 0)};
  position: absolute;
  bottom: 50.5%;
  left: 49.5%;
  transform-origin: center bottom;

  &:after {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${palette('grayscale', 0)};
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SecondHand = styled(Hand)`
  height: 45%;
  width: 1px;
  background-color: ${palette('danger', 4)};
`;

const MinuteHand = styled(Hand)`
  height: 42%;
  width: 3px;
`;

const HourHand = styled(Hand)`
  height: 30%;
  width: 4px;
`;

const AnalogClock = ({ currentTime }) => {
  return (
    <AnalogClockContainer>
      <ClockFace>
        {Array.from({ length: 12 }, (_, i) => (
          <Number key={i} style={{ transform: `rotate(${i * 30}deg)` }}>
            {i === 0 ? 12 : i}
          </Number>
        ))}
        {Array.from({ length: 60 }, (_, i) => (
          <Tick key={i} style={{ transform: `rotate(${i * 6}deg)` }} />
        ))}
        <HourHand
          style={{
            transform: `rotate(${
              (currentTime.getHours() % 12) * 30 + currentTime.getMinutes() / 2
            }deg)`,
          }}
        />
        <MinuteHand
          style={{
            transform: `rotate(${currentTime.getMinutes() * 6}deg)`,
          }}
        />
        <SecondHand
          style={{
            transform: `rotate(${currentTime.getSeconds() * 6}deg)`,
          }}
        />
      </ClockFace>
    </AnalogClockContainer>
  );
};

AnalogClock.propTypes = {
  currentTime: PropTypes.instanceOf(Date),
};

export default AnalogClock;
