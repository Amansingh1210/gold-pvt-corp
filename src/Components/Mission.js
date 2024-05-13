import React from 'react'
import missionImg from '../Data/images/missionvission.jpg'

function Mission() {
  return (
      <main className='d-flex flex-column gap-4'>
          <div className='fluid-contanier bg-dark text-center text-white py-5 px-5'>
              <div className='d-flex flex-row justify-content-between align-items-center '>
                  <div>
                      <h1 className='fs-1'>Vission & Mission</h1>
                  </div>
                  <nav>
                      <ol className="list-none d-flex gap-3 align-items-center cursor-pointer">
                          <li className="fs-4 text-hover">Home</li>
                          <li className="">/</li>
                          <li className="fs-4 text-hover">Vission & Mission</li>
                      </ol>
                  </nav>
              </div>
              <div className="underline"></div>
          </div>
          <div className='container mt-5'>
                <img src={missionImg} className='img-fluid' />
          </div>
          <div className='container '>
              <h1 className='text-uppercase'>Vission & Mission</h1>
              <p className='about-text'>We want to be the best provider of all range of lab equipments for Mechanical Engineering, Automobile Engineering, Civil Engineering & Workshop Lab Equipments across the world. Our main focus is to complete all the requirements of our clients by providing them our best services.</p>
          </div>
      </main>
  )
}

export default Mission