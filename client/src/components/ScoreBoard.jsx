import React from 'react';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { scores } = this.props;
    return (
      <table>
        {scores.map(score => (
          <>
            <th>{scores.indexOf(score)}</th>
            <tr>{score[0]}</tr>
            <tr>{score[1]}</tr>
          </>
        ))}
      </table>
    );
  }
}

export default ScoreBoard;
