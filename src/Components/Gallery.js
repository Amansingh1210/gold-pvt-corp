import React from 'react'
import gallery from '../Data/gallery'

function Gallery() {
  return (
      <div className='container'>
          <p className='text-center fs-1'>Our Gallery</p>
          <div className="underline my-4"></div>
          <p className='text-center fs-5'>You can see our gallery just below here.</p>
          {gallery.map((index) => {
              return <div key={index} className='row'>
                  <div className='col-md-3'>
                      <img src={index} alt='photo' className='' />
                  </div>
              </div>
          })}
      </div>
  )
}

export default Gallery