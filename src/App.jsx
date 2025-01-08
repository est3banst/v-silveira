import { useState } from 'react'
import Nav from './componentes/Nav'
import Hero from './componentes/Hero'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    </>
  )
}

export default App
