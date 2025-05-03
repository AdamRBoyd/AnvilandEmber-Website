import { font, palette } from 'styled-theme';
import styled, { css } from 'styled-components';

import { Link, PrimaryNavigation } from '../..';
import {
  END,
  SALE_ON,
  SALE_PERCENTAGE,
  SALE_TITLE,
  START,
} from '../../../constants/SaleDate';

const LogoSaleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem;
  font-family: ${font('primary')};
  background-color: ${palette('grayscale', 0)};
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 0.1rem;
  font-family: ${font('primary')};
  background-color: ${palette('grayscale', 1)};
  width: 100%;
`;

const ImageWrapper = styled.img`
  margin-top: 0.5rem;
  align-self: center;
  height: 60px;
`;

const SaleStyle = css`
  color: ${palette('grayscale', 5)};
  font-family: ${font('primary')};
  stroke: ${palette('grayscale', 0)};
  font-size: 1rem;
`;

const SaleTitle = styled.label`
  ${SaleStyle}
  font-weight: 500;
`;

const SalePercentage = styled.label`
  ${SaleStyle}
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 1.5rem;
`;

const SaleDate = styled.label`
  ${SaleStyle}
  font-weight: 500;
`;

const SaleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${palette('danger', 2)};
  border: 1px solid ${palette('danger', 0)};
  border-radius: 1rem;
  height: 1.5rem;
  width: 350px;
  padding: 0.3rem 1.25rem 0.5rem 1.25rem;
  margin: 0 2rem;
`;

const SalePlaceholder = styled.div`
  background-color: transparent;
`;

const StyledLink = styled(Link)``;

const Header = (props) => {
  return (
    <>
      <LogoSaleWrapper>
        <StyledLink to='/'>
          <ImageWrapper alt='Logo' src='/images/Signature.png' />
        </StyledLink>
        {SALE_ON ? (
          <SaleWrapper>
            <SaleTitle>{SALE_TITLE}</SaleTitle>
            <SalePercentage>{`${SALE_PERCENTAGE}% off`}</SalePercentage>
            <SaleDate>{`${START.toLocaleString('default', {
              month: 'short',
              day: 'numeric',
            })} - ${END.toLocaleString('default', {
              month: 'short',
              day: 'numeric',
            })}`}</SaleDate>
          </SaleWrapper>
        ) : (
          <SalePlaceholder />
        )}
      </LogoSaleWrapper>
      <NavWrapper>
        <PrimaryNavigation />
      </NavWrapper>
    </>
  );
};

export default Header;
