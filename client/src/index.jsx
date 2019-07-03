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
      throw: 0,
      //frameScore: { 1: 0, 2: '' },
      frameScores: [{ 1: 0, 2: 0 }, { 1: 0, 2: 0 }, { 1: 0, 2: 0 }, { 1: 0, 2: 0 }, { 1: 0, 2: 0 }, { 1: 0, 2: 0 }, { 1: 0, 2: 0 }, { 1: 0, 2: 0 }, { 1: 0, 2: 0 }, { 1: 0, 2: 0 }],
      final: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedNumber) {
    this.setSelected(selectedNumber)
  }

  setSelected(number) {
    if (number <= this.state.currentPins) {
      this.setScore(number);
      this.setState({
        selected: number
      }, () => {
        this.setRoundAndThrow();
        //this.setPins();
      });
    } else {
      console.log('invalid number:', number)
    }
  }

  setRoundAndThrow() {
    //after 2nd throw or if we hit all on 1st throw, move to next round
    if (this.state.throw === 2 || (this.state.throw === 1 && this.state.selected === 10)) {
      this.setState({
        round: this.state.round++,
        throw: 0,
        currentPins: 10
      });
    } else {
      this.setState({
        throw: this.state.throw++
      });
      this.setPins()
    }
  }

  setPins() {
    const pins = this.state.currentPins;
    if (pins - this.state.selected >= 0) {
      this.setState({
        currentPins: pins - this.state.selected
      });
    }
  }

  setScore(number) {
    console.log(this.state.frameScores)
    // var newScores = Object.assign(this.state.frameScores; )

    this.setState({
      score: (this.state.score += Number(number)),
      frameScores: this.state.throw === 1 ? this.state.frameScores[this.state.round - 1][0] = number : this.state.frameScores[this.state.round - 1][1] = number
    });
  }

  render() {
    return (
      <>
        {/* <ScoreBoard scores={this.state.frameScores} /> */}
        <Keypad handleClick={this.handleClick} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
