import { font, palette } from 'styled-theme';
import { ifProp } from 'styled-tools';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const fontSize = ({ fontSize }) => `${fontSize}rem`;
const buttonHeight = ({ buttonHeight }) => `${buttonHeight}em`;
const buttonWidth = ({ buttonWidth }) => `${buttonWidth}em`;

const styles = css`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  font-family: ${font('primary')};
  align-items: center;
  white-space: nowrap;
  font-size: ${fontSize};
  height: ${buttonHeight};
  width: ${buttonWidth};
  min-width: fit-content;
  justify-content: center;
  text-decoration: none;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  appearance: none;
  border-radius: 0.5em;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
`;

const PrimaryButton = styled.button`
  ${styles}
  border: 0.0625em solid ${palette('primary', 1)};
  background-color: ${palette('primary', 1)};
  color: ${palette('white', 0)};

  &:hover,
  &:focus,
  &:active {
    background-color: ${palette('primary', 0)};
  }

  &[disabled] {
    border: 0.01rem solid ${palette('grayscale', 4)};
    background-color: ${palette('grayscale', 4)};
  }
`;

const SecondaryButton = styled.button`
  ${styles}
  border: transparent;
  background-color: transparent;
  color: ${palette('primary', 0)};

  &:hover,
  &:focus,
  &:active {
    border: 0.1rem solid ${palette('primary', 1)};
  }

  &[disabled] {
    color: ${palette('grayscale', 4)};
  }
`;

const TertiaryButton = styled.button`
  ${styles}
  border: transparent;
  background-color: transparent;
  color: ${palette('grayscale', 2)};

  &:hover,
  &:focus,
  &:active {
    border: 0.1rem solid ${palette('grayscale', 2)};
  }

  &[disabled] {
    color: ${palette('grayscale', 4)};
  }
`;

const GhostButton = styled.button`
  ${styles}
  border: 0.1rem solid ${palette('primary', 1)};
  background-color: transparent;
  color: ${palette('primary', 1)};

  &:hover,
  &:focus,
  &:active {
    border: 0.1rem solid ${palette('primary', 2)};
    color: ${palette('primary', 2)};
  }

  &[disabled] {
    color: ${palette('grayscale', 4)};
    border: 0.01rem solid ${palette('grayscale', 4)};
  }
`;

const Button = ({ variant, fontSize, buttonHeight, disabled, ...props }) => {
  switch (variant) {
    case 'primary':
      return (
        <PrimaryButton
          {...props}
          fontSize={fontSize}
          buttonHeight={buttonHeight}
          disabled={disabled}
        />
      );
    case 'secondary':
      return (
        <SecondaryButton
          {...props}
          fontSize={fontSize}
          buttonHeight={buttonHeight}
          disabled={disabled}
        />
      );
    case 'tertiary':
      return (
        <TertiaryButton
          {...props}
          fontSize={fontSize}
          buttonHeight={buttonHeight}
          disabled={disabled}
        />
      );
    case 'ghost':
      return (
        <GhostButton
          {...props}
          fontSize={fontSize}
          buttonHeight={buttonHeight}
          disabled={disabled}
        />
      );
    default:
      return (
        <PrimaryButton
          {...props}
          fontSize={fontSize}
          buttonHeight={buttonHeight}
          disabled={disabled}
        />
      );
  }
};

Button.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.number,
  variant: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  fontSize: 1,
  buttonHeight: 2.5,
};

export default Button;
