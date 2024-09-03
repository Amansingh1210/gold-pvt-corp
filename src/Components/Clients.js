import React from 'react'
import { useNavigate } from 'react-router-dom';

function Clients() {
const nav = useNavigate();
  return (
      <main className='d-flex flex-column gap-4'>
          <div className='fluid-contanier bg-dark text-center text-white py-5 px-5'>
              <div className='d-md-flex flex-row justify-content-between align-items-center '>
                  <div>
                      <h1 className='fs-1'>Our Clients</h1>
                  </div>
                  <nav>
                      <ol className="list-none d-flex gap-3 align-items-center cursor-pointer">
                          <li className="fs-4 text-hover" onClick={() => nav('/')}>Home</li>
                          <li className="">/</li>
                          <li className="text-hover">Our Clients</li>
                      </ol>
                  </nav>
              </div>
              <div className="banner-underline"></div>
          </div>
          <div >
            
          </div>
      </main>
  )
}

export default Clients