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
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-bottom: 0.25rem;

  a {
    font-weight: 300;
    color: ${palette('grayscale', 5)};
    text-shadow: 2px 2px 5px ${palette('grayscale', 0)};
    font-size: 1.3rem;
    &.active {
      color: ${palette('primary', 0)};
    }
  }
`;

const StyledLink = styled(Link)`
  font-family: ${font('primary')};
  width: 150px;
  text-align: center;
`;

const ImageWrapper = styled.img`
  margin: 0.75rem 0 0 ;
  align-self: center;
  height: 125px;
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
