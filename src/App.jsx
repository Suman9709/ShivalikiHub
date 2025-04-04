import React from 'react'
import Navbar from './Components/Navbar'
import MainPage from './Components/MainPage'
import AboutPage from './Components/AboutPage'
import Projects from './Components/Projects'
import Inogurations from './Components/Inogurations'
import Activities from './Components/Activities'

const App = () => {
  return (
    <div>
      <Navbar />
      <MainPage />
      <AboutPage />
      <Inogurations />
      <Projects />
      <Activities/>

    </div>
  )
}

export default App