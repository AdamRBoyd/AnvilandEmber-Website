import { font, palette } from 'styled-theme';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import { Button, PageTitleFrame, Paragraph, Spacer } from '../..';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cell = styled.div`
  display: flex;
  font-family: ${font('primary')};
  border: 1px solid ${palette('grayscale', 1)};
  width: 100px;
  height: 100px;
  margin: 0.1rem;
  align-items: center;
  justify-content: center;
  font-size: 4rem;

  &:hover {
    background-color: ${palette('grayscale', 7)};
  }

  &.top {
    border-top: none;
  }
  &.bottom {
    border-bottom: none;
  }
  &.left {
    border-left: none;
  }
  &.right {
    border-right: none;
  }
`;

const TurnIndicator = styled(Paragraph)`
  font-size: 2rem;
  align-self: center;
  margin: 0 0 3rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 0px ${palette('grayscale', 4)};
`;

const GameIndicator = styled(Paragraph)`
  color: ${palette('danger', 3)};
  font-size: 3rem;
  margin: 2rem 0 0;
`;

const WinnerIndicator = styled(Paragraph)`
  font-size: 2rem;
`;

const ResetButton = styled(Button)`
  margin: 2rem;
`;

let cellTable = [
  { symbol: '', unPlayed: true },
  { symbol: '', unPlayed: true },
  { symbol: '', unPlayed: true },
  { symbol: '', unPlayed: true },
  { symbol: '', unPlayed: true },
  { symbol: '', unPlayed: true },
  { symbol: '', unPlayed: true },
  { symbol: '', unPlayed: true },
  { symbol: '', unPlayed: true },
];

let moves = 9;

const CodeTicTacToe = () => {
  const navigate = useNavigate();
  const [turn, setTurn] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [winner, setWinner] = useState('No Winner');

  const handleClick = (e) => {
    if (playing) {
      const cellNum = Number(e.target.id);
      if (cellTable[cellNum].unPlayed) {
        cellTable[cellNum].symbol = turn ? 'X' : 'O';
        cellTable[cellNum].unPlayed = false;
        moves--;
        setTurn(!turn);
        if (moves === 0) setPlaying(false);
        checkWin(0, 1, 2);
        checkWin(3, 4, 5);
        checkWin(6, 7, 8);
        checkWin(0, 3, 6);
        checkWin(1, 4, 7);
        checkWin(2, 5, 8);
        checkWin(0, 4, 8);
        checkWin(2, 4, 6);
      } else {
        console.log('OOPS! That one is taken');
      }
    } else {
      console.log('Game Over Please Reset');
    }
  };

  function checkWin(a, b, c) {
    if (
      cellTable[a].symbol !== '' &&
      cellTable[a].symbol === cellTable[b].symbol &&
      cellTable[b].symbol === cellTable[c].symbol &&
      cellTable[a].symbol === cellTable[c].symbol
    ) {
      setWinner(`Winner: ${cellTable[a].symbol}`);
      setPlaying(false);
    }
  }

  return (
    <PageTitleFrame title='Tic Tac Toe' noBottomRule>
      <Spacer padding={2} />
      <Container>
        <TurnIndicator>{`Turn: ${turn ? 'X' : 'O'}`}</TurnIndicator>
        <Block>
          <Cell
            id={0}
            className='top left'
            onClick={handleClick}
          >{`${cellTable[0].symbol}`}</Cell>
          <Cell
            id={1}
            className='top'
            onClick={handleClick}
          >{`${cellTable[1].symbol}`}</Cell>
          <Cell
            id={2}
            className='top right'
            onClick={handleClick}
          >{`${cellTable[2].symbol}`}</Cell>
        </Block>
        <Block>
          <Cell
            id={3}
            className='left'
            onClick={handleClick}
          >{`${cellTable[3].symbol}`}</Cell>
          <Cell id={4} onClick={handleClick}>{`${cellTable[4].symbol}`}</Cell>
          <Cell
            id={5}
            className='right'
            onClick={handleClick}
          >{`${cellTable[5].symbol}`}</Cell>
        </Block>
        <Block>
          <Cell
            id={6}
            className='bottom left'
            onClick={handleClick}
          >{`${cellTable[6].symbol}`}</Cell>
          <Cell
            id={7}
            className='bottom'
            onClick={handleClick}
          >{`${cellTable[7].symbol}`}</Cell>
          <Cell
            id={8}
            className='bottom right'
            onClick={handleClick}
          >{`${cellTable[8].symbol}`}</Cell>
        </Block>
      </Container>
      {!playing && <GameIndicator>GAME OVER!!</GameIndicator>}
      {!playing && <WinnerIndicator>{`${winner}`}</WinnerIndicator>}
      <Spacer padding={2} />
      <ResetButton
        onClick={() => navigate(0)}
        variant='ghost'
        buttonHeight={1.5}
      >
        Reset
      </ResetButton>
      <Spacer padding={2} />
    </PageTitleFrame>
  );
};

export default CodeTicTacToe;
