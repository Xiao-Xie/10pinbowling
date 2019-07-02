/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      currentPins: 10,
      selected: 0,
      round: 1,
      frameScore: [],
      throw: 0,
      frameScores: [[], [], [], [], [], [], [], [], [], []],
      final: false,
      // eslint-disable-next-line comma-dangle
      keys: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 0, 10]]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedNumber) {
    // eslint-disable-next-line no-console
    console.log(selectedNumber);
    if (this.state.currentPins > selectedNumber) {
      let newScore = this.state.frameScore;
      newScore.push(selectedNumber);
      let newRound = this.state.round + 1;
      let newPin = this.state.currentPins - selectedNumber;
      let newThrow = this.state.throw + 1;
      let newTotal = this.state.score + selectedNumber;
      let newFrameScores = this.state.frameScores.slice(
        this.state.round,
        1,
        newScore
      );
      this.setState(
        {
          selected: selectedNumber,
          currentPins: newPin,
          frameScore: newScore,
          throw: newThrow,
          score: newTotal,
          frameScores: newFrameScores
        },
        () => {
          console.log(this.state);
        }
      );

      //when is was the 2nd throw of current round, increase round and reset other values
      if (newThrow === 2) {
        //reset state if it is not the last round
        if (this.state.round < 10) {
          this.setState({
            throw: 0,
            round: newRound,
            frameScore: [],
            currentPins: 10,
            selected: null
          });
        } else {
          //display final scores
          this.setState({
            final: true
          });
        }
      }
    }
  }

  render() {
    return (
      <div>
        <p>This is rendering from react</p>
        <div>
          {this.state.keys.map((value, index) => {
            return (
              <div key={index}>
                <button
                  value={value[0]}
                  onClick={e => this.handleClick(e.target.value)}
                >
                  {value[0]}
                </button>
                <button
                  value={value[1]}
                  onClick={e => this.handleClick(e.target.value)}
                >
                  {value[1]}
                </button>
                <button
                  value={value[2]}
                  onClick={e => this.handleClick(e.target.value)}
                >
                  {value[2]}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
