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
      <div className='container  my-5'>
        <div className='row '>
          <div class="card col-md-4 mx-md-5">
            <div class="card-body">
              <FaMapMarkerAlt size={24} />
              <h5 class="card-title my-3">Sales Office</h5>
              <p>46 Sec-9 Awas Vikas Colony, Sikandra, Agra-282007 (U.P.)</p>
              <p>Phone No - 05623590517</p>
              <p>Mobile No - 0817141007</p>
              <p>Email - rht_uppal@rediffmail.com</p>
            </div>
          </div>
      <div class="card col-md-4 mx-md-5">
            <div class="card-body">
              <FaMapMarkerAlt size={24} />
              <h5 class="card-title my-3">Branch Office</h5>
              <p>302,7-1-275 AMRAVATI RESIDENCY OPP YALLAMA TEMPLE</p>
              <p>BALKAMPET SECUNDERBAD</p>
              <p> MR. RAJEEV SRIVASTAVA (SALES EXECUTIVE)</p>
              <p> Mobile No - 09760696802</p>
            </div>
          </div>
        </div>

      </div>

    </main>

  )
}

export default Contact