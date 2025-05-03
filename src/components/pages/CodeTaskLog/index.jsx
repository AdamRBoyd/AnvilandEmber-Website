import { font, palette } from 'styled-theme';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  Button,
  Clocks,
  Heading,
  Icon,
  Input,
  Label,
  PageTitleFrame,
  Spacer,
} from '../..';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  padding: 3rem 0.5rem;
  margin-top: 3rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  gap: 3rem;
`;

// SECTION: Controls / Form
const ControlContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledInput = styled(Input)`
  background-color: transparent;
  width: 12rem;
  height: 2rem;
  text-align: center;
  border-radius: 0.5rem;
`;

const StyledLongInput = styled(StyledInput)`
  width: 20rem;
`;

const StyledLabel = styled(Label)``;

const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;
  width: 50%;
`;

// SECTION: List
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  border-radius: 0.5rem;
  width: 95%;
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
  align-items: center;
  list-style-type: none;
  color: ${palette('primary', 0)};
  width: 85%;
  padding: 0;
`;

const ListRow = styled.li`
  display: grid;
  grid-template-columns: 1.25fr 4fr 1fr 1fr 2fr 1fr 0.5fr 0.5fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${palette('grayscale', 4)};
  width: 100%;
  font-size: 0.8rem;
  font-family: ${font('primary')};
`;

const ListItemHeading = styled(ListRow)`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${palette('grayscale', 3)};
`;

const ListRowSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const IconButtonSection = styled(ListRowSection)`
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
`;

const StyledCheckIcon = styled(StyledIcon)`
  padding-left: 0.5rem;
  height: 1rem;
`;

const StyledUndoButton = styled(Button)`
  color: ${palette('danger', 2)};
  padding: 0.5rem;
  width: 50%;
`;

const Footnote = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 2)};
  font-weight: 300;
  line-height: 1.5rem;
  font-size: 0.75rem;
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
  width: 90%;
`;

// SECTION: Code
const CodeTaskLog = () => {
  const [taskDate, setTaskDate] = useState(new Date().toLocaleDateString());
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');
  const [taskDescription, setTaskDescription] = useState('');
  const [editing, setEditing] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [taskIndex, setTaskIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editing) {
      setTaskList([
        ...taskList,
        {
          date: new Date().toLocaleDateString(),
          startOfTask: dateToTimeString(new Date()),
          endOfTask: '',
          taskDescription: taskDescription,
        },
      ]);
      setTaskDescription('');
    } else {
      const newTaskList = [...taskList];
      newTaskList[taskIndex].date = taskDate;
      newTaskList[taskIndex].startOfTask = startTime;
      newTaskList[taskIndex].endOfTask = endTime;
      newTaskList[taskIndex].taskDescription = taskDescription;
      setTaskList(newTaskList);
      setEditing(false);
    }
    setStartTime('00:00');
    setEndTime('00:00');
    setTaskDescription('');
  };

  const handleEdit = (index) => {
    setEditing(true);
    setTaskIndex(index);
    setTaskDate(taskList[index].date);
    setStartTime(taskList[index].startOfTask);
    setEndTime(taskList[index].endOfTask);
    setTaskDescription(taskList[index].taskDescription);
  };

  const handleDelete = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const handleEndTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].endOfTask = dateToTimeString(new Date());
    setTaskList(newTaskList);
  };

  const handleUndoEndTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].endOfTask = '';
    setTaskList(newTaskList);
  };

  // Converts Date object to mm/dd/yyyy format
  const formatDisplayDate = (storedDate) => {
    const date = new Date(storedDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Takes in start and end strings in hh:mm format,
  // returns difference in '## hours, ## minutes' format string
  const getInputTimeDifference = (start, end) => {
    let [startHours, startMinutes] = start.split(':');
    let [endHours, endMinutes] = end.split(':');

    let minutes = endMinutes - startMinutes;
    let hours = endHours - startHours;

    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }

    if (hours < 0) {
      hours += 24;
    }

    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours} hours, ${minutes} minutes`;
  };

  // Converts currentTime Date object to hh:mm format string
  const dateToTimeString = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  };

  // Converts date string in mm/dd/yyyy format to yyyy-mm-dd format
  // for use in input type="date" element
  const LocaleStringToInputDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
  };

  // Converts date string in yyyy-mm-dd format to mm/dd/yyyy format
  // for use in display
  const handleInputDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    setTaskDate(`${month}/${day}/${year}`);
  };

  // Retrieves taskList from localStorage on initial render
  useEffect(() => {
    const storedTaskList = localStorage.getItem('taskList');
    if (storedTaskList) {
      setTaskList(JSON.parse(storedTaskList));
    }
  }, []);

  // Stores taskList in localStorage on every change
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <PageTitleFrame title='Task Time Log' noBottomRule>
      <MainWrapper>
        <ControlContainer>
          <Clocks />
          <StyledForm onSubmit={handleSubmit}>
            <InputGroup>
              <StyledLabel>Task:</StyledLabel>
              <StyledLongInput
                type='text'
                placeholder='Task Description'
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                required
              />
            </InputGroup>
            {editing && (
              <>
                <InputGroup>
                  <StyledLabel>Date:</StyledLabel>
                  <StyledInput
                    type='date'
                    value={LocaleStringToInputDate(taskDate)}
                    onChange={(e) => handleInputDate(e.target.value)}
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <StyledLabel>Start Time:</StyledLabel>
                  <StyledInput
                    type='time'
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <StyledLabel>End Time:</StyledLabel>
                  <StyledInput
                    type='time'
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </InputGroup>
              </>
            )}
            <Spacer padding={1} />
            <StyledButton type='submit' value='Submit'>
              {editing ? 'Update' : 'Start New Task'}
            </StyledButton>
          </StyledForm>
        </ControlContainer>
        <ListContainer>
          <ListHeading level={1}>Time Log</ListHeading>
          <ListWrapper>
            <ListItemHeading>
              <ListRowSection>Date</ListRowSection>
              <ListRowSection>Task</ListRowSection>
              <ListRowSection>Start</ListRowSection>
              <ListRowSection>End</ListRowSection>
              <ListRowSection>Duration</ListRowSection>
            </ListItemHeading>
            {taskList.map((task, index) => (
              <ListRow key={index}>
                <ListRowSection>{formatDisplayDate(task.date)}</ListRowSection>
                <ListRowSection>{task.taskDescription}</ListRowSection>
                <ListRowSection>{task.startOfTask}</ListRowSection>
                {task.endOfTask ? (
                  <ListRowSection>{task.endOfTask}</ListRowSection>
                ) : (
                  <StyledCheckIcon
                    icon='checkmark'
                    size={25}
                    onClick={() => handleEndTask(index)}
                  />
                )}

                <ListRowSection>
                  {task.endOfTask ? (
                    <>
                      {getInputTimeDifference(task.startOfTask, task.endOfTask)}
                    </>
                  ) : (
                    <>{''}</>
                  )}
                </ListRowSection>
                <ListRowSection>
                  {task.endOfTask && (
                    <StyledUndoButton
                      onClick={() => handleUndoEndTask(index)}
                      buttonHeight={1}
                      fontSize={0.7}
                      variant='secondary'
                    >
                      Undo End
                    </StyledUndoButton>
                  )}
                </ListRowSection>
                <IconButtonSection>
                  <StyledIcon
                    icon='Edit'
                    size={25}
                    onClick={() => handleEdit(index)}
                  />
                </IconButtonSection>
                <IconButtonSection>
                  <StyledIcon
                    icon='Trash'
                    size={25}
                    onClick={() => handleDelete(index)}
                  />
                </IconButtonSection>
              </ListRow>
            ))}
          </ListWrapper>
        </ListContainer>
      </MainWrapper>
      <Spacer padding={2} />
      <Footnote>
        NOTE: The Time Log is stored in your browser's local storage, only you
        can see it.
      </Footnote>
      <Footnote>Clearing your browser history will clear the list.</Footnote>
      <Spacer padding={3} />
    </PageTitleFrame>
  );
};

export default CodeTaskLog;
