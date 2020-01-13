import React from 'react'

function addBill() {
  return (
    <form style={formStyle} action="" method="post">
      <input style={inputStyle} type="text" name='billName' placeholder='Bill Name'/>
      <input style={inputStyle} type="text" name='billAmount' placeholder='Bill Amount'/>
      <input style={inputStyle} type="date" name="billDate"/>
      <button type="submit" style={{  width: '56px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>Add Bill</button>
    </form>
  )
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

export default addBill
