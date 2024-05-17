import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const nav = useNavigate();
  return (
    <main className='d-flex flex-column gap-4'>
      <div className='fluid-contanier bg-dark text-center text-white py-5 px-5'>
        <div className='d-flex flex-row justify-content-between align-items-center '>
          <div>
            <h1>Contact Us</h1>
          </div>
          <nav>
            <ol className="list-none d-flex gap-3 align-items-center cursor-pointer">
              <li className="fs-4 text-hover" onClick={() => nav('/')}>Home</li>
              <li className="">/</li>
              <li className="fs-4 text-hover">Contact Us</li>
            </ol>
          </nav>
        </div>
        <div className="underline"></div>
        <p className='text-start'>All you want know</p>
      </div>
      <div className='container logo-center  my-5'>
          <div className="card">
            <div className="card-body">
              <FaMapMarkerAlt size={24} />
              <h5 className="card-title my-3">Head Office</h5>
              <p>46 Sec-9 Awas Vikas Colony, Sikandra, Agra-282007 (U.P.)</p>
              <p>Phone No - 09760695881</p>
              <p>Mobile No - 09897326536</p>
            <p>Email - goldsysengineering@gmail.com</p>
            </div>
      
        </div>

      </div>

    </main>

  )
}

export default Contact