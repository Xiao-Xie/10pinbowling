/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <p>This is rendering from react</p>;
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
