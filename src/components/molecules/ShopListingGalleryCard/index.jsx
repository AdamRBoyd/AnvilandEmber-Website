import { palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Spacer, Label } from '../..';

const IMAGE_HEIGHT = '240px';
const IMAGE_WIDTH = '240px';
const CARD_WIDTH = '260px';
const CARD_HEIGHT = '380x';
const MOBILE_IMAGE_HEIGHT = '140px';
const MOBILE_IMAGE_WIDTH = '140px';
const MOBILE_CARD_WIDTH = '150px';
const MOBILE_CARD_HEIGHT = '250px';

const MainWrapper = styled.div`
  color: ${palette('grayscale', 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  padding: 1rem 0.3rem;
  
  &:hover {
    box-shadow: 0px 0px 10px ${palette('grayscale', 4)};
  }
  
  @media screen and (max-width: 640px) {
    width: ${MOBILE_CARD_WIDTH};
    height: ${MOBILE_CARD_HEIGHT};
    padding: 0 0.2rem;
    margin: 0.5rem 0;
  }
`;

const LabelWrapper = styled(Label)`
  color: ${palette('primary', 0)};
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5rem;
  width: 95%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media screen and (max-width: 640px) {
    font-size: 0.8rem; 
  }
`;

const ListingImage = styled.img`
  border-radius: 0.25rem;
  border: 1px solid ${palette('grayscale', 4)};
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;

  &:hover {
    transform: scale(1.25);
  }

  @media screen and (max-width: 640px) {
    width: ${MOBILE_IMAGE_WIDTH};
    height: ${MOBILE_IMAGE_HEIGHT};
  }
`;

const ImageOverlay = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  justify-self: center;
  border-radius: 0.25rem;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;

  &:hover .details {
    opacity: 1;
    height: 22%;
  }

  @media screen and (max-width: 640px) {
    width: ${MOBILE_IMAGE_WIDTH};
    height: ${MOBILE_IMAGE_HEIGHT};
  }
`;

const Details = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 0%;
  background: ${palette('overlayBlack', 1)};
  opacity: 0;
  transition: 0.5s ease;
`;

const SoldOutStatusStyling = css`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.3rem 0 0.2rem;
  border-radius: 0.3rem 0.3rem 0 0;
  opacity: 0.75;

  @media screen and (max-width: 640px) {
    padding: 0.15rem 0 0; 
  }
`;

const SoldOutWrapper = styled.div`
  ${SoldOutStatusStyling}
  background-color: ${palette('danger', 1)};
  border: 1px solid transparent;
  box-shadow: 0px 5px 5px ${palette('grayscale', 1)};
`;

const SoldOutLabel = styled(Label)`
  font-weight: 700;
  color: ${palette('grayscale', 7)};
  text-shadow: 0px 0px 5px ${palette('grayscale', 1)};
  text-transform: uppercase;
  margin: 0 0.2rem;

  @media screen and (max-width: 640px) {
    font-size: 0.6rem; 
    margin: 0 0.1rem;   
  }
`;

const SoldOutNote = styled(SoldOutLabel)`
  font-size: 0.55rem;

  @media screen and (max-width: 640px) {
    font-size: 0.4rem;    
  }
`;

const NotSoldOutWrapper = styled(Label)`
  ${SoldOutStatusStyling}
  color: transparent;
  background-color: transparent;
  border: 1px solid transparent;
`;

const NewListingWrapper = styled(Label)`
  font-weight: 700;
  background-color: dodgerblue;
  color: ${palette('alert', 1)};
  padding: .3rem 0.6rem;
  border-radius: 50%;
  box-shadow: 5px 5px 5px ${palette('grayscale', 1)};
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  text-transform: uppercase;
`;

const PriceAndShippingStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PriceWrapper = styled(Label)`
  ${PriceAndShippingStyles}
  color: ${palette('primary', 0)};
  font-size: 1rem;

`;

const PriceAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 85%;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  border-top: 1px solid ${palette('grayscale', 4)};
  padding: 0.5rem 0 0 0.7rem;

  @media screen and (max-width: 640px) {
    width: 80%;
    padding: 0 0 -1rem 0; 
  }
