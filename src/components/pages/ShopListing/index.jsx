import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { PageTitleFrame, ShopListingCard, Spacer } from '../..';

const ShopListing = () => {

  const [AllListings, setAllListings] = useState([]); // State to hold all listings
  const [listing, setListing] = useState(); // State to hold the current listing
  const [listingFound, setListingFound] = useState(false); // boolean to check if the listing is found

  useEffect(() => {
    const getAllListings = async () => {
      try {
        const response = await fetch('/json/EtsyAll.json');
        const data = await response.json();
        setAllListings(data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    getAllListings();
  }, []);
  
  useEffect(() => {
    if (AllListings.length > 0) {
      const id = parseInt(window.location.pathname.split('/')[3]);
      const result = AllListings.find(l => l.listingId === id);
      if (result) {
        setListing(result);
        setListingFound(true);
      }
    }
  }, [AllListings]);

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
  const SALE_ON = new Date() >= START && new Date() <= END;
  const SALE_PERCENTAGE = saleDates.salePercentage;
  const SALE_TITLE = saleDates.saleTitle;

  return (
    <>
      <PageTitleFrame
        title={listing?.title || 'Nope!'}
        subtitle={listing?.subtitle}
        noBottomRule
      >
        {listingFound ? (
          <ShopListingCard
            saleOn={SALE_ON}
            salePercentage={SALE_PERCENTAGE}
            saleTitle={SALE_TITLE}
            {...listing}
          />
        ) : (
          <p>Listing not found.</p>
        )}
      </PageTitleFrame>
      <Spacer padding={2} />
    </>
  );
};

ShopListing.propTypes = {
  title: PropTypes.string,
};

export default ShopListing;
