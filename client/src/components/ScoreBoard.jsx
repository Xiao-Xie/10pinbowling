import React from 'react';
import RoundScore from './RoundScore'

const ScoreBoard = (props) => {
  return (
    <div id="scoreBoard">
      <div className="scoreheader column">
        <div className="rowheader">
          Round
        </div>
        <div>Player</div>
      </div>
      <div className="scores column">
        {props.roundholder.map(round => {
          return <RoundScore scores={props.frameScores[round]} round={round} key={round} />
        })}
      </div>
      <div className="column total">
        <div className="rowheader">
          Total
        </div>
        <div className={props.final ? "final" : "temp"}>
          {props.score}
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
