import { font, palette } from 'styled-theme';
import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const MENU_WIDTH = '150px';

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  color: ${palette('primary', 0)};
  font-family: ${font('primary')};
  font-size: 0.95rem;
  cursor: pointer;
  gap: 0.5rem;
`;

const DropDownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const DropDownStyles = css`
  justify-content: center;
  align-items: center;
  background-color: ${palette('grayscale', 7)};
  border: 1px solid ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  width: ${MENU_WIDTH};
`;

const DropdownToggle = styled.div`
  ${DropDownStyles}
  display: grid;
  grid-template-columns: 1fr 6fr 0.5fr 0.5fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'padL label arrow padR';
  flex-direction: row;
  justify-content: space-around;
  height: 1.75rem;
  overflow: hidden;
`;

const Placeholder = styled.div`
  grid-area: label;
  text-align: center;
`;

const DropdownMenu = styled.div`
  ${DropDownStyles}
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  top: 2rem;
  z-index: 10;
`;

const HiddenDropdownMenu = styled(DropdownMenu)`
  display: none;
`;

const StyledLabel = styled.label`
  top: -0.85rem;
  left: 0;
`;

const StyledOption = styled.div`
  width: 100%;
  margin: 0 1rem;

  &:hover {
    color: ${palette('grayscale', 0)};
    background-color: ${palette('primary', 3)};
  }

  &:first-child {
    padding: 0.5rem 0 0.3rem;
    border-bottom: 0.2px solid ${palette('grayscale', 5)};
  }
  &:not(:first-child, :last-child) {
    padding: 0.3rem 0;
    border-bottom: 0.2px solid ${palette('grayscale', 5)};
  }
  &:last-child {
    padding: 0.3rem 0 0.5rem;
  }
`;

const Arrow = styled.div`
  grid-area: arrow;
  border-color: ${palette('grayscale', 2)} transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: ' ';
  display: block;
`;

const OpenArrow = styled(Arrow)`
  border-color: transparent transparent ${palette('grayscale', 2)};
  border-width: 0 5px 5px;
`;

const Dropdown = ({ options, label, onChange, initialValue, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [placeholderLabel, setPlaceholderLabel] = useState(
    initialValue || 'Select...'
  );
  const wrapperRef = useRef();

  const setOpen = () => {
    setIsOpen(true);
  };

  const setClose = (e) => {
    setIsOpen(false);
  };

  const handleClick = () => {
    isOpen ? setClose() : setOpen();
  };

  const setSelected = (e) => {
    setClose();
    if (e.target.id !== 'empty') {
      e.target.value = e.target.id;
      setPlaceholderLabel(e.target.textContent);
      onChange(e);
    }
  };

  const handleDocumentClick = (e) => {
    if (wrapperRef?.current?.contains(e?.target)) {
      // inside click
      return;
    }
    setClose();
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GroupWrapper ref={wrapperRef} {...props}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <DropDownWrapper>
        <DropdownToggle onClick={handleClick}>
          <Placeholder>{placeholderLabel}</Placeholder>
          {isOpen ? <OpenArrow /> : <Arrow />}
        </DropdownToggle>
        {isOpen && (
          <DropdownMenu onChange={onChange} {...props}>
            {options ? (
              options.map((option) => (
                <StyledOption
                  key={option.value}
                  id={option.value}
                  value={option.value}
                  onClick={setSelected}
                >
                  {option.label}
                </StyledOption>
              ))
            ) : (
              <StyledOption id={'empty'} value={'empty'} onClick={setSelected}>
                No Options
              </StyledOption>
            )}
          </DropdownMenu>
        )}
        {!isOpen && <HiddenDropdownMenu />}
      </DropDownWrapper>
    </GroupWrapper>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  initialValue: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
  options: [],
  label: '',
};

export default Dropdown;
