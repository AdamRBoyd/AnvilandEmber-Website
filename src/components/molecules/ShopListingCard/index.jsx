import { font, palette } from 'styled-theme';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, Link, Modal, Paragraph, Spacer } from '../..';

const IMAGE_HEIGHT = '400px';
const IMAGE_WIDTH = '400px';
const MOBILE_IMAGE_HEIGHT = '250px';
const MOBILE_IMAGE_WIDTH = '250px';

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
  
  color: ${palette('grayscale', 0)};
  gap: 1rem;
  width: 90%;

  @media (max-width: 875px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: flex-start;
  align-self: flex-start;
  align-content: flex-start;
  justify-content: center;
  padding: 2rem;

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

const ParagraphWrapper = styled(Paragraph)`
  font-family: ${font('secondary')};
  margin: 0.2rem;
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  align-content: center;
  justify-content: center;
`;

const LargeImage = styled.img`
  border-radius: 0.25rem;
  border: 5px solid ${palette('grayscale', 4)};
  margin: 1rem;
  margin-top: 1.5rem;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;
  justify-self: flex-start;

  @media screen and (max-width: 640px) {
    width: ${MOBILE_IMAGE_WIDTH};
    height: ${MOBILE_IMAGE_HEIGHT};
  }
`;

const SmallImageRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  width: 100%;
  margin: 0.5rem;
`;

const SmallImage = styled.img`
  border-radius: 0.25rem;
  border: 1px solid ${palette('grayscale', 4)};
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  height: 50px;
  width: 50px;
  justify-self: flex-start;

  &:hover {
    transform: scale(1.2);
  }
`;

const ModalImageWrapper = styled.img`
  width: 100%;
`;

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${palette('primary', 0)};
  margin-left: 0rem;
  padding: 0.25rem 0.7rem;
  background-color: ${palette('grayscale', 6)};
  font-size: 0.8rem;
  font-weight: 550;

  @media screen and (max-width: 640px) {
    align-self: center;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.5rem;
  padding: 0.5rem 0.8rem;
  border-top: 1px solid ${palette('grayscale', 5)};
  border-bottom: 1px solid ${palette('grayscale', 5)};
  color: ${palette('primary', 0)};

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-self: center;
  }
`;

const PriceFromWrapper = styled.div`
  font-size: 1rem;
  margin: 0;

  @media screen and (max-width: 640px) {
    font-size: .8rem;
    margin: 0 0 0.5rem;
  }
`;

const VariationWrapper = styled.div`
  font-size: 1rem;
  margin: 0 0.2rem 0 1.6rem;

  @media screen and (max-width: 640px) {
    font-size: .7rem;
    margin: 0.8rem 0 0 0;
  }
`;

const SaleWrapper = styled.div`
  align-items: center;
  color: ${palette('grayscale', 1)};
  background-color: ${palette('success', 3)};
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  font-weight: 500;
  justify-content: flex-start;
  line-height: 1.5rem;
  text-align: left;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  margin-left: 3rem;

  @media screen and (max-width: 640px) {
    font-size: 1rem;
    align-self: center;
    margin-left: 0;
  }
`;

const SalePrice = styled.div`
  text-decoration: line-through;
  font-size: 1.2rem;
  color: ${palette('grayscale', 3)};
  margin: 0 0.7rem;

  @media screen and (max-width: 640px) {
    margin-right: 0;
    font-size: 1.4rem;
    margin-bottom: 0.7rem;
  }
`;

const StyledButton = styled(Button)`
  margin: 1rem 0;
  width: 100%;
  max-width: 500px;
`;

const SoldOutInfo = styled.div`
  font-family: ${font('tertiary')};
  color: ${palette('danger', 0)};
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 0.9rem;
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
  width: 90%;
`;

const StyledLink = styled(Link)`
  color: ${palette('primary', 0)};
  `;

const ShopListingCard = ({
  images,
  description,
  price,
  hasVariations,
  url,
  saleOn,
  salePercentage,
  saleTitle,
  state,
  quantity,
  listingId,
  ...props
}) => {
  const [imageUrl, setImageUrl] = useState(`/images/listings/${listingId}/${listingId}.1.570xN.jpg`);

  const [isOpen, setIsOpen] = useState(false);

  // handle close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // handle open modal
  const openModal = () => {
    setIsOpen(true);
  };

  const formatPrice = (amount) => {
    const num = Number(amount);
    return Number.isInteger(num) ? num : num.toFixed(2);
  }

  return (
    <MainWrapper {...props}>
      <ImageCard>
        <LargeImage src={imageUrl} onClick={() => openModal()} />
        <SmallImageRow>
          {Array.from({ length: images }).map((_, index) => (
            <SmallImage
              key={index}
              src={`/images/listings/${listingId}/${listingId}.${index + 1}.75x75.jpg`}
              onMouseOver={() => setImageUrl(`/images/listings/${listingId}/${listingId}.${index + 1}.570xN.jpg`)}
              onClick={() => setImageUrl(`/images/listings/${listingId}/${listingId}.${index + 1}.570xN.jpg`)}
            />
          ))}
        </SmallImageRow>
      </ImageCard>
      
      <DescriptionWrapper>
        {description.map((line, index) => (
          <ParagraphWrapper key={`key.${index}`}>{line}</ParagraphWrapper>
        ))}

        {saleOn && (
          <>
            <Spacer padding={2} />
            <SaleWrapper>{`${saleTitle} - ${salePercentage}% off`}</SaleWrapper>
          </>
        )}

        <Spacer padding={2} />
        <PriceWrapper>
          <PriceFromWrapper>
            {hasVariations ? 'Price: From' : 'Price:'}
          </PriceFromWrapper>
          {saleOn ? (
            <>
              <SalePrice>
                {price.currency === 'USD' ? '$' : price.currency}
                {formatPrice(price.amount)}
              </SalePrice>
              {price.currency === 'USD' ? '$' : price.currency}
              {formatPrice(price.amount - price.amount * (salePercentage / 100))}
            </>
          ) : (
            <>
              {price.currency === 'USD' ? '$' : price.currency}
              {formatPrice(price.amount)}
            </>
          )}
          <VariationWrapper>
            {hasVariations ? 'Depending on variation' : ''}
          </VariationWrapper>
        </PriceWrapper>
        <Spacer padding={2} />
        <QuantityWrapper>
          {quantity > 0 && quantity < 20
            ? `${quantity} In Stock`
            : 'Made to Order'}
        </QuantityWrapper>

        <Spacer padding={1} />
        <StyledButton
          onClick={() => window.open(url, '_blank')}
          disabled={state === 'active' ? false : true}
          variant='primary'
          buttonHeight={3}
        >
          {state === 'active' ? 'Buy on Etsy' : 'Sold Out'}
        </StyledButton>
        <Spacer padding={1} />
        {state !== 'active' && (
          <>
            <SoldOutInfo>
              Note: Sold listings may be available for custom order
            </SoldOutInfo>
            <SoldOutInfo>
              <StyledLink to='/contact'> Contact me </StyledLink>
              for more Information
            </SoldOutInfo>
          </>
        )}
      </DescriptionWrapper>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalImageWrapper
          src={imageUrl}
          alt='Modal'
          onClick={closeModal}
        />
      </Modal>
    </MainWrapper>
  );
};

ShopListingCard.propTypes = {
  images: PropTypes.number,
  description: PropTypes.array,
  price: PropTypes.object,
  hasVariations: PropTypes.bool,
  url: PropTypes.string,
  saleOn: PropTypes.bool,
  salePercentage: PropTypes.number,
  saleTitle: PropTypes.string,
  state: PropTypes.string,
  quantity: PropTypes.number,
  listingId: PropTypes.number,
};

export default ShopListingCard;
