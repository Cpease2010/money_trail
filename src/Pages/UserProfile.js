import React, { Component } from 'react'
import profilePicture from '../assets/profilePicture.jpg'
import AddBill from '../components/AddBill'
import Bill from '../components/Bill'
import uuid from "uuid";

export class UserProfile extends Component {
  state = {
    bills: [
      {
        id: uuid.v4(),
        billName: 'Sprint',
        billAmount: 120.35,
        dueDate: new Date()
      }
    ]
  }
  render() {
    return (
      <div>
        <div style={userStyle}>
          <img src={profilePicture} alt="User Profile" height='250px' width='250px'/>
          <h1>Cory Pease</h1>
          <AddBill/>
        </div>
        {
          this.state.bills.map(bill => <Bill props={bill}/>)
        }
      </div>
    )
  }
}

const userStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100vw',
  padding: '12px'
}

export default UserProfile
