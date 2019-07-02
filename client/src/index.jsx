/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      currentPins: 10,
      selected: null,
      round: 1,
      frameScore: 0,
      throw: 1,
      frameScores: []
    };
  }

  addThrow() {
    this.setState({
      throw: this.state.throw + 1
    });
  }

  setSelected(e) {
    this.setState({
      selected: e.target.value
    });
  }

  render() {
    return <p>This is rendering from react</p>;
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
