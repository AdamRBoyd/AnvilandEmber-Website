import { font, palette } from 'styled-theme';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { Button, Dropdown, Heading, Icon, Input, PageTitleFrame } from '../..';

import { WORKOUT_SORT_OPTIONS } from '../../../constants/WorkoutSort';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  width: 85%;
  padding: 3rem 1rem;
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: 30%;
  padding: 3rem 3rem 0 0;
  gap: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
  padding-bottom: 2rem;
  border-bottom: 1px solid ${palette('grayscale', 4)};
`;

const StyledInput = styled(Input)`
  color: ${palette('grayscale', 3)};
  border: transparent;
  box-sizing: border-box;
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
`;

const StyledDropdown = styled(Dropdown)``;

const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  width: 55%;
  height: fit-content;
  padding: 1rem 0 3rem;
`;

const ListHeading = styled(Heading)`
  font-weight: bold;
  color: ${palette('primary', 0)};
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style-type: none;
  color: ${palette('primary', 0)};
  width: 80%;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 0.5fr 0.5fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  width: 100%;
  font-size: 1rem;
  font-family: ${font('primary')};
`;

const ListItemHeading = styled(ListItem)`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${palette('grayscale', 3)};
`;

const ListItemStyling = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ListItemDate = styled.div`
  ${ListItemStyling}
`;

const ListItemType = styled.div`
  ${ListItemStyling}
`;

const ListItemDuration = styled.div`
  ${ListItemStyling}
`;

const CodeWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [editing, setEditing] = useState(false);
  const [index, setIndex] = useState(null);

  const workoutTypes = [
    'Chest',
    'Back',
    'Shoulders',
    'Legs',
    'Arms',
    'Core',
    'Cardio',
  ];

  const formatDisplayDate = (storedDate) => {
    const [year, month, day] = storedDate.split('-');
    return `${month}/${day}/${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editing) {
      setWorkouts([...workouts, { date, type, duration }]);
    } else {
      const newWorkouts = [...workouts];
      newWorkouts[index] = { date, type, duration };
      setWorkouts(newWorkouts);
      setEditing(false);
    }
    setDate('');
    setType('');
    setDuration('');
  };

  const handleEdit = (index) => {
    setEditing(true);
    setIndex(index);
    setDate(workouts[index].date);
    setType(workouts[index].type);
    setDuration(workouts[index].duration);
  };

  const handleDelete = (index) => {
    const newWorkouts = [...workouts];
    newWorkouts.splice(index, 1);
    setWorkouts(newWorkouts);
  };

  const handleSort = (sortBy) => {
    workouts.sort((a, b) => {
      switch (sortBy) {
        case 'dateasc':
          return new Date(a.date) - new Date(b.date);
        case 'datedesc':
          return new Date(b.date) - new Date(a.date);
        case 'typeasc':
          return a.type.localeCompare(b.type);
        case 'typedesc':
          return b.type.localeCompare(a.type);
        case 'durationasc':
          return a.duration - b.duration;
        case 'durationdesc':
          return b.duration - a.duration;
        default:
          return 0;
      }
    });
    setWorkouts([...workouts]);
  };

  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts'));
    if (storedWorkouts) {
      setWorkouts(storedWorkouts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  return (
    <PageTitleFrame title='Workout Log' noBottomRule>
      <MainWrapper>
        <FormContainer>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              type='date'
              id='date'
              placeholder='Enter Date'
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <StyledInput
              type='select'
              id='type'
              value={type}
              placeholder='Select a type'
              required
              onChange={(e) => setType(e.target.value)}
            >
              <option value=''>Select a workout type</option>
              {workoutTypes.map((workoutType) => (
                <option key={workoutType} value={workoutType}>
                  {workoutType}
                </option>
              ))}
            </StyledInput>
            <StyledInput
              type='text'
              id='duration'
              placeholder='Enter duration in minutes'
              value={duration}
              required
              onChange={(e) => setDuration(e.target.value)}
            />
            <StyledButton type='submit' buttonHeight={2}>
              {editing ? 'Update' : 'Add'} Workout
            </StyledButton>
          </StyledForm>
          <StyledDropdown
            options={WORKOUT_SORT_OPTIONS}
            onChange={(e) => handleSort(e.target.value)}
            label='Sorting:'
            initialValue={''}
          />
        </FormContainer>
        <ListContainer>
          <ListHeading level={1}>Workouts:</ListHeading>
          <ListWrapper>
            <ListItemHeading>
              <ListItemDate>Date</ListItemDate>
              <ListItemType>Type</ListItemType>
              <ListItemDuration>Duration</ListItemDuration>
            </ListItemHeading>
            {workouts.map((workout, index) => (
              <ListItem key={index}>
                <ListItemDate>{formatDisplayDate(workout.date)}</ListItemDate>
                <ListItemType>{workout.type}</ListItemType>
                <ListItemDuration>{workout.duration} minutes</ListItemDuration>
                <StyledIcon
                  icon='Edit'
                  size={25}
                  onClick={() => handleEdit(index)}
                />
                <StyledIcon
                  icon='Trash'
                  size={25}
                  onClick={() => handleDelete(index)}
                />
              </ListItem>
            ))}
          </ListWrapper>
        </ListContainer>
      </MainWrapper>
    </PageTitleFrame>
  );
};

export default CodeWorkout;
