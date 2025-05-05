import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from '../..';

const StyledNav = styled.nav`
  background-image: url('/images/Divider7.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 95px;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-bottom: 0.25rem;
  > :not(:first-child) {
    margin-left: 2.5rem;
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

const StyledLink = styled(Link)`
  font-family: ${font('primary')};
`;

const ImageWrapper = styled.img`
  margin: 0.75rem 0 0 ;
  align-self: center;
  height: 105px;
`;

const PrimaryNavigation = (props) => {
  return (
    <StyledNav {...props}>
      <StyledLink
        to='/shop'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Shop
      </StyledLink>
      <StyledLink
        to='/gallery'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Gallery
      </StyledLink>
      <StyledLink to='/'>
        <ImageWrapper alt='Logo' src='/images/LogoRondel.png' />
      </StyledLink>
      <StyledLink
        to='/about'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        About
      </StyledLink>
      <StyledLink
        to='/contact'
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        Contact
      </StyledLink>
    </StyledNav>
  );
};

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
};

export default PrimaryNavigation;
