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
  margin-bottom: 1rem;
  `;

const MainLogo = styled.img`
`;

const DividerImg = styled.img`
`;

const ShopSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  background-image: url('/images/SplashShopBackground.png');
  background-repeat: no-repeat;
  background-position: left;
  height: 768px;
  width: 100%;
  margin: 3rem;

  @media screen and (max-width: 640px) {
    height: 40vh;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 50%;
  margin-top: 2rem;

  @media screen and (max-width: 640px) {
    width: 25%;
  }
`;

const LabelFlat = styled.img`
  width: 100%;
  height: auto;
`;

const LowerDividerImg = styled.img`
  margin-bottom: 3rem;
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
      <ShopSectionWrapper>
        <RightWrapper>
          <Link to='/shop'>
            <LabelFlat
              alt='Label Flat'
              src='/images/ShopLabel.png'
            />
          </Link>
        </RightWrapper>
      </ShopSectionWrapper>
      <LowerDividerImg
        alt='Divider Image'
        src='/images/DividerLine.png'
      />
    </Wrapper>
  );
};

export default HomePage;
