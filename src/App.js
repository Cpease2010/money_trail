import React from 'react';
import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Layout/Main';

function App() {
  return (
    <div style={appLayout}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

const appLayout = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
}

export default App;
