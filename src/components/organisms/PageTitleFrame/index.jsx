import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Heading, HorizontalRule, Spacer } from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  width: 100%;
  //padding-top: 0.75rem;
`;

const HeadingBackground = styled.div`
    background-image: url('/images/SplashBackground.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
    width: 100%;
    height: 150px;
    margin-bottom: 1rem;
    `;

const HeadingWrapper = styled(Heading)`
  align-self: center;
  color: ${palette('grayscale', 6)};
  font-family: ${font('primary')};
  text-shadow: 2px 2px 5px black;
  font-size: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 640px) {
    font-size: 1.5rem;
    margin: 3rem 0 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  width: 70%;
  `;

const SubtitleWrapper = styled.label`
  color: ${palette('primary', 2)};
  font-family: ${font('tertiary')};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin-top: 0;
  padding-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px black;
  width: 80%;
`;

const PageTitleFrame = ({
  alignLeft,
  children,
  title,
  subtitle,
  noBottomRule,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <HeadingBackground>
        <HeadingWrapper>{title || 'OOPS!'}</HeadingWrapper>
        {subtitle && <SubtitleWrapper>{subtitle}</SubtitleWrapper>}
      </HeadingBackground>
      <ContentWrapper>
        {children}
        <Spacer padding={0.5} />
        {!noBottomRule && <HorizontalRule />}
        <Spacer padding={0.5} />
      </ContentWrapper>
    </Wrapper>
  );
};

PageTitleFrame.propTypes = {
  alignLeft: PropTypes.bool,
  children: PropTypes.node,
  noBottomRule: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default PageTitleFrame;
