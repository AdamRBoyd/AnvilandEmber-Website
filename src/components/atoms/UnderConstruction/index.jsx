import { switchProp } from 'styled-tools';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledUnderConstructionImage = styled.img`
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  object-fit: cover;
  ${switchProp('signSize', {
    small: css`
      width: 150px;
    `,
    medium: css`
      width: 300px;
    `,
    large: css`
      width: 600px;
    `,
    xlarge: css`
      width: 900px;
    `,
    xxlarge: css`
      width: 1200px;
    `,
  })};
`;

const UnderConstruction = ({ signSize }) => {
  return (
    <StyledUnderConstructionImage
      signSize={signSize}
      src='/images/UnderConstructionSign.png'
      alt='Under Construction'
    />
  );
};

UnderConstruction.propTypes = {
  signSize: PropTypes.string,
};

UnderConstruction.defaultProps = {
  signSize: 'large',
};

export default UnderConstruction;
