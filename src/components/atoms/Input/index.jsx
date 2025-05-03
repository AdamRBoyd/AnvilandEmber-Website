import { font, palette } from 'styled-theme';
import { ifProp } from 'styled-tools';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const fontSize = ({ height }) => `${height / 35.5555555556}rem`;

const styles = css`
  font-family: ${font('primary')};
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  font-size: ${fontSize};
  height: ${ifProp({ type: 'textarea' }, 'auto', '2.2222222222em')};
  color: ${palette('primary', 0)};
  background-color: transparent;
  border: 1px solid ${palette('primary', 3)};
  border-radius: 2px;

  ::placeholder {
    color: ${palette('grayscale', 3)};
  }

  &:not(:placeholder-shown):not(:focus):invalid {
    background-color: ${palette('danger', 6)};
    outline: 2px solid ${palette('danger', 4)};
  }

  &[type='date'],
  &[type='select'] {
    &:not(:placeholder-shown):not(:focus):invalid {
      background-color: transparent;
      outline: none;
    }
  }

  &[type='checkbox'] {
    color: ${palette('primary', 0)};
    flood-color: ${palette('primary', 0)};
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.4rem 0.1rem 0;
  }
  &[type='radio'] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }

  &[type='date'],
  &[type='email'],
  &[type='tel'],
  &[type='number'],
  &[type='password'],
  &[type='search'],
  &[type='text'] {
    text-indent: 0.2rem;
  }
  &[type='textarea'] {
    padding: 1rem;
  }

  &[type='date'],
  &[type='email']:hover,
  &[type='tel']:hover,
  &[type='number']:hover,
  &[type='password']:hover,
  &[type='text']:hover,
  &[type='textarea']:hover {
    border-color: ${palette('grayscale', 2)};
  }

  &[type='date'],
  &[type='email']:focus,
  &[type='tel']:focus,
  &[type='number']:focus,
  &[type='password']:focus,
  &[type='text']:focus,
  &[type='textarea']:focus {
    outline-color: transparent;
    outline-offset: 0;
    outline-style: solid;
    border-color: ${palette('primary', 1)};
  }

  &[type='date'],
  &[type='email']:active,
  &[type='tel']:active,
  &[type='number']:active,
  &[type='password']:active,
  &[type='text']:active,
  &[type='textarea']:active {
    border-color: ${palette('primary', 1)};
  }
`;

const StyledTextarea = styled.textarea`
  ${styles}
`;
const StyledSelect = styled.select`
  ${styles}
`;
const StyledInput = styled.input`
  ${styles}
`;

const Input = ({ type, noInvalidStyle, ...props }) => {
  if (type === 'textarea') {
    return <StyledTextarea {...props} type={type} noInvalidStyle />;
  }
  if (type === 'select') {
    return <StyledSelect {...props} type={type} noInvalidStyle />;
  }
  return <StyledInput {...props} type={type} noInvalidStyle />;
};

Input.propTypes = {
  type: PropTypes.string,
  noInvalidStyle: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  invalid: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  height: 40,
};

export default Input;
