import React from 'react'
import './App.css'
import Increment from './componants/Increment'




const App = () => {
  return (
    <div className='main'>
      <h1 className='header'>UseState Hook</h1>
      <Increment />
    </div>
  )
}

export default App