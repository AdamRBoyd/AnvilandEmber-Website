import PropTypes from 'prop-types';
import styled from 'styled-components';

const iconSize = ({ size }) => {
  return size ? `${size / 16}rem` : '1.25em';
};

const fillColor = ({ color }) => {
  return color;
};

const IconClickableArea = styled.div``;

const StyledIcon = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: ${iconSize};
  height: ${iconSize};
  fill: ${fillColor};
`;

const Icon = ({ icon, size, color, ...props }) => {
  const svg = require(`../../../svg/${icon}.svg`);

  return (
    <IconClickableArea title={icon} {...props}>
      <StyledIcon src={svg} alt={icon} size={size} color={color} />
    </IconClickableArea>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  color: '#9e9e9e',
  size: 24,
};

export default Icon;
