import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element= {<Register />} />
      <Route path='/Login' element= {<Login />} />

     
    </Routes>

    </Router>
  
  )
}

export default App
