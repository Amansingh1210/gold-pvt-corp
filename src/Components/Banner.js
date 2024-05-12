import React from 'react'
import aboutBanner from '../Data/images/about_banner.jpg'

function Banner() {
  return (
      <div className='fluid-contanier my-3'>
          <div className='text-center text-white about-banner py-5'>
              <h1>About Universal Engineering Equipments Corp.</h1>
              <div className="container underline my-5"></div>
              <p>We are the leading Manufacturers, Suppliers of Lab equipments, Garrage Equipments, Workshop Machineries.</p>
              <button className='button my-5'>Read more</button>
        </div>
      </div>
  )
}

export default Banner