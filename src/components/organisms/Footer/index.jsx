import { font, palette } from 'styled-theme';
import styled from 'styled-components';

import { Icon, Link } from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.6rem;
  width: 100%;
  align-items: center;
`;

const Credits = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${palette('grayscale', 5, true)};
  font-size: 0.8rem;
  font-family: ${font('primary')};
  text-align: right;
  margin: 0 2rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  margin: 0 0.5rem;
  align-items: center;
`;

const Socials = styled.div`
  color: ${palette('grayscale', 5, true)};
  font-size: 0.8rem;
  font-family: ${font('primary')};
  margin-left: 0.5rem;
`;

const StyledIcon = styled(Icon)``;

const Footer = (props) => {
  return (
    <Wrapper>
      <StyledLink
        href='https://www.instagram.com/adamboyddesigns/'
        target='_blank'
      >
        <StyledIcon name='Instagram' icon='instagram' size={20} />
        <Socials>Follow me!!</Socials>
      </StyledLink>
      <Credits>&copy; 2022 Adam Boyd Designs</Credits>
    </Wrapper>
  );
};

export default Footer;
