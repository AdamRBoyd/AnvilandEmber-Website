import { palette } from 'styled-theme';
import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { PrimaryNavigation } from '../..';

const LogoSaleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  background-color: ${palette('grayscale', 0)};
  width: 100%;
`;

const SaleStyle = css`
  color: ${palette('grayscale', 5)};
  stroke: ${palette('grayscale', 0)};
  font-size: 1rem;
  width: 150px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const SaleTitle = styled.label`
  ${SaleStyle}
  font-weight: 500;
`;

const SalePercentage = styled.label`
  ${SaleStyle}
  font-size: 1.5rem;
  font-weight: 600;

  @media screen  and (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const SaleDate = styled.label`
  ${SaleStyle}
  font-weight: 500;
`;

const SaleWrapper = styled.div`
  z-index: -99;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url('/images/SaleBannerBG.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 99.4vw;
  height: 25px;
  border: 1px solid ${palette('danger', 1)};
  padding: 0.2rem 0 0.5rem 0;
  text-shadow: 1px 1px 3px ${palette('grayscale', 0)};
`;

const SalePlaceholder = styled.div`
  background-color: transparent;
`;


const Header = (props) => {
  const [saleDates, setSaleDates] = useState({});

  // Fetch SaleDates from JSON file
  useEffect(() => {
    const fetchSaleDates = async () => {
      try {
        const response = await fetch('/json/SaleDates.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log('Sale Dates:', data);
        setSaleDates(data);
      } catch (error) {
        console.error('Error fetching sale dates:', error);
      }
    };

    fetchSaleDates();
  }, []);


  const START = new Date(saleDates.saleStart);
  const END = new Date(saleDates.saleEnd);
  const SALE_ADVERT = new Date(saleDates.advertStart);
  const SALE_ON = new Date() >= SALE_ADVERT && new Date() <= END;
  const SALE_PERCENTAGE = saleDates.salePercentage;
  const SALE_TITLE = saleDates.saleTitle;

  return (
    <>
      <NavWrapper>
        <PrimaryNavigation />
      </NavWrapper>
      <LogoSaleWrapper>
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
    </>
  );
};

export default Header;
