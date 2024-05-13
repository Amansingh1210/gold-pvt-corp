import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import PrivateRoute from './Components/PrivateRoute'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Products from './Components/Products'
import Banner from './Components/Banner'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Footer from './Components/Footer'
import Team from './Components/Team'
import Mission from './Components/Mission'

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
