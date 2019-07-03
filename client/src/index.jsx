/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import ScoreBoard from './components/ScoreBoard.jsx';
import Keypad from './components/Keypad.jsx';
import TotalScore from './components/TotalScore.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      currentPins: 10,
      selected: 0,
      round: 1,
      throw: 1,
      frameScore: [0, 0],
      frameScores: {
        round1: [0, 0],
        round2: [0, 0],
        round3: [0, 0],
        round4: [0, 0],
        round5: [0, 0],
        round6: [0, 0],
        round7: [0, 0],
        round8: [0, 0],
        round9: [0, 0],
        round10: [0, 0]
      },
      roundholder: [
        'round1',
        'round2',
        'round3',
        'round4',
        'round5',
        'round6',
        'round7',
        'round8',
        'round9',
        'round10'
      ],
      final: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedNumber) {
    this.setSelected(selectedNumber);
  }

  setScore(number) {
    console.log(this.state.throw);
    console.log(this.state.frameScores);
    var newframeScore = Object.assign({}, this.state.frameScore);
    if (this.state.throw === 1) {
      newframeScore[0] = Number(number);
    } else {
      newframeScore[1] = Number(number);
    }
    var newScore = Object.assign(this.state.frameScores);
    var round = this.state.round;
    newScore['round' + round] = newframeScore;
    this.setState({
      score: (this.state.score += Number(number)),
      frameScores: newScore,
      frameScore: newframeScore
    });
  }

  setSelected(number) {
    if (number <= this.state.currentPins) {
      this.setScore(number);
      this.setState(
        {
          selected: number
        },
        () => {
          this.setRoundAndThrow();
        }
      );
    } else {
      console.log('invalid number:', number);
    }
  }

  setRoundAndThrow() {
    //after 2nd throw or if we hit all on 1st throw, move to next round
    if (
      this.state.throw === 2 ||
      (this.state.throw === 1 && this.state.selected === '10')
    ) {
      this.setState({
        round: this.state.round + 1,
        throw: 1,
        currentPins: 10,
        frameScore: [0, 0]
      });
    } else {
      this.setState({
        throw: this.state.throw + 1,
        currentPins: this.state.currentPins - this.state.selected
      });
    }
  }

  // setPins() {
  //   const pins = this.state.currentPins;
  //   if (pins - this.state.selected >= 0) {
  //     this.setState({
  //       currentPins: pins - this.state.selected
  //     });
  //   }
  // }

  render() {
    return (
      <>
        <TotalScore score={this.state.score} />
        {/* <ScoreBoard scores={this.state.frameScores} /> */}
        <Keypad handleClick={this.handleClick} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
