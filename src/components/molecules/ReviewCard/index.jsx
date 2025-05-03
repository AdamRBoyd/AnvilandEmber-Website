import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon, Link } from '../..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  border: 1px solid ${palette('grayscale', 6)};
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px ${palette('grayscale', 5)};
  padding: 2rem;
`;

const ListingImage = styled.img`
  height: 100px;
  margin-right: 1rem;
  border-radius: 0.25rem;
`;

const ListingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.5rem;
`;

const UsernameAndDate = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
`;

const Username = styled.div`
  font-weight: 600;
  margin-right: 0.5rem;
`;

const DateWrapper = styled.div`
  margin-left: 0.5rem;
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 1rem;
  border-top: 1px solid ${palette('grayscale', 6)};
  border-bottom: 1px solid ${palette('grayscale', 6)};
  padding: 0.5rem;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  font-family: ${font('primary')};
  font-size: 0.9rem;
`;

const StyledIcon = styled(Icon)`
  color: ${palette('primary', 0)};
`;

const getStars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<StyledIcon icon='star' key={i} size={17} />);
  }
  return stars;
};

const ReviewCard = ({
  username,
  rating,
  review,
  reviewDate,
  title,
  imageUrl,
  listingUrl,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <UsernameAndDate>
        <Username>{username}</Username>
        {' on '}
        <DateWrapper>{reviewDate}</DateWrapper>
      </UsernameAndDate>
      <RatingWrapper>
        {`Rating: `}
        {getStars(rating)}
      </RatingWrapper>
      <ReviewWrapper>{review}</ReviewWrapper>
      <ListingWrapper>
        <ListingImage src={imageUrl} loading='lazy' />
        <Link href={listingUrl} target='_blank'>
          {title}
        </Link>
      </ListingWrapper>
    </Wrapper>
  );
};

ReviewCard.propTypes = {
  username: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  reviewDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ReviewCard;
