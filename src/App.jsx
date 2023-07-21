import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <h1>Graham Fujisawa</h1>
      <h1>Hello!</h1>
      
    </>
  )
}

export default App
