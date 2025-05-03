import { palette } from 'styled-theme';
import styled from 'styled-components';

import {
  Heading,
  HorizontalRule,
  Link,
  PageTitleFrame,
  Paragraph,
  Spacer,
} from '../..';

const IMAGE_HEIGHT = '230px';
const IMAGE_WIDTH = '300px';
const CARD_WIDTH = '330px';
const CARD_HEIGHT = '300px';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const ParagraphWrapper = styled(Paragraph)`
  color: ${palette('grayscale', 2)};
  text-align: center;
  width: 85%;
  margin: 0.5rem 0 1rem 0;
`;

const LinkCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  padding: 1rem 0 0.5rem;
  margin: 1rem 0.5rem;
  height: ${CARD_HEIGHT};
  width: ${CARD_WIDTH};
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
  }
`;

const StyledImage = styled.img`
  border-radius: 0.25rem;
  width: 90%;
  margin-bottom: 0.5rem;
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  object-fit: cover;
`;

const StyledHeading = styled(Heading)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${palette('primary', 0)};
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const Code = () => {
  return (
    <PageTitleFrame title='Coding Projects' noBottomRule>
      <Spacer padding={0.5} />
      <ParagraphWrapper>
        Welcome to the programming and computer science side of my website. I
        know, its a bit weird to have a code section on a jewelry website, but
        as a programmer, this page also serves as part of my portfolio. Enjoy!
      </ParagraphWrapper>
      <HorizontalRule />
      <Spacer padding={0.5} />
      <Wrapper>
        <Spacer padding={0.5} />
        <LinkCard
          href={'https://github.com/phoenix239/adamboyddesigns'}
          target='_blank'
        >
          <StyledImage src='/images/LandingPageImage.png' alt='Website Code' />
          <StyledHeading>Site Code - Github </StyledHeading>
        </LinkCard>
        <LinkCard to={'weather'}>
          <StyledImage src='/images/Weather.jpg' alt='Weather' />
          <StyledHeading>Weather App</StyledHeading>
        </LinkCard>
        <LinkCard to={'tasklog'}>
          <StyledImage src='/images/tasklog.jpg' alt='Task Log' />
          <StyledHeading>Task Log</StyledHeading>
        </LinkCard>
        <LinkCard to={'dictionary'}>
          <StyledImage src='/images/Dictionary.jpg' alt='Dictionary' />
          <StyledHeading>Dictionary</StyledHeading>
        </LinkCard>
        <LinkCard to={'tictactoe'}>
          <StyledImage src='/images/Tic_tac_toe.png' alt='TicTacToe' />
          <StyledHeading>Tic-Tac-Toe</StyledHeading>
        </LinkCard>
        <LinkCard to={'todo'}>
          <StyledImage src='/images/ToDoList.jpg' alt='To Do' />
          <StyledHeading>To Do List</StyledHeading>
        </LinkCard>
        <LinkCard to={'workout'}>
          <StyledImage src='/images/workout.jpg' alt='Workout' />
          <StyledHeading>Workout Log</StyledHeading>
        </LinkCard>
        <LinkCard to={'gradient'}>
          <StyledImage src='/images/Gradient.jpg' alt='Gradient Picker' />
          <StyledHeading>Gradient Picker</StyledHeading>
        </LinkCard>
        <LinkCard to={'recipe'}>
          <StyledImage src='/images/recipes.jpg' alt='Recipe Book Search' />
          <StyledHeading>Recipe Book Search</StyledHeading>
        </LinkCard>
        <LinkCard to={'units'}>
          <StyledImage src='/images/math.jpg' alt='Unit Converter' />
          <StyledHeading>Unit Converter</StyledHeading>
        </LinkCard>
        <LinkCard to={'calculator'}>
          <StyledImage src='/images/calculator.jpg' alt='Calculator' />
          <StyledHeading>Calculator</StyledHeading>
        </LinkCard>
        <LinkCard to={'passwordgen'}>
          <StyledImage src='/images/passwordGen.png' alt='Password Generator' />
          <StyledHeading>Password Generator</StyledHeading>
        </LinkCard>
        <LinkCard to={'tipcalc'}>
          <StyledImage src='/images/tipCalc.jpg' alt='Tip Calculator' />
          <StyledHeading>Tip Calculator</StyledHeading>
        </LinkCard>
      </Wrapper>
    </PageTitleFrame>
  );
};

export default Code;
