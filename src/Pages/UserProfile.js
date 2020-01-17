import React, { Component } from 'react'
import profilePicture from '../assets/profilePicture.jpg'
import AddBill from '../components/AddBill'
import Bill from '../components/Bill'
import {createStore} from "redux";

export class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(postStore)
        this.state = {
            allBills: [],
            newBill: {
                id: '',
                billName: '',
                billAmount: 0,
                dueDate: ''
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
        return (
            <div >
                <div style={topStyle}>
                    <img src={profilePicture} alt="User Profile" height='250px' width='250px'/>
                    <h1>Cory Pease</h1>
                    <AddBill/>
                </div>
                <div style={billWrapper}>
                    {
                      this.store.getState()
                          .map(bill => <Bill key={bill.id} bill={bill}/>)
                    }
                </div>
            </div>
        )
    }
}

const postStore = (state = [], action) => {
    switch (action.type) {
        case 'INITIAL_FETCH':
            state.push(...action.payload)
            return state;
        case 'ADD_Bill':
            return state.push(action.newBill)
        default: return state;
    }
}

const fetchedPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(value => value.json())
}

const topStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vw',
    padding: '12px'
}

const billWrapper = {
    display: 'flex',
    flexWrap: 'wrap'
}

export default UserProfile
