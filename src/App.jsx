import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import RestaurantsList from './container/RestaurantList/RestaurantList'

function App() {
  

  return (
    <>
      <Navbar/>
      <RestaurantsList/>
    </>
  )
}

export default App
