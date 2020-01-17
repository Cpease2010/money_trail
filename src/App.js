import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import {createStore} from 'redux'

class App extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(postStore)
        this.state = {
            allBills: [],
            newBill: {
                name: '',
                dueDate: '',
                billAmount: 0
            }
        }
    }
    componentDidMount() {
        fetchedPost()
            .then(value => this.store.dispatch({type: 'INITIAL_FETCH', payload: value}))
            .then(value => this.setState({allBills: this.store.getState()}));
   }

    componentWillUnmount() {

    }

    render() {
        console.log('this is internal state', this.state)
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
const postStore = (state = [], action) => {
    switch (action.type) {
        case 'INITIAL_FETCH':
            return action.payload;
        case 'ADD_Bill':
            return state.push(action.newBill)
        default: return state;
    }
}

const fetchedPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}
const appLayout = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
}

export default App;
