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
    height: fit-content;
    margin-bottom: 1rem;

    @media screen and (max-width: 640px) {
      margin-bottom: 0.5rem;
    }
    `;

const HeadingWrapper = styled(Heading)`
  align-self: center;
  color: ${palette('grayscale', 6)};
  text-shadow: 2px 2px 5px black;
  font-size: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  text-transform: uppercase;
  margin: 2rem 0;

  @media screen and (max-width: 640px) {
    font-size: 1.15rem;
    margin: 1.5rem 0;
    padding: 0 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  width: 90%;
  `;

const SubtitleWrapper = styled.label`
  color: ${palette('primary', 2)};
  font-family: ${font('tertiary')};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: -1rem 0 2rem 0;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px black;
  width: 80%;

  @media screen and (max-width: 640px) {
    font-size: 0.7rem;
    width: 90%;
    margin: -0.5rem 0 1.25rem 0;
  }
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
