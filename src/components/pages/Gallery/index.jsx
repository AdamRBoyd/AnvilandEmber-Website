import { font, palette } from 'styled-theme';
import styled, { css } from 'styled-components';

import { Link, PageTitleFrame, Paragraph, Spacer } from '../..';

const ParagraphWrapper = styled(Paragraph)`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${palette('grayscale', 2)};
  width: 90%;
`;

const GalleryWrapper = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: -2.5rem;
  width: 100%;
`;

const CardWrapper = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 1rem 0.25rem;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  }
`;

const Styling = css`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImage = styled.img`
  ${Styling}
  border-radius: 0.25rem;
  height: 250px;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  ${Styling}
  text-align: center;
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 1rem;
  text-transform: uppercase;
`;

const Gallery = () => {
  return (
    <>
      <PageTitleFrame title='Custom Pieces and Past Items' noBottomRule>
        <ParagraphWrapper>
          If you are interested in getting one of these made for yourself or
          have an idea for a custom item, head over to the contact page and send
          me a message.
        </ParagraphWrapper>
        <GalleryWrapper>
          <CardWrapper>
            <Link
              to='/gallery/rings'
              state={{ title: 'Rings', section: 'rings' }}
            >
              <StyledImage src='/images/gallery/Rings.png' alt='Rings' />
              <StyledLabel>Rings</StyledLabel>
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link
              to='/gallery/pendants'
              state={{ title: 'Pendants', section: 'pendants' }}
            >
              <StyledImage src='/images/gallery/Pendants.png' alt='Pendants' />
              <StyledLabel>Pendants</StyledLabel>
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link
              to='/gallery/earrings'
              state={{ title: 'Earrings', section: 'earrings' }}
            >
              <StyledImage src='/images/gallery/Earrings.png' alt='Earrings' />
              <StyledLabel>Earrings</StyledLabel>
            </Link>
          </CardWrapper>
          <CardWrapper>
            <Link
              to='/gallery/other'
              state={{ title: 'Other', section: 'other' }}
            >
              <StyledImage src='/images/gallery/Other.png' alt='Other' />
              <StyledLabel>Other</StyledLabel>
            </Link>
          </CardWrapper>
        </GalleryWrapper>
      </PageTitleFrame>
      <PageTitleFrame title='Fabrication' noBottomRule>
        <ParagraphWrapper>Pictures from the building process.</ParagraphWrapper>
        <GalleryWrapper>
          <CardWrapper>
            <Link
              to='/gallery/fabrication'
              state={{ title: 'Fabrication', section: 'fabrication' }}
            >
              <StyledImage
                src='/images/gallery/Fabrication.png'
                alt='Fabrication'
              />
              <StyledLabel>Fabrication</StyledLabel>
            </Link>
          </CardWrapper>
        </GalleryWrapper>
      </PageTitleFrame>
      <Spacer padding={6} />
    </>
  );
};

export default Gallery;
