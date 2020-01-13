import React from 'react';
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import {Route} from 'react-router-dom'
function Main() {
  return (
    <div style={mainStyle}>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
    </div>
  )
}

const mainStyle = {
  display: 'flex',
  flex: '1 0 auto',
  backgroundColor: '#f8f8ff'
}

export default Main
