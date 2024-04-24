import React from 'react'
import Navbar from './components/navbar section/navbar'
import Hero from './components/hero section/hero'
import Service from './components/services/service'
import Playstore from './components/playstore section/playstore'
import Testimo from './components/testimonials/testimo'
import Footer from './components/footer section/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <Playstore/>
      <Testimo/>
      <Footer/>
    </div>
  )
}

export default App
