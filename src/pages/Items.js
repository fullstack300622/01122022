import React from 'react';
import { NavLink } from 'react-router-dom';

const Items = () => {
  return (
    <ul>
      <div>
        <NavLink to='/items/i1'>Item one</NavLink>
      </div>
      <div>
        <NavLink to='/items/i2'>Item two</NavLink>
      </div>
      <div>
        <NavLink to='/items/i3'>Item three</NavLink>
      </div>
    </ul>
  )
}

export default Items