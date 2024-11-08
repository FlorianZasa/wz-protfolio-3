// Link.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { colors } from '../styles/colors';

function Link({ text, to, variant }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink
      className="link"
      to={to}
      style={{
        color: isHovered ? colors.black : variant,
        fontWeight: 'bold',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </NavLink>
  );
}

export default Link;
