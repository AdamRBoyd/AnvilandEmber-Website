import { font, palette } from 'styled-theme';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styled, { css } from 'styled-components';

import { Heading } from '../..';

const overlayStyles = css`
  position: fixed;
  background-color: ${palette('overlayBlack', 0)};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  &[class*='after-open'] {
    opacity: 1;
  }
  &[class*='before-close'] {
    opacity: 0;
  }
`;

const ModalBox = styled(ReactModal)`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-family: ${font('primary')};
  font-size: 1rem;
  background-color: ${palette('grayscale', 0, true)};
  border-radius: 0.25em;
  color: ${palette('grayscale', 0)};
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
  right: auto;
  bottom: auto;
  margin: 1rem calc(-50% + 1rem) 1rem 1rem;
  transform: translate(-50%, 100%);
  transition: transform 250ms ease-in-out;
  outline: none;
  box-sizing: border-box;
  min-width: 320px;
  max-width: calc(640px - 1rem);
  max-height: calc(960px - 1rem);
  overflow: cover;
  padding-top: ${({ hasHeader }) => (hasHeader ? 0 : '1rem')};
  @media screen and (max-height: 900px) {
    max-height: calc(100% - 1rem);
    min-height: 0;
  }
  &[class*='after-open'] {
    transform: translate(-50%, -50%);
  }
  &[class*='before-close'] {
    transform: translate(-50%, 100%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  > *:first-child {
    flex: 1;
  }
`;

const StyledHeading = styled(Heading)`
  margin: 0 1rem 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${palette('primary', 0)};
`;

const Content = styled.div`
  overflow: auto;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
`;

const StyledReactModal = styled(({ className, ...props }) => (
  <ModalBox overlayClassName={className} closeTimeoutMS={250} {...props} />
))`
  ${overlayStyles}
`;

ReactModal.setAppElement('#root');

const Modal = ({
  children,
  title,
  description,
  closeable,
  onClose,
  ...props
}) => {
  const { reverse } = props;
  const hasHeader = title || closeable;
  return (
    <StyledReactModal
      contentLabel={title || 'Modal'}
      onRequestClose={onClose}
      hasHeader={hasHeader}
      {...props}
    >
      <Wrapper>
        {hasHeader && (
          <Header>
            <StyledHeading level={2} reverse={reverse}>
              {title}
            </StyledHeading>
          </Header>
        )}
        <Content>{children}</Content>
      </Wrapper>
    </StyledReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  closeable: PropTypes.bool,
  reverse: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
