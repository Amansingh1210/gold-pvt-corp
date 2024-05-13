import React from 'react'
import teamProfile from '../Data/images/ourteam.jpg'
import { useNavigate } from 'react-router-dom';

function Team() {
    const nav = useNavigate();

  return (
      <main className='d-flex flex-column gap-4'>
          <div className='fluid-contanier bg-dark text-center text-white py-5 px-5'>
              <div className='d-flex flex-row justify-content-between align-items-center '>
                <div>
                  <h1>Our team</h1>
                </div>
                  <nav>
                      <ol className="list-none d-flex gap-3 align-items-center cursor-pointer">
                          <li className="fs-4 text-hover">Home</li>
                          <li className="">/</li>
                          <li className="fs-4 text-hover">Our team</li>
                      </ol>
                  </nav>
              </div>
              <div className="underline"></div>
              <p className='text-start'>All you want know</p>
          </div>
          <div className='container d-md-flex gap-5 mt-5'>
              <div className='position-relative '>
                  <button className="cap-btn btn-primary" onClick={() => nav('/')}>Our Team</button>
                  <img src={teamProfile} className='img-fluid' alt='team'/>
              </div>
              <div className='team-details'>
                  <div className='main-team'>
                      <p className='team-h'>THE MAIN TEAM</p>
                      <p>1. Er. Rahul Uppal (Proprietor)</p>
                      <p>2. Er. Rohit Uppal (B.Tech (E&C))</p>
                      <p>3. Er. Rohan Uppal (B.tech (MEch) & M.B.A.)</p>
                  </div>
                  <div className='supporting-team'>
                      <p className='team-h'>THE MAIN TEAM</p>
                      <p>Engineers- 05 No.</p>
                      <p>2. Er. Rohit Uppal (B.Tech (E&C))</p>
                      <p>3. Er. Rohan Uppal (B.tech (MEch) & M.B.A.)</p></div>
                  <div className='r&d-team'>
                      <p className='team-h'>THE MAIN TEAM</p>
                      <p>1. Er. Rahul Uppal (Proprietor)</p>
                      <p>2. Er. Rohit Uppal (B.Tech (E&C))</p>
                      <p>3. Er. Rohan Uppal (B.tech (MEch) & M.B.A.)</p></div>
              </div>
          </div>
          <div className='container '>
              <h1 className='text-uppercase'>our team</h1>
              <p className='about-text'>“A best team is the only instrument to build a strong Empire.” Our company has a team of qualified, talented, skilled, experienced and committed professionals who put in their excellent work to provide the best type of Automobile, Refrigeration, Civil, Mechanical and all type of Educational Engineering Equipments for the Market. We actually appoint our professionals to work with us after necessary evaluation of their work experiences, educational qualifications, skills, work abilities to satisfy the production requirement. Time to time we conduct seminars to update the relative knowledge and skills of our professional. Our team is actually working to provide satisfactory delivery, installation and demonstration of the products safely to our clients.</p>
          </div>
      </main>
  )
}

export default Team