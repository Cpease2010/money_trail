import React from "react";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header style={headerStyle}>
      <p>MoneyTrail</p>
      <div style={linkDiv}>
        <Link style={linkStyle} to='/'>Home</Link>
        <Link style={linkStyle} to='/login'>Login</Link>
      </div>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#282c34',
  maxHeight: '10vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '24px',
  color: 'white',
  padding: '16px'
}

const linkStyle = {
  fontSize: '16px',
  display: 'flex',
  color: 'white'
}

const linkDiv = {
  display: 'flex',
  width: '30vw',
  justifyContent: 'space-around',
  padding: '8px'
}
