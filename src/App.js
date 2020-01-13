import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Layout/Main';

function App() {
  return (
    <div style={appLayout}>
      <Router>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </div>
  );
}

const appLayout = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
}

export default App;
