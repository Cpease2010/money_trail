import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <p>PaperTrail</p>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#282c34',
  maxHeight: '10vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white'
}
