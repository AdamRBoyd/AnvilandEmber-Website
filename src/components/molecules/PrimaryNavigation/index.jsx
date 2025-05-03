import { palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from '../..';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-bottom: 0.75rem;
  > :not(:first-child) {
    margin-left: 2rem;
  }
  a {
    font-weight: 300;
    color: ${palette('grayscale', 3)};
    font-size: 1.3rem;
    &.active {
      color: ${palette('primary', 0)};
    }
  }
`;

const StyledLink = styled(Link)``;

const ImageWrapper = styled.img`
  margin: 0 1rem 0.25rem ;
  align-self: center;
  height: 60px;
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
      <StyledLink to='/'>
        <ImageWrapper alt='Logo' src='/images/AnvilEmberLogo.png' />
      </StyledLink>
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
    </StyledNav>
  );
};

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
};

export default PrimaryNavigation;