`;

const SalePriceWrapper = styled.div`
  font-size: 0.9rem;
  text-decoration: line-through;
  margin: 0 0.3rem;
  color: ${palette('grayscale', 3)};
`;

const SalePercentWrapper = styled.div`
  font-size: 1rem;
  color: ${palette('grayscale', 3)};
  margin: 0.2rem 0 .7rem;
  color: ${palette('danger', 4)};

  @media screen and (max-width: 640px) {
    font-size: 0.8rem; 
  }
`;

const VariationsWrapper = styled.div`
  font-size: 0.7rem;
  margin-right: 0.5rem;
`;

const InStockAndShippingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  border-top: 1px solid ${palette('grayscale', 4)};
  font-size: 0.7rem;
`;

const StockShippingLabel = styled(Label)`
  ${PriceAndShippingStyles}
  color: ${palette('grayscale', 4)};
  font-size: 0.7rem;
`;

const ShopListingGalleryCard = ({
  showSold,
  title,
  price,
  hasVariations,
  creationDate,
  newListingCutoff,
  saleOn,
  salePercentage,
  state,
  onClick,
  quantity,
  listingId,
  ...props
}) => {
  return (
    <>
      {state === 'active' || showSold ? (
        <MainWrapper {...props}>
          <ImageOverlay>
            <ListingImage src={`/images/listings/${listingId}/${listingId}.1.570xN.jpg`} alt={title} />
            <Details className='details'>
              <InStockAndShippingWrapper>
                <StockShippingLabel>
                  {quantity > 0 && quantity < 20 && state === 'active'
                    ? `${quantity} In Stock`
                    : 'Made to Order'}
                </StockShippingLabel>
                {price.amount >= 35 ? (
                  <StockShippingLabel>FREE Shipping</StockShippingLabel>
                ) : (
                  <StockShippingLabel>{`Add $${Math.round(
                    35 - price.amount
                  )} more`}</StockShippingLabel>
                )}
              </InStockAndShippingWrapper>
            </Details>
            {state !== 'active' ? (
              <SoldOutWrapper>
                <SoldOutLabel>{'• Sold '}</SoldOutLabel>
                <SoldOutNote>{'(See Note Below)'}</SoldOutNote>
                <SoldOutLabel>{' • '}</SoldOutLabel>
              </SoldOutWrapper>
            ) : (
              <NotSoldOutWrapper>
                {creationDate >= newListingCutoff && (
                  <NewListingWrapper>New</NewListingWrapper>
                )}
              </NotSoldOutWrapper>
            )}
          </ImageOverlay>
          <Spacer padding={0.5} />
          <PriceAndTitle>
            <LabelWrapper>{title}</LabelWrapper>
            {saleOn ? (
              <>
                <PriceWrapper>
                  {hasVariations && <VariationsWrapper>From</VariationsWrapper>}
                  {`$${price.amount - price.amount * (salePercentage / 100)}`}
                  <SalePriceWrapper>{`$${price.amount}`}</SalePriceWrapper>
                </PriceWrapper>
                <SalePercentWrapper>
                  {`(${salePercentage}% off)`}
                </SalePercentWrapper>
              </>
            ) : (
              <PriceWrapper>
                {hasVariations && <VariationsWrapper>From</VariationsWrapper>}
                {`$${price.amount}`}
              </PriceWrapper>
            )}
          </PriceAndTitle>
        </MainWrapper>
      ) : (
        <></>
      )}{' '}
    </>
  );
};

ShopListingGalleryCard.propTypes = {
  showSold: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  price: PropTypes.object,
  hasVariations: PropTypes.bool,
  saleOn: PropTypes.bool,
  salePercentage: PropTypes.number,
  state: PropTypes.string,
  quantity: PropTypes.number,
  listingId: PropTypes.number,
  newListingCutoff: PropTypes.number,
  creationDate: PropTypes.number,
};

export default ShopListingGalleryCard;
