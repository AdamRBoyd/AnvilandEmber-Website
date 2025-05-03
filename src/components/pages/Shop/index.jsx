import { font, palette } from 'styled-theme';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import { SHOP_CATEGORIES } from '../../../constants/ShopCategories';
import { SORT_OPTIONS } from '../../../constants/SortOptions';
import { SALE_ON, SALE_PERCENTAGE } from '../../../constants/SaleDate';

import {
  AllListings,
  Earrings,
  Nose,
  Pendants,
  Rings,
  Sets,
} from '../../../json';

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
  font-family: ${font('primary')};
  color: ${palette('danger', 0)};
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 0.75rem;
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
  width: 90%;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 1rem 0;
  border-radius: 0.5rem;
  background-color: ${palette('grayscale', 6)};

  @media (min-width: 875px) {
    width: 85%;
  }
`;

const InnerNavigation = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;

  @media (min-width: 875px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 1fr;
  }
`;

const StyledButton = styled(Button)`
  justify-self: center;
  width: 200px;
  padding: 0 0.5rem;

  @media (min-width: 875px) {
    justify-self: left;
    width: 150px;
  }
`;

const CategoryDropdown = styled(Dropdown)`
  justify-self: center;
`;

const SortDropdown = styled(Dropdown)`
  justify-self: center;

  @media (min-width: 875px) {
    justify-self: right;
  }
`;

const FreeShippingFlag = styled.div`
  position: relative;
  top: -1rem;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 2rem;
  text-align: center;
  width: 40%;
  text-transform: uppercase;
  text-align: center;
  background-color: ${palette('success', 3)};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border: 1px solid ${palette('grayscale', 6)};
  border-top: 1px solid ${palette('grayscale', 4)};
`;

const Shop = () => {
  const { state } = useLocation();
  const [currentPage] = useState(state?.category || 'all');
  const [showSold, setShowSold] = useState(true);
  const navigate = useNavigate();

  // Load the listings data from the JSON files based on the current category
  const listings = (currentCategory) => {
    switch (currentCategory) {
      case 'earrings':
        return { label: 'Earrings', category: Earrings };
      case 'nose':
        return { label: 'Nose', category: Nose };
      case 'pendants':
        return { label: 'Pendants', category: Pendants };
      case 'rings':
        return { label: 'Rings', category: Rings };
      case 'sets':
        return { label: 'Sets', category: Sets };
      case 'all':
      default:
        return { label: 'All', category: AllListings };
    }
  };

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
        return list.category.sort((a, b) => a.index - b.index);
    }
  };

  const handleSortChange = (e) => {
    setListingsData({
      label: listingsData?.label,
      category: sortListings(e.target.value, listingsData),
    });
  };

  const handleFilterChange = (e) => {
    const category = e.target.value;
    const list = listings(category);
    setListingsData({
      label: listingsData?.label,
      category: sortListings(currentSort, list),
    });
    navigate(`/shop/${category}`, { state: { category } });
  };

  return (
    <>
      <PageTitleFrame title={'Shop'}>
        <NavContainer>
          <InnerNavigation>
            {showSold ? (
              <StyledButton
                onClick={() => setShowSold(false)}
                variant='primary'
                buttonHeight={1.75}
              >
                Hide Sold Out
              </StyledButton>
            ) : (
              <StyledButton
                onClick={() => setShowSold(true)}
                variant='ghost'
                buttonHeight={1.75}
              >
                Show Sold Out
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
        <HorizontalRule />
        <FreeShippingFlag>Free Shipping on orders over $35</FreeShippingFlag>
        <Spacer padding={0.5} />
        <GalleryWrapper>
          {listingsData.category.map((listing, index) => (
            <Link
              to={`/shop/${currentPage}/${listing.listingId}`}
              state={{ listing }}
              title={listing.title}
              key={listing.listingId}
            >
              <ShopListingGalleryCard
                showSold={showSold}
                saleOn={SALE_ON}
                salePercentage={SALE_PERCENTAGE}
                {...listing}
              />
            </Link>
          ))}
        </GalleryWrapper>
        <Spacer padding={0.5} />
        <HorizontalRule />
        <Spacer padding={0.5} />
        <Footnote>
          Note: Sold listings may be available for custom order
        </Footnote>
        <Footnote>
          <Link to='/contact'> Contact me </Link>
          for more Information
        </Footnote>
      </PageTitleFrame>
      <Spacer padding={6} />
    </>
  );
};

Shop.propTypes = {};

export default Shop;
