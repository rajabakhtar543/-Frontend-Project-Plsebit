import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Services from './Components/Services'
import About from './Components/About'
import Counter from './Components/Counter'
import Pricing from './Components/Pricing'
import Clients from './Components/Clients'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './App.css'
import Cursor from './cursor'
const App = () => {
  return (
    <>
    <Cursor/>
    <Header />
    <Hero />
    <Services />
    <About/>
    <Counter/>
    <Pricing/>
    <Clients/>
    <Contact/>
    <Footer/>
 
    </>
  )
}

export default App
