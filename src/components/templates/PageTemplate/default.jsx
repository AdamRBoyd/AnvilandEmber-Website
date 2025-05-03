import { size } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Footer, Header } from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 98.1vh;
  box-sizing: border-box;

  @media screen and (max-width: 640px) {
    padding-top: 2rem;
  }
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Content = styled.main`
  width: 100%;
  box-sizing: border-box;
  align-self: center;
  justify-self: center;
  max-width: ${size('maxWidth')};
`;

const StyledFooter = styled.footer`
  margin-top: auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
`;

const PageTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <Content>{children}</Content>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </Wrapper>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PageTemplate;
