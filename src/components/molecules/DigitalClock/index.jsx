import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDigitalClock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  font-family: ${font('primary')};
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${palette('grayscale', 4)};
  background-color: ${palette('white', 0)};
  color: ${palette('primary', 1)};
  box-shadow: 0px 0px 15px 0px ${palette('grayscale', 4)};
`;

const DigitalClock = ({ currentTime }) => {
  return (
    <StyledDigitalClock>{currentTime.toLocaleString()}</StyledDigitalClock>
  );
};

DigitalClock.propTypes = {
  currentTime: PropTypes.instanceOf(Date),
};

export default DigitalClock;
