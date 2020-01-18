import React, {Component} from 'react'
import {connect} from 'react-redux'

export class AddBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billName: '',
            billAmount: '',
            billDate: '',
            id: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)})
            .then(response => response.json())
            .then(value => {
                this.props.addBill('ADD_BILL', value)
            })
    }

    render() {
        return (
            <form style={formStyle} onSubmit={this.handleSubmit}>
                <label htmlFor="billName">Bill Name:</label>
                <input onChange={this.handleChange} value={this.state.billName} style={inputStyle} type="text" name='billName' placeholder='Bill Name'/>
                <label htmlFor="billAmount">Bill Amount:</label>
                <input onChange={this.handleChange} value={this.state.billAmount} style={inputStyle}  type="text" name='billAmount' placeholder='Bill Amount'/>
                <label htmlFor="billDate">Bill Date:</label>
                <input onChange={this.handleChange} value={this.state.billDate} style={inputStyle} type="date" name="billDate"/>
                <button type="submit" style={{  width: '56px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>Add Bill</button>
            </form>
        )
    }
}

const addBill = (type = 'ADD_BILL', bill) => {
    return {type, newBill: bill}
}
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '25vh',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    border: '1px solid black'
}

const inputStyle = {
    border: '1px solid black',
    minHeight: '32px',
    minWidth: '224px',
    marginLeft: '4px',
    marginRight: '4px'
}

export default connect(
    null,
    {
        addBill
    }
)(AddBill);