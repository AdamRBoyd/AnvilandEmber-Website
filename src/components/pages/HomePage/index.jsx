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

const MainLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  `;

const MainLogo = styled.img`
`;

const MainImage = styled.img`
`;

const DividerImg = styled.img`
`;

const HomePage = () => {
  return (
    <Wrapper>
      <MainLogoWrapper>
        <MainLogo
          alt='Main Logo'
          src='/images/SplashLogo2.png'
        />
        <DividerImg
          alt='Divider Image'
          src='/images/DividerLine.png'
        />
      </MainLogoWrapper>
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
