import { palette } from 'styled-theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { SHOP_CATEGORIES } from '../../../constants/ShopCategories';
import { SORT_OPTIONS } from '../../../constants/SortOptions';

import {
  Button,
  Dropdown,
  HorizontalRule,
  Link,
  PageTitleFrame,
  ShopListingGalleryCard,
  Spacer,
} from '../..';

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Footnote = styled.div`
  color: ${palette('danger', 0)};
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 1rem;
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
  width: 90%;
`;

const StyledLink = styled(Link)`
  color: ${palette('primary', 0)};
  `;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px solid ${palette('grayscale', 5)};
  border-radius: 1rem;

  @media screen and (max-width: 1024px) {
    width: 325px;
  }
`;

const InnerNavigation = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 1fr;
  }
`;

const StyledButton = styled(Button)`
  justify-self: center;
  width: 300px;
  padding: 0 0.5rem;

  @media (min-width: 1024px) {
    justify-self: left;
    width: 150px;
  }
`;

const CategoryDropdown = styled(Dropdown)`
  justify-self: center;
`;

const SortDropdown = styled(Dropdown)`
  justify-self: center;

  @media (min-width: 1024px) {
    justify-self: right;
  }
`;

const ShippingCustomOrderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  top: .5rem;
  left: 0;
  color: ${palette('danger', 4)};
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px solid ${palette('grayscale', 5)};
  border-radius: 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;
  width: fit-content;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 640px) {
    flex-direction: column;
    font-size: 0.8rem;
  }
`;

const FreeShippingText = styled.div`
  margin-right: 1rem;
  @media (max-width: 640px) {
    margin: 0 0 -0.25rem 0;
  }
`;

const CustomOrderText = styled.div`
  margin-left: 1rem;
  @media (max-width: 640px) {
    margin-left: 0;
  }
`;

const Shop = () => {
  const isMobile = window.innerWidth <= 640;
  const { state } = useLocation();

  const [currentPage, setCurrentPage] = useState(state?.category || 'all');
  const [showSold, setShowSold] = useState(false);
  const navigate = useNavigate();

  const [AllListings, setAllListings] = useState([]); // State to hold all listings

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
    setListingsData(listings(currentPage)); // assuming listings() uses AllListings internally
  }
  // eslint-disable-next-line
}, [AllListings, currentPage]);

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
  const NEW_LISTING_CUTOFF = Math.floor(new Date().setMonth(new Date().getMonth() - 6)/1000); // Listings added within the last 6 months

  function checkCategory(category, entry) {
    return entry.category === category;
  }

  // Load the listings data from the JSON files based on the current category
  const listings = (currentCategory) => {
    // If the current category is 'all', return all listings
    if (currentCategory === 'all' || currentCategory === undefined) {
      return { label: 'All', category: AllListings };
    }
    //If the current category is not 'all', filter the listings by the current category
    currentCategory = currentCategory[0].toUpperCase() + currentCategory.slice(1);
    const allListings = AllListings.filter((entry) =>
      checkCategory(currentCategory, entry)
    );
    return { label: `${currentCategory}`, category: allListings };
  }

  const [listingsData, setListingsData] = useState(listings(currentPage));
  const [currentSort, setCurrentSort] = useState(SORT_OPTIONS[0].value);

  // Sort the listings based on the current sort parameter
  const sortListings = (sortParam, list) => {
    setCurrentSort(sortParam);

    switch (sortParam) {
      case 'priceASC':
        return list.category.sort((a, b) => a.price.amount - b.price.amount);
      case 'priceDESC':
        return list.category.sort((a, b) => b.price.amount - a.price.amount);
      case 'titleASC':
        return list.category.sort((a, b) =>
          a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
        );
      case 'titleDESC':
        return list.category.sort((a, b) =>
          a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
        );
      case 'dateASC':
        return list.category.sort((a, b) => b.creationDate - a.creationDate);
      case 'dateDESC':
        return list.category.sort((a, b) => a.creationDate - b.creationDate);
      default:
        return list.category.sort((a, b) => b.creationDate - a.creationDate);
    }
  };

  const handleSortChange = (e) => {
    setListingsData({
      label: listingsData?.label,
      category: sortListings(e.target.value, listingsData),
    });
    console.log(listingsData);
  };

  const handleFilterChange = (e) => {
    const category = e.target.value;
    const list = listings(category);
    setCurrentPage(category);
    setListingsData({
      label: listingsData?.label,
      category: sortListings(currentSort, list),
    });
    navigate(`/shop/${category}`, { state: { category } });
  };

  return (
    <>
      <PageTitleFrame title={'Shop'} >
        <NavContainer>
          <InnerNavigation>
            {showSold ? (
              <StyledButton
                onClick={() => setShowSold(false)}
                variant='ghost'
                buttonHeight={1.75}
              >
                Hide Sold Items
              </StyledButton>
            ) : (
              <StyledButton
                onClick={() => setShowSold(true)}
                variant='primary'
                buttonHeight={1.75}
              >
                Show Sold Items
              </StyledButton>
            )}
            <CategoryDropdown
              onChange={handleFilterChange}
              options={SHOP_CATEGORIES}
              label='Category: '
              initialValue={listingsData.label}
            />
            <SortDropdown
              onChange={handleSortChange}
              options={SORT_OPTIONS}
              label='Sorting: '
              initialValue={SORT_OPTIONS[0].label}
            />
          </InnerNavigation>
        </NavContainer>
        <ShippingCustomOrderText>
          <FreeShippingText>Free Shipping on Orders over $35</FreeShippingText>
          {isMobile ? null : ('|')}
          <CustomOrderText>Custom Orders Available</CustomOrderText>
        </ShippingCustomOrderText>
        <Spacer padding={0.5} />
        <GalleryWrapper>
          {listingsData?.category?.map((listing, index) => (
            <Link
              to={`/shop/${currentPage}/${listing.listingId}`}
              title={listing.title}
              key={listing.listingId}
            >
              <ShopListingGalleryCard
                showSold={showSold}
                saleOn={SALE_ON}
                salePercentage={SALE_PERCENTAGE}
                newListingCutoff={NEW_LISTING_CUTOFF}
                {...listing}
              />
            </Link>
          ))}
        </GalleryWrapper>
        <Spacer padding={3} />
        <HorizontalRule />
        <Spacer padding={0.5} />
        <Footnote>
          Note: Sold listings may be available for custom order
        </Footnote>
        <Footnote>
          <StyledLink to='/contact'> Contact me </StyledLink>
          for more Information
        </Footnote>
      </PageTitleFrame>
      <Spacer padding={6} />
    </>
  );
};

Shop.propTypes = {
};

export default Shop;
