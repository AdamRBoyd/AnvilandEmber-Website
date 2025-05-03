import PropTypes from 'prop-types';
import styled from 'styled-components';

const padHeight = ({ padding }) => `${padding / 2}rem`;

const StyledSpacer = styled.div`
  padding: ${padHeight};
`;

const Spacer = ({ padding, ...props }) => {
  return <StyledSpacer padding={padding} {...props} />;
};

Spacer.propTypes = {
  padding: PropTypes.number,
};

Spacer.defaultProps = {
  padding: 0.5,
};

export default Spacer;
