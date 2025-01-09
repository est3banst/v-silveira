import { useState } from 'react'
import Nav from './componentes/Nav'
import Hero from './componentes/Hero'
import Section from './componentes/Section'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <Section></Section>

    </>
  )
}

export default App
