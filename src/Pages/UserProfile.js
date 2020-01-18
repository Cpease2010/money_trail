import React, {Component} from 'react'
import {Provider} from 'react-redux'
import profilePicture from '../assets/profilePicture.jpg'
import AddBill from '../components/AddBill'
import Bill from '../components/Bill'
import {combineReducers, createStore} from "redux";

export class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.store = createStore(reducers, undefined,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        this.renderBills = this.renderBills.bind(this)
    }

    componentDidMount() {
        fetchedPost()
            .then(value => this.store.dispatch({type: 'INITIAL_FETCH', payload: value}))
            .then(value => this.setState({allBills: this.store.getState()}))
            .then(value => this.store.subscribe(() => {this.setState({allBills: this.store.getState()})}));
    }

    componentWillUnmount() {

    }

    renderBills() {
        return this.store.getState().bills
            .map(bill => {
                return <Bill key={bill.id} bill={bill}/>
            })

    }
    render() {
        return (
            <Provider store={this.store}>
                <div >
                    <div style={topStyle}>
                        <img src={profilePicture} alt="User Profile" height='250px' width='250px'/>
                        <h1>Cory Pease</h1>
                        <AddBill/>
                    </div>
                    <div style={billWrapper}>
                        {
                            this.store.getState().bills
                                .map(bill => <Bill key={bill.id} bill={bill}/>)
                        }
                    </div>
                </div>
            </Provider>
        )
    }
}
const reducers = combineReducers({
    bills: (state = [], action) => {
        let newState = []
        switch (action.type) {
            case 'INITIAL_FETCH':
                newState = [...action.payload]
                return newState;
            case 'ADD_BILL':
                newState = [...state, action.newBill]
                return newState
            default: return state;
        }
    }
})

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
