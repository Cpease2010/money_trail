import React from 'react'

function Login() {
  return (
    <div style={{margin: 'auto'}}>
      <form style={formStyle}>
        <input style={inputStyle} type="text" name="name" placeholder='First & Last Name'/>
        <input style={inputStyle} type="email" name="email" placeholder='Email Address'/>
        <button type='submit' style={{  width: '56px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
          Login
        </button>
      </form>
    </div>
  )
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '25vh',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}

const inputStyle = {
  border: '1px solid black',
  minHeight: '32px',
  minWidth: '224px'
}

export default Login
