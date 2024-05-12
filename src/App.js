import React from 'react'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import banner1 from './Data/banner1.jpg'
import banner2 from './Data/banner2.jpg'
import banner3 from './Data/banner3.jpg'

export const banners = [banner1,banner2,banner3];

function App() {
  return (
    <>
      <Navbar />
      <Slider  banners={banners}/>
    </>
  )
}

export default App