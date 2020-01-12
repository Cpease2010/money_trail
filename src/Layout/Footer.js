import React from "react";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>A Perpetual Company</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#282c34',
  maxHeight: '10vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 1vmin)',
  color: 'white'
}