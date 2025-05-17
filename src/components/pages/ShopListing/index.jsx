import PropTypes from 'prop-types';

import {
  SALE_ON,
  SALE_PERCENTAGE,
  SALE_TITLE,
} from '../../../constants/SaleDate';

import { AllListings } from '../../../json';

import { PageTitleFrame, ShopListingCard, Spacer } from '../..';

function getListingById(id) {
  const listing = AllListings.findIndex(
    (listing) => listing.listingId === parseInt(id)
  );
  return listing || null;
}

const ShopListing = () => {
  const listing = AllListings.at(getListingById(window.location.pathname.split('/')[3]));

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
