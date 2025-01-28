import { useState } from 'react'
import Nav from './componentes/Nav'
import Hero from './componentes/Hero'
import Section from './componentes/Section'
import Services from './componentes/Services'
import Office from './componentes/Office'
import Footer from './componentes/Footer'
import Whats from './componentes/Whats'
import About from './componentes/About'
import Form from './componentes/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Nav/>
    <Hero/>
    <About />
    <Services/>
    <Section/>
    <Office/>
    <Form />
    <Footer/>
    <Whats/>



    </>
  )
}

export default App
