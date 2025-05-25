import { font, palette } from 'styled-theme';
import styled from 'styled-components';

import { Icon, Link } from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.6rem;
  width: 95%;
  align-items: center;
`;

const Credits = styled.div`
  display: flex;
  justify-content: center;
  color: ${palette('grayscale', 5, true)};
  font-size: 0.8rem;
  font-family: ${font('primary')};
  text-align: right;
  margin: 0 2rem;
  width: 300px;
`;

const StyledIGLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0.5rem;
  align-items: center;
  width: 300px;
`;

const StyledCodeLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0.5rem;
  align-items: center;
  width: 300px;
  text-shadow: 1px 1px 1px black;
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
      <StyledIGLink
        href='https://www.instagram.com/AnvilandEmberMetalworks/'
        target='_blank'
      >
        <StyledIcon name='Instagram' icon='instagram' size={20} />
        <Socials>Follow me!!</Socials>
      </StyledIGLink>
      <StyledCodeLink to ='/code' >
        Check out my coding projects!
      </StyledCodeLink>
      <Credits>&copy; 2025 Anvil and Ember Metalworks</Credits>
    </Wrapper>
  );
};

export default Footer;
