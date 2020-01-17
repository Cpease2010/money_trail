import React, {Component} from 'react'

export class AddBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billName: 'hello',
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
            .then(value => console.log('i am value: ', value))
    }

    render() {
        return (
        <form style={formStyle} onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.billName} style={inputStyle} type="text" name='billName' placeholder='Bill Name'/>
          <input onChange={this.handleChange} value={this.state.billAmount} style={inputStyle}  type="text" name='billAmount' placeholder='Bill Amount'/>
          <input onChange={this.handleChange} value={this.state.billDate} style={inputStyle} type="date" name="billDate"/>
          <button type="submit" style={{  width: '56px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>Add Bill</button>
        </form>
      )
    }
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

export default AddBill;