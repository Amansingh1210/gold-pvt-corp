import React, { useEffect, useState } from 'react'
import {banners} from '../App'

function Slider() {
    const [showButton,setShowButton] = useState(true)
  return (
    <main>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" onMouseEnter={()=>setShowButton(false)} onMouseOut={()=>setShowButton(true)}>
              <div className="carousel-inner">
                  {banners.map((index)=>{
                      return <div key={index} className="carousel-item active">
                          <img src={index} className="d-block w-100" alt="..." />
                      </div>
                  })};
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className={`carousel-control-prev-icon prev ${showButton && 'visually-hidden'}`} aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className={`carousel-control-next-icon next ${showButton && 'visually-hidden'}`} aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
    </main>
  )
}

export default Slider