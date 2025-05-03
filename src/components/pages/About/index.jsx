import styled from 'styled-components';

import { Reviews } from '../../../json';
import {
  AboutMe,
  Heading,
  HorizontalRule,
  MyJewelry,
  PageTitleFrame,
  ReviewCard,
  ShopPolicies,
  Spacer,
} from '../..';

const StyledHeading = styled(Heading)`
  align-self: center;
`;

const ReviewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-self: center;
  align-self: center;
  width: 90%;
  gap: 1rem;
`;

const About = () => {
  return (
    <PageTitleFrame title='About Me' noBottomRule>
      <AboutMe />
      <HorizontalRule />
      <MyJewelry />
      <HorizontalRule />
      <StyledHeading>Etsy Reviews</StyledHeading>
      <Spacer padding={2} />
      <ReviewWrapper>
        {Reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </ReviewWrapper>
      <Spacer padding={1} />
      <HorizontalRule />
      <ShopPolicies />
      <Spacer padding={4} />
    </PageTitleFrame>
  );
};

export default About;
