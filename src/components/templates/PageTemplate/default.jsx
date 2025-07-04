import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Footer, Header } from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 98.1vh;
  box-sizing: border-box;
  background-image: url('/images/LinenBackground.jpg');
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
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  width: 95%;
  z-index: 999;
`;

const PageTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <Content >{children}</Content>
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
