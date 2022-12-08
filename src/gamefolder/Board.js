import React, { useState } from "react";
import Square from "./Square";
const Board = () => {
  const [play, setPlay] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winner) {
      const [a, b, c] = logic;
      if (play[a] !== null && play[a] === play[b] && play[a] === play[c]) {
        return play[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();

  const reset = () => {
    setPlay(Array(9).fill(null));
  };

  function handleClick(index) {
    if(play[index] !== null){
        return;
    }
    const copyPlay = [...play];
    copyPlay[index] = xTurn ? "X" : "0";
    setPlay(copyPlay);
    setXTurn(!xTurn);
  }
  return (
    <div>
      <div className="board">
        {isWinner ? (
          <>
           <h1> {isWinner} won the game </h1> <button onClick={reset} style={{height:'60px',width:'150px',borderRadius:"4px",border:'none',background:"#8181c9",color:"#fff",fontSize:"20px",fontWeight:"bolder"}}>Play again</button>
          </>
        ) : (
          <>
          <h1> Player {xTurn ? "X" : "O"} Turn</h1>
            <div className="row">
              <Square onClick={() => handleClick(0)} value={play[0]} />
              <Square onClick={() => handleClick(1)} value={play[1]} />
              <Square onClick={() => handleClick(2)} value={play[2]} />
            </div>
            <div className="row">
              <Square onClick={() => handleClick(3)} value={play[3]} />
              <Square onClick={() => handleClick(4)} value={play[4]} />
              <Square onClick={() => handleClick(5)} value={play[5]} />
            </div>
            <div className="row">
              <Square onClick={() => handleClick(6)} value={play[6]} />
              <Square onClick={() => handleClick(7)} value={play[7]} />
              <Square onClick={() => handleClick(8)} value={play[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
