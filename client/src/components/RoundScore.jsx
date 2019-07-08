import React from 'react';

class RoundScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="round column">
        <div className="rowheader">
          {this.props.round.substring(5)}
        </div>
        <div className="score">
          <div className="roundcontainer">
            <div className="roundscore">{this.props.scores[0] === 10 ? "X" : this.props.scores[0]}</div>
            <div className="roundscore">{this.props.scores[1] === 10 ? "X" : this.props.scores[0] !== 10 && this.props.scores[1] + this.props.scores[0] === 10 ? "/" : this.props.scores[1]}</div>
          </div>
          <div className="roundtotal">
            {this.props.scores[2]}
          </div>

        </div>
      </div>
    );
  }
}

export default RoundScore;
