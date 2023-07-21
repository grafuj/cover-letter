import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Graham Fujisawa</h1>
      <Nav />
    </>
  )
}

export default App
