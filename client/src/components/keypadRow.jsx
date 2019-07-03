/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';

const KeypadRow = ({ row, handleClick }) => (
  <div className="keypad_row">
    {row.map((key, index) => (
      <button
        style={{ height: '50px', width: '50px' }}
        type="button"
        key={index}
        value={key}
        onClick={e => handleClick(e.target.value)}
      >
        {key}
      </button>
    ))}
  </div>
);

export default KeypadRow;
