import { useState, useEffect } from 'react'
import './App.css'
import './styles/main.scss'
import NavBar from './component/NavBar'
import Switcher from './component/Switcher'
import Header from './component/Header'

function App() {
 

  return (
    <>
      <div className=' '>
       <NavBar />
       <Header />
       <Switcher />
      </div>
     
    </>
  )
}

export default App
