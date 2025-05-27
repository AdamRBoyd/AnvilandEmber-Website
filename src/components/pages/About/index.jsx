import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
  const [Reviews, setReviews] = useState([]);
  // Fetch Reviews from JSON file
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/json/Reviews.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log('Reviews:', data);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

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
