import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  font-size: 1rem;
  font-weight: 700;
  line-height: 2rem;
`;

Label.propTypes = {
  reverse: PropTypes.bool,
};

export default Label;
