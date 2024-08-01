// import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />}/>
        <Route path='/Sign-up' element={<SignUp />} />
        <Route path='/Sign-in' element={<SignIn />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
