import { palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SpinnerIcon } from '../..';

const LoadingWrapper = styled.section`
  position: ${(props) => props.position};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette('primary', 0)};
`;

const LoadingPage = ({ position }) => (
  <LoadingWrapper position={position}>
    <SpinnerIcon
      aria-busy='true'
      aria-valuetext='Loading…'
      width='64px'
      height='64px'
      id='cl-loading-spinner'
      role='progressbar'
    />
  </LoadingWrapper>
);

LoadingPage.propTypes = {
  position: PropTypes.string,
};

LoadingPage.defaultProps = {
  position: 'fixed',
};

export default LoadingPage;
