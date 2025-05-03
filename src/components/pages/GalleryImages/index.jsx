import { palette } from 'styled-theme';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import { Images } from '../../../json';
import { Modal, PageTitleFrame, Spacer } from '../..';

const IMAGE_HEIGHT = '225px';
const IMAGE_WIDTH = '225px';

const GalleryWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.5rem;
  width: 100%;
`;

const ImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    box-shadow: 0px 0px 10px ${palette('grayscale', 4)};
  }
`;

const ImageWrapper = styled.img`
  border-radius: 0.25rem;
  cursor: pointer;
  object-fit: cover;
  height: ${IMAGE_HEIGHT};
  width: ${IMAGE_WIDTH};
`;

const ModalImageWrapper = styled.img`
  border-radius: 0.25rem;
  width: 100%;
  max-height: calc(70vh);
  object-fit: cover;
`;

const Description = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
  text-align: center;
  font-size: 1rem;
  color: ${palette('primary', 0)};
`;

const DescriptionLine = styled.p`
  margin: 0.1rem;
`;

const GalleryImages = () => {
  const { state } = useLocation();
  const { title, section } = state;
  const imagesInfo = Images[section];

  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setImage] = useState();

  // handle close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // handle open modal
  const openModal = (image) => {
    setImage(image);
    setIsOpen(true);
  };

  return (
    <>
      <PageTitleFrame title={title}>
        <GalleryWrapper>
          {imagesInfo.images.map((image, index) => (
            <ImageCard key={index}>
              <ImageWrapper
                src={`/images/gallery/${image.filename}`}
                key={`${image.filename}-${index}`}
                alt={image.altText}
                loading='lazy'
                onClick={() =>
                  openModal({
                    imageSrc: `/images/gallery/${image.filename}`,
                    title: image.altText,
                    description: image.description,
                  })
                }
              />
            </ImageCard>
          ))}
        </GalleryWrapper>
      </PageTitleFrame>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalImage?.title}
        description={modalImage?.description}
        width={700}
      >
        <ModalImageWrapper
          src={modalImage?.imageSrc}
          alt='Modal'
          onClick={closeModal}
        />
        <Description>
          {modalImage?.description.map((line, index) => (
            <DescriptionLine key={index}>{line}</DescriptionLine>
          ))}
        </Description>
      </Modal>
      <Spacer padding={0.5} />
    </>
  );
};

export default GalleryImages;
