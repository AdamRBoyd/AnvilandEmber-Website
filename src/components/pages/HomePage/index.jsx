import styled from 'styled-components';

import { Link } from '../..';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15% 0;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

const MainImage = styled.img`
  width: 95%;
  align-self: center;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Link to='/shop'>
        <MainImage
          alt='Landing Page Main Image'
          src='/images/LandingPageImage.png'
        />
      </Link>
    </Wrapper>
  );
};

export default HomePage;
