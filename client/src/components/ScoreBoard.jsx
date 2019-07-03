import React from 'react';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.scores)
    //const { scores } = this.props;
    return (
      <div className="round">
        <div className="score">
          {this.props.scores[0]}
        </div>
        <div className="score">
          {this.props.scores[1]}
        </div>

      </div>
    );
  }
}

export default ScoreBoard;
