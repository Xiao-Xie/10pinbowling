import React from 'react';
import RoundScore from './RoundScore'

const ScoreBoard = (props) => {
  return (
    <div id="scoreBoard">
      <div className="scoreheader column">
        <div className="rowheader">
          Round
        </div>
        <div>
          Throw 1
        </div>
        <div>
          Throw 2
        </div>
      </div>
      <div className="scores column">
        {props.roundholder.map(round => {
          return <RoundScore scores={props.frameScores[round]} round={round} key={round} />
        })}
      </div>

    </div>
  );
}

export default ScoreBoard;
