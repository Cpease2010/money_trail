import React from 'react';
import Home from "../pages/Home";
import Login from "../pages/Login";
import UserProfile from "../pages/UserProfile";
import {Route} from 'react-router-dom'
function Main() {
  return (
    <div style={mainStyle}>
      <Route exact path='/'component={Home}/>
      <Route exact path='/login'component={Login}/>
      <Route exact path='/user'component={UserProfile}/>
    </div>
  )
}

const mainStyle = {
  display: 'flex',
  flex: '1 0 auto',
  backgroundColor: '#f8f8ff'
}

export default Main
