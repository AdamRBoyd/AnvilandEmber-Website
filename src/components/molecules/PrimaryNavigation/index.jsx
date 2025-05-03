import { palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from '../..';

const StyledNav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1.5rem;
  }
  margin: 0.5rem 0;
  a {
    font-weight: 300;
    color: ${palette('grayscale', 4)};
    font-size: 1.1rem;
    &.active {
      color: ${palette('primary', 0)};
    }
  }
`;

const PrimaryNavigation = (props) => {
  return (
    <StyledNav {...props}>
      <Link
        to='/shop'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Shop
      </Link>
      <Link
        to='/gallery'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Gallery
      </Link>
      <Link
        to='/about'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        About
      </Link>
      <Link
        to='/contact'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Contact
      </Link>
      <Link
        to='/code'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Code
      </Link>
    </StyledNav>
  );
};

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
};

export default PrimaryNavigation;
