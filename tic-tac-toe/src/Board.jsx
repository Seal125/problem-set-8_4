import React, {useContext} from 'react';
import Square from './Square';
import BoardState from './contexts/BoardContext';
import declareWinner from './contexts/declareWinner';

const Board = (props) => {
  const { turn, setTurn, boardState, setBoardState, history, setHistory} = useContext(BoardState);

  const winner = declareWinner(boardState);
  let status;
  if (winner) {
    status = `The winner is ${winner}!`;
  }

  function handleClick(num) {
    if (!declareWinner(boardState) && !boardState[num]) {
      const updatedHistory = [...history];
      const updatedBoard = [...boardState];
      updatedBoard[num] = turn;
      updatedHistory.push(updatedBoard);
      setBoardState(updatedBoard);
      setHistory(updatedHistory);
      setTurn((turn === 'O') ? 'X' : 'O');
    }
  }

  function stepTo(step) {
    const boardInHistory = [...history];
    setBoardState(boardInHistory[step]);
  }

  const playerMoves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => stepTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className='board'>
      <h3>{status}</h3>
      <div className="game-info">
        <ol>{playerMoves}</ol>
      </div>
      <div className='row'>
        <Square clickEvent={() => handleClick(0)} value={boardState[0]}/>
        <Square clickEvent={() => handleClick(1)} value={boardState[1]}/>
        <Square clickEvent={() => handleClick(2)} value={boardState[2]}/>
      </div>
      <div className='row'>
        <Square clickEvent={() => handleClick(3)} value={boardState[3]}/>
        <Square clickEvent={() => handleClick(4)} value={boardState[4]}/>
        <Square clickEvent={() => handleClick(5)} value={boardState[5]}/>
      </div>
      <div className='row'>
        <Square clickEvent={() => handleClick(6)} value={boardState[6]}/>
        <Square clickEvent={() => handleClick(7)} value={boardState[7]}/>
        <Square clickEvent={() => handleClick(8)} value={boardState[8]}/>
      </div>
    </div>
  );
}

export default Board;
