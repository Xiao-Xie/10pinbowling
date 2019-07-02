/* eslint-disable react/no-array-index-key */
import React from 'react';
import KeypadRow from './keypadRow';

const Keypad = (props) => {
  const keys = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 0, 10]];
  return (
    <div id="keypad">
      {keys.map((row, index) => (
        // eslint-disable-next-line react/prop-types
        <KeypadRow row={row} key={index} handleClick={props.handleClick} />
      ))}
    </div>
  );
};

export default Keypad;
