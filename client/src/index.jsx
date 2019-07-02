/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBoard from './components/ScoreBoard.jsx';
import Keypad from './components/Keypad.jsx';

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
      frameScores: [],
      final: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedNumber) {
    if (this.state.currentPins > selectedNumber) {
      let newScore = this.state.frameScore;
      newScore.push(selectedNumber);
      let newRound = this.state.round + 1;
      let newPin = this.state.currentPins - selectedNumber;
      let newThrow = this.state.throw + 1;
      let newTotal = this.state.score + Number(selectedNumber);
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
      //when it is the 2nd throw of current round, increase round and reset other values
      if (newThrow === 2) {
        //reset state if it is not the last round

        if (this.state.round < 10) {
          let newFrameScores = [...this.state.frameScores, newScore];
          this.setState({
            throw: 0,
            round: newRound,
            frameScore: [],
            currentPins: 10,
            selected: null,
            frameScores: newFrameScores
          });
        } else {
          //display final scores
          this.setState({
            final: true
          });
        }
      }
    }
    // if (selectedNumber - this.state.currentPins >= 0) {
    //   setSelected(selectedNumber);
    // }
  }

  // setSelected(number) {
  //   this.setState({
  //     selected: number
  //   });
  //   this.setRoundAndThrow();
  //   this.setPins();
  // }

  // setRoundAndThrow() {
  //   if (this.state.round === 2) {
  //     this.setState({
  //       round: 0,
  //       throw: 0
  //     });
  //   } else {
  //     this.setState({
  //       round: this.state.round++,
  //       throw: this.state.round++
  //     });
  //   }
  // }

  // setPins() {
  //   const pins = this.states.currentPins;
  //   this.setState({
  //     currentPins: pins - this.state.selected
  //   });

  //   this.setScore();
  // }

  // setScore() {
  //   this.setState({
  //     score: (this.state.score += this.state.selected)
  //   });
  // }

  render() {
    return (
      <>
        <ScoreBoard scores={this.state.frameScores} />
        <Keypad handleClick={this.handleClick} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
