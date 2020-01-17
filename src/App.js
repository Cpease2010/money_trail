import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

class App extends Component {
    render() {
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
}

const appLayout = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
}

export default App;
