import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from '../..';

const StyledNav = styled.nav`
  background-image: url('/images/NavBackground.png');
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

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 130px;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;

  @media screen and (max-width: 1024px) {
    margin-top: 1.75rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`;

const MainLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 65px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
    height: 50px;
  }
`;

const LogoWrapper = styled.img`
  height: 150px;
  margin: 0.5rem 0 0 0.5rem;

  @media screen and (max-width: 1024px) {
    height: 100px;
    margin: 0.25rem 0 0 0.25rem;
  }
`;

const LogoFontWrapper = styled.img`
  margin: 0.25rem 3rem 0 0.5rem; ;
  height: 65px;

  @media screen and (max-width: 1024px) {
    height: 50px;
    margin: 1rem 1rem 0 0.25rem;
  }
`;

const PrimaryNavigation = (props) => {
  return (
    <StyledNav {...props}>
      <Link to='/'>
        <MainLogoWrapper>
          <LogoWrapper alt='Logo' src='/images/AnvilEmberTabLogo.png' />
          <LogoFontWrapper alt='Logo' src='/images/AnvilEmberLogoText.png' />
        </MainLogoWrapper>
      </Link>
      <LinkGroup>
        <LinkWrapper>
          <Link
            to='/shop'
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            Shop
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link
            to='/gallery'
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            Gallery
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link
            to='/about'
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            About
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link
            to='/contact'
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            Contact
          </Link>
        </LinkWrapper>
      </LinkGroup>
    </StyledNav>
  );
};

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
};

export default PrimaryNavigation;
