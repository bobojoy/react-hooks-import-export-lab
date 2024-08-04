import React from 'react'
import { image } from '../data/user'

function Image() {
  return (
    <div>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default Image