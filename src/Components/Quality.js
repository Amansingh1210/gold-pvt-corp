import React from 'react'
import quality from '../Data/images/quality.jpg'
import { useNavigate } from 'react-router-dom';

function Quality() {
    const nav = useNavigate();
  return (
      <main className='d-flex flex-column gap-4'>
          <div className='fluid-contanier bg-dark text-center text-white py-5 px-5'>
              <div className='d-flex flex-row justify-content-between align-items-center '>
                  <div>
                      <h1>Quality Policy</h1>
                  </div>
                  <nav>
                      <ol className="list-none d-flex gap-3 align-items-center cursor-pointer">
                          <li className="fs-4 text-hover" onClick={() => nav('/')}>Home</li>
                          <li className="">/</li>
                          <li className="fs-4 text-hover">Quality Policy</li>
                      </ol>
                  </nav>
              </div>
              <div className="underline"></div>
              <p className='text-start'>All you want know</p>
          </div>
          <div className='container d-md-flex gap-5 mt-5'>
              <div className='container'>
                  <img src={quality} className='fix-img' alt='team' />
              </div>
              <div className='py-3'>
                <h1>Quality Policy</h1>
                <p>
                      We are an ISO 9001:2000 certified Company in offering the finest range of technical educational Equipments. These products are manufactured using genuine quality raw material and components that are procured from some of the most trusted vendors of the industry. Being a quality-driven organization, we make sure to offer the products that can comply to the international quality standards by employing latest technology and equipment. Moreover, our team of quality controllers keeps a strict vigil right from the time of procuring raw material till final dispatch of the products.
                </p>
              </div>  
          </div>
          
      </main>

  )
}

export default Quality