import { font, palette } from 'styled-theme';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Button, Heading, Icon, Input, PageTitleFrame, Spacer } from '../..';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  width: 50%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
  margin: 1rem 0;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette('primary', 3)};
  border-radius: 0.5rem;
`;

const StyledInput = styled(Input)`
  background-color: transparent;
  border: none;
  margin-left: 0.8rem;
  width: 25rem;
`;

const CloseIcon = styled(Icon)`
  position: relative;
  right: 9px;
  top: -1px;
  cursor: pointer;
`;

const StyledButton = styled(Button)``;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${palette('primary', 0)};
  background-color: transparent;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  padding: 0 4rem 3rem;
  margin: 1.5rem;
  list-style-type: none;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 0.2rem 1.25rem;
  font-family: ${font('primary')};
  font-size: 1.5rem;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 11fr 1fr 1fr;
  align-items: center;
  border-bottom: 1px dashed ${palette('grayscale', 4)};
`;

const StyledHeading = styled(Heading)`
  border-bottom: 2px solid ${palette('grayscale', 4)};
  font-size: 2.5rem;
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

const Note = styled.div`
  color: ${palette('grayscale', 2)};
  font-size: 0.8rem;
  font-family: ${font('primary')};
  font-style: italic;
`;

const CodeToDo = () => {
  let local = localStorage.getItem('ToDo');
  const [list, updateList] = useState(local ? JSON.parse(local) : []);
  const [item, setItem] = useState('');
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('ToDo', JSON.stringify(list));
  }, [list]);

  const handleItemClick = (e) => {
    const id = e.target.parentElement.id;
    let newList = list.slice();
    newList[id].done = !newList[id].done;
    updateList(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editing) {
      updateList([...list, { item: item, done: false }]);
    } else {
      const newList = [...list];
      newList[index].item = item;
      updateList(newList);
      setEditing(false);
    }
    setItem('');
  };

  const handleEdit = (index) => {
    setEditing(true);
    setIndex(index);
    setItem(list[index].item);
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    updateList(newList);
  };

  const handleReset = () => {
    setItem('');
  };

  return (
    <PageTitleFrame title='To Do List' noBottomRule>
      <MainWrapper>
        <StyledForm onSubmit={handleSubmit} id='addForm'>
          <InputGroup>
            <StyledInput
              type='text'
              id='addToDo'
              required
              value={item}
              placeholder='Add Item'
              onChange={(e) => setItem(e.target.value)}
            />
            <CloseIcon
              name='close'
              icon='close'
              size={13}
              onClick={handleReset}
            />
          </InputGroup>
          <StyledButton
            type='submit'
            form='addForm'
            value='Submit'
            variant='primary'
          >
            {editing ? 'Update' : 'Add'} Item
          </StyledButton>
        </StyledForm>
        {list && (
          <>
            <ListWrapper>
              <StyledHeading>To Do:</StyledHeading>
              {list.map((item, index) => (
                <ItemWrapper id={index} key={index}>
                  <ListItem
                    onClick={handleItemClick}
                    style={
                      item.done
                        ? {
                            textDecoration: 'line-through',
                            color: '#e0e0e0',
                          }
                        : {}
                    }
                  >
                    {item.item}
                  </ListItem>
                  <StyledIcon
                    icon='Edit'
                    id={index}
                    onClick={() => handleEdit(index)}
                  />
                  <StyledIcon
                    icon='Trash'
                    id={index}
                    onClick={() => handleDelete(index)}
                  />
                </ItemWrapper>
              ))}
            </ListWrapper>
          </>
        )}
      </MainWrapper>
      <Spacer padding={2} />
      <Note>Note: Click on a list item to mark it as done.</Note>
    </PageTitleFrame>
  );
};

export default CodeToDo;
