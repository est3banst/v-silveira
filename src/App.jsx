import { useState } from 'react'
import Nav from './componentes/Nav'
import Hero from './componentes/Hero'
import Section from './componentes/Section'
import Services from './componentes/Services'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Hero/>
    <Services/>
    <Section/>
    

    </>
  )
}

export default App
