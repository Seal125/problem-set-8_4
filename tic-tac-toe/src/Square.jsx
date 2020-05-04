import React from 'react';

const Square = (props) => {
  return <button key={props.index} onClick={props.clickEvent} className='square'>{props.value}</button>;
}

export default Square;
