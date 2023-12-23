import { useState } from 'react'
import './App.css'
import Photo from "./components/Photo"
import Name from "./components/Name"
import Buttons from "./components/Buttons"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="over-container">
        <main className="main-container">
          <Photo />
          <Name />
          <Buttons />
          <About />
          <Interests />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
