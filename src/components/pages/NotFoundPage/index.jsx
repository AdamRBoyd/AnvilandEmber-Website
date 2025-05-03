import { font, palette } from 'styled-theme';
import styled from 'styled-components';

import { Heading, Link, PageTitleFrame, Paragraph, Spacer } from '../..';

const StyledHeading = styled(Heading)`
  color: ${palette('primary', 0)};
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
`;

const SubHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette('grayscale', 5, true)};
  font-family: ${font('primary')};
  font-size: 1rem;
  font-style: italic;
`;

const BodyText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette('grayscale', 5, true)};
  font-family: ${font('primary')};
  font-size: 0.8rem;
`;

const StyledLink = styled(Link)``;

const StyledParagraph = styled(Paragraph)`
  font-weight: 600;
  padding-bottom: 0.7rem;
`;

const ItalicFont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette('grayscale', 5, true)};
  font-family: ${font('primary')};
  font-size: 0.8rem;
  font-style: italic;
`;

const NotFoundPage = () => {
  const currentPage = window.location;

  return (
    <PageTitleFrame title='404 Page Not Found' noBottomRule>
      <Spacer padding={0.5} />
      <StyledHeading>
        Don't know how you got here, but this is it...
      </StyledHeading>
      <Spacer padding={1} />
      <SubHeading>Not much to look at huh...?</SubHeading>
      <Spacer padding={4} />
      <BodyText>Ok, Let me take a look...</BodyText>
      <Spacer padding={0.5} />
      <BodyText>Ahhh, there's your problem...</BodyText>
      <StyledParagraph>{`${currentPage} doesn't exist...`}</StyledParagraph>
      <BodyText>Where were you trying to go? Cause this ain't it...</BodyText>
      <Spacer padding={3} />
      <ItalicFont>Maybe try one of the links above...</ItalicFont>
      <Spacer padding={6} />
      <StyledParagraph>If you think you've found a bug, </StyledParagraph>
      <StyledLink to='/contact'> please let me know.</StyledLink>
    </PageTitleFrame>
  );
};

export default NotFoundPage;
