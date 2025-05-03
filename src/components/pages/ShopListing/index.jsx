import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  SALE_ON,
  SALE_PERCENTAGE,
  SALE_TITLE,
} from '../../../constants/SaleDate';

import { PageTitleFrame, ShopListingCard, Spacer } from '../..';

const ShopListing = () => {
  const { state } = useLocation();
  const { listing } = state;

  return (
    <>
      <PageTitleFrame
        title={listing?.title || 'Nope!'}
        subtitle={listing?.subtitle}
      >
        <ShopListingCard
          saleOn={SALE_ON}
          salePercentage={SALE_PERCENTAGE}
          saleTitle={SALE_TITLE}
          {...listing}
        />
      </PageTitleFrame>
      <Spacer padding={6} />
    </>
  );
};

ShopListing.propTypes = {
  title: PropTypes.string,
};

export default ShopListing;
