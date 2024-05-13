import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Products from './Components/Products'
import Banner from './Components/Banner'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Footer from './Components/Footer'
import Team from './Components/Team'
import Mission from './Components/Mission'
import Laboratory from './Components/Laboratory'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
          <div>
            <Slider />
            <Products />
            <Banner />
            <Gallery />
          </div>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/team' element={<Team />} />
          <Route path='/lab' element={<Laboratory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
