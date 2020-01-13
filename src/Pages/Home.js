import React from 'react'

function Home() {
  return (
    <div style={homeStyle}>
      <h1 style={{fontSize: '52px'}}>
      Welcome to MoneyTrail!
      </h1>
      <p style={{fontSize: '36px'}}>
        An easy to use bill tracker that use the minimum amount of your personal information possible to help you make a financial impact.
      </p>  
    </div>
  )
}

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto 20vh',
  textAlign: 'center'
}

export default Home
