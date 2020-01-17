import React, { Component } from 'react'
import profilePicture from '../assets/profilePicture.jpg'
import AddBill from '../components/AddBill'
import Bill from '../components/Bill'
import uuid from "uuid";

export class UserProfile extends Component {
  render() {
    return (
      <div >
        <div style={topStyle}>
          <img src={profilePicture} alt="User Profile" height='250px' width='250px'/>
          <h1>Cory Pease</h1>
          <AddBill/>
        </div>
        <div style={billWrapper}>
            <Bill bill={bill}/>
        {/*{*/}
        {/*  bills*/}
        {/*  .sort(function (a, b) {*/}
        {/*    return a.dueDate - b.dueDate;*/}
        {/*  })*/}
        {/*  .map(bill => <Bill key={bill.id} bill={bill}/>)*/}
        {/*}*/}
        </div>
      </div>
    )
  }
}

const bill = {
    id: uuid.v4(),
    billName: 'Sprint',
    billAmount: 120.35,
    dueDate: '25'
}
const topStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '100vw',
  padding: '12px'
}

const billWrapper = {
  display: 'flex'
}

export default UserProfile
