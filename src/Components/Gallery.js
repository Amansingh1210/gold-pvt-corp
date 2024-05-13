import React from 'react'
import gallery from '../Data/gallery'

function Gallery() {
  return (
      <div className='container mt-5'>
          <p className='text-center fs-1 mt-5'>Our Gallery</p>
          <div className="underline my-4"></div>
          <p className='text-center fs-5'>You can see our gallery just below here.</p>
          <div className='row'>
          {gallery.map((index) => {
              return <div key={index} className='col-md-4 my-4 '>
                  <img src={index} alt='gallery' className='contain shadow-sm shadow-lg-hover custom-hover' />
                  </div>
          })}
          </div>
      </div>
  )
}

export default Gallery