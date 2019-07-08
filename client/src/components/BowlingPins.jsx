import React from 'react';
import { GiBowlingPin } from 'react-icons/gi';

class BowlingPins extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [
        <GiBowlingPin size={50} />,
        <GiBowlingPin size={50} />,
        <GiBowlingPin size={50} />,
        <GiBowlingPin size={50} />,
        <GiBowlingPin size={50} />,
        <GiBowlingPin size={50} />,
        <GiBowlingPin size={50} />,
        <GiBowlingPin size={50} />,
        <GiBowlingPin size={50} />,
        <GiBowlingPin size={50} />
      ]
    };
  }
  componentDidMount() {
    let pins = [];
    for (let i = 0; i < Number(this.props.selected); i++) {
      //  this.setState(state => {
      pins.push(<GiBowlingPin color={red} />);
      console.log(pins);
      // return {
      //   pins
      // };
      // });
    }
    for (let j = 0; j < 10 - Number(this.props.selected); j++) {
      pins.push(<GiBowlingPin />);
      // return {
      //   pins
      // };
    }
    this.setState({ pins: pins })
  }

  render() {
    return (
      <div id="pinscontainer">
        <div id="firstrow">
          <div className="pins">{this.state.pins.slice(6).map(pin => pin)}</div>
        </div>
        <div id="secondrow">
          <div className="pins">{this.state.pins.slice(3, 6).map(pin => pin)}</div>
        </div>
        <div id="thirdrow">
          <div className="pins">{this.state.pins.slice(1, 3).map(pin => pin)}</div>
        </div>
        <div id="lastrow">
          <div className="pins">{this.state.pins.slice(0, 1).map(pin => pin)}</div>
        </div>
      </div>

    );
  }
}

export default BowlingPins;
