import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Heading, HorizontalRule, Spacer } from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 0.75rem;
`;

const HeadingWrapper = styled(Heading)`
  align-self: center;
  color: ${palette('primary', 0)};
  font-size: 1.85rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-transform: uppercase;
`;

const SubtitleWrapper = styled.div`
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  text-transform: uppercase;
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
      <HeadingWrapper>{title || 'OOPS!'}</HeadingWrapper>
      {subtitle && <SubtitleWrapper>{subtitle}</SubtitleWrapper>}
      <HorizontalRule />
      {children}
      <Spacer padding={0.5} />
      {!noBottomRule && <HorizontalRule />}
      <Spacer padding={0.5} />
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
