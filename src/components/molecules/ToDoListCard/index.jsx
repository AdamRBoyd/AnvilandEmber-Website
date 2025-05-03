import { palette } from 'styled-theme';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label } from '../..';

const ListItemWrapper = styled.div`
  color: ${palette('primary', 0)};
  background-color: transparent;
  border: 1px solid ${palette('grayscale', 4)};
  border-radius: 0.5rem;
`;

const ToDoListCard = ({ list, handleChange, ...props }) => {
  return (
    <>
      {list.map((item, index) => (
        <ListItemWrapper key={index}>
          <input
            type='checkbox'
            id={index}
            onChange={handleChange}
            checked={item.checked}
          />
          <Label>{`${item.description}`}</Label>
        </ListItemWrapper>
      ))}
    </>
  );
};

ToDoListCard.propTypes = {
  list: PropTypes.array,
  handleChange: PropTypes.func,
};

export default ToDoListCard;
