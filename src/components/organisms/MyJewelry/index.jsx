import styled from 'styled-components';
import { font, palette } from 'styled-theme';

import { Heading, Label, Link } from '../..';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  justify-content: center;
  justify-items: center;
  align-self: center;
  width: 95%;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 2rem;
    padding: 1.5rem 0;
  }
`;

const LeftSideTextBlock = styled.div`
  font-family: ${font('primary')};
  height: fit-content;
  width: 95%;

  @media (min-width: 800px) {
    padding: 0.7rem 0 2.5rem 0;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 2rem;
`;

const LeftParagraph = styled.div`
  font-family: ${font('primary')};
  margin: 0.5rem 1rem;
  text-align: left;
`;

const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  padding: 2rem 1rem 1.5rem 0;

  @media (min-width: 800px) {
    padding: 0 0 0 1rem;
  }
`;

const BenchImage = styled.img`
  border-radius: 0.25rem;
  width: 90%;
  align-self: center;
  justify-self: center;
  object-fit: cover;
  margin-bottom: 1rem;

  @media (min-width: 800px) {
    width: 95%;
    margin: 1rem;
  }
`;

const ImageLabel = styled(Label)`
  align-self: center;
  color: ${palette('primary', 0)};
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  width: 90%;
  margin: 0 0 -0.7rem 0;
`;

const MyJewelry = () => {
  return (
    <>
      <MainContainer>
        <LeftSideTextBlock>
          <StyledHeading>My Jewelry</StyledHeading>
          <LeftParagraph>
            Each piece of jewelry in this shop is designed and hand crafted
            using 100% solid silver, copper and brass. The silver that I use is
            of extremely high quality, composed of 92.5% Silver (or more) and
            copper. I buy from trusted suppliers and do not use silver that
            contains nickel. This means that the jewelry found here will not
            cause irritation to sensitive skin. If you are allergic to copper,
            my jewelry can be made from 99.9% pure silver instead, please{' '}
            <Link to='/contact'>contact me</Link> for more information. No
            plated components are used unless specified in the description.
          </LeftParagraph>
          <LeftParagraph>
            I often use a variety of precious and semi-precious stones in my
            designs, each hand selected by myself. I strive to find gemstones
            with unique and beautiful qualities that will stand out in the
            jewelry designs and that will create one of a kind pieces that will
            become favorites in your jewelry box.
          </LeftParagraph>
          <LeftParagraph>
            I am happy to accommodate one off and custom designs. If you have a
            jewelry design in mind that you would like realized, please don't
            hesitate to ask. I am happy to work with you to bring your ideas to
            life.
          </LeftParagraph>
        </LeftSideTextBlock>
        <ImageBlock>
          <BenchImage alt='Bench' src='/images/Bench.jpg' loading='lazy' />
          <ImageLabel>
            Sandwiched between the mustard and the freezer,
          </ImageLabel>
          <ImageLabel>it may not look like much, but it works.</ImageLabel>
        </ImageBlock>
      </MainContainer>
    </>
  );
};

export default MyJewelry;
