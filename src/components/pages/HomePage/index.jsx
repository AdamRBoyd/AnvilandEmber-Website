import styled from 'styled-components';

import { Link } from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: white; 
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

const MainLogo = styled.img`
`;

const MainImage = styled.img`
`;

const HomePage = () => {
  return (
    <Wrapper>
      <div>
        <MainLogo
          alt='Main Logo'
          src='/images/SplashLogo.png'
        />
      </div>
      <div>
        <Link to='/shop'>
          <MainImage
            alt='Landing Page Main Image'
            src='/images/LandingPageImage.png'
          />
        </Link>
      </div>
    </Wrapper>
  );
};

export default HomePage;
