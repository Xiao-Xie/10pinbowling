import React from 'react';
import { GiBowlingPin } from 'react-icons/gi';

class BowlingPins extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [
        <GiBowlingPin />,
        <GiBowlingPin />,
        <GiBowlingPin />,
        <GiBowlingPin />,
        <GiBowlingPin />,
        <GiBowlingPin />,
        <GiBowlingPin />,
        <GiBowlingPin />,
        <GiBowlingPin />,
        <GiBowlingPin />
      ]
    };
  }

  render() {
    return <div className="pins">{this.state.pins.map(pin => pin)}</div>;
  }
}

export default BowlingPins;
