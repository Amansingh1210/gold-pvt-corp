import React, { useState } from 'react'
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
import Certifications from './Components/Certifications'
import laboratory from './Data/laboratory';
import Quality from './Components/Quality'
import Contact from './Components/Contact'
import Scroller from './Components/Scroller'

function App() {
  const [currentId,setCurrentId] =useState(0)
  const getId = (e) => {
    setCurrentId(e.target.id)
  }
  return (
    <>
      <BrowserRouter>
          <Navbar products={laboratory} getId={getId} />
        <Routes>
          <Route path="" element={
          <div>
            <Scroller />
            <Slider />
            <Products />
            <Banner />
            <Gallery />
          </div>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/team' element={<Team />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/quality' element={<Quality />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/lab' element={<Laboratory currentId={currentId}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
