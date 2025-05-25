import styled from 'styled-components';
import { font, palette } from 'styled-theme';


import { Link } from '../..';
import { FeaturedListings } from '../../../json';

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

const SplashArea = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/images/SplashBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 300px;
  `;

const SplashLabel = styled.label`
    font-family: ${font('primary')};
  font-size: 3rem;
  font-weight: 400;
  color: ${palette('grayscale', 6)};
  text-shadow: 2px 2px 5px black;
  margin: 2rem 0;
  `;

const LabelFlat = styled.img`
  width: 100%;
  height: auto;
`;

const FeaturedSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  margin: 1rem 0 3rem 0;
`;

const FeaturedLabel = styled.label`
  font-family: ${font('primary')};
  font-size: 3rem;
  font-weight: 400;
  color: ${palette('grayscale', 2)};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 2rem 0;
`;

const FeaturedListing = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 1000px;
`;

const FeaturedListingImg = styled.img`
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 5px black;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;

const AboutSectionWrapper = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url('/images/SplashBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 450px;
`;

const AboutSection = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 960px;
  min-width: 800px;
  height: 450px;
`;

const AboutSectionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutLabel = styled.label`
  font-family: ${font('primary')};
  font-size: 3rem;
  font-weight: 400;
  color: ${palette('grayscale', 6)};
  text-shadow: 2px 2px 5px black;
`;

const AboutText = styled.label`
  font-family: ${font('secondary')}; 
  font-size: 1.3rem;
  font-weight: 400;
  color: ${palette('grayscale', 7)};
  text-shadow: 1px 1px 3px black;
  margin: 1rem 0;
  text-align: center;
  width: 80%;
`;

const AboutImage = styled.img`
  width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 5px black;
  margin: 0 4rem 0 1rem;
`;

const LearnMore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: center;
  width: 160px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 1px 1px 3px black;
  font-family: ${font('primary')};
`;

const LowerDividerImg = styled.img`
`;

const HomePage = () => {
  return (
    <Wrapper>
      <SplashArea>
        <SplashLabel>
          Handcrafted in Flame & Metal
        </SplashLabel>
        <Link to='/shop'>
          <LabelFlat
            alt='Label Flat'
            src='/images/ShopLabel.png'
          />
        </Link>
      </SplashArea>
      <FeaturedSectionWrapper>
        <FeaturedLabel>
          Featured Jewelry
        </FeaturedLabel>
        <FeaturedListing>
          {FeaturedListings.listings.map((listing, index) => (
            <Link to={`/shop/all/${listing}`} key={index}>
              <FeaturedListingImg
                alt={listing.listing}
                src={`/images/listings/${listing}/${listing}.1.570xN.jpg`}
                key={index}
              />
            </Link>
          ))}
        </FeaturedListing>
      </FeaturedSectionWrapper>
      <AboutSectionWrapper>
        <AboutSection>
          <AboutSectionText>
            <AboutLabel>
              About Us
            </AboutLabel>
            <AboutText>
              At Anvil & Ember Metalworks, we craft unique silver, copper, and brass jewelry by hand—no plating, no shortcuts. Each piece is designed with care, using high-quality metals and hand-selected gemstones to create meaningful, one-of-a-kind designs. Custom orders are always welcome.
            </AboutText>
            <AboutText>
              <Link to='/about'>
                <LearnMore>
                  Learn more ›
                </LearnMore>
              </Link>
            </AboutText>
          </AboutSectionText>
          <AboutImage
            alt='About Image'
            src='/images/gallery/pendants/BrokenHeartCopperMain.jpg'
          />
        </AboutSection>
      </AboutSectionWrapper>
      <LowerDividerImg
        alt='Divider Image'
        src='/images/DividerLine.png'
      />
    </Wrapper>
  );
};

export default HomePage;
