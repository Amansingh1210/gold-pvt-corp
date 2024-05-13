import React from 'react';
import profile from '../Data/images/aboutUsProfile.jpg';
import { useNavigate } from 'react-router-dom';

function About() {
    const nav = useNavigate();
    return (
        <main className='d-flex flex-column gap-5'>
            <div className='fluid-container bg-dark text-center text-white py-5 px-5'>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <h1>About Us</h1>
                    <nav>
                        <ol className="list-none d-flex gap-3 align-items-center cursor-pointer">
                            <li className="fs-4 text-hover" onClick={() => nav('/')}>Home</li>
                            <li className="">/</li>
                            <li className="fs-5 text-hover">About us</li>
                        </ol>
                    </nav>
                </div>
                <div className="container banner-underline"></div>
            </div>
            <div className='container d-md-flex gap-5 mt-5'>
                <div className='position-relative '>
                    <img src={profile} className='img-about' alt='about' /> 
                    <button className="cap-btn btn-primary img-about">About us</button>
                </div> 
                <div>
                    <p className='about-text '>We feel pleasure to introduce ourselves as one of the leading and competitive manufacturer, supplier, exporters of various type of lab equipments for Mechanical Engineering, Automobile Engineering, Civil Engineering & Workshop Lab Equipments in India. We Universal Engineering Equipments Corpn. was founded eighteen years ago in the year of 2000 at the city of Tajmahal Agra. The firm was established under the amazing supervision of our leader Mr. Praveen Kumar Uppal. We work with modern technology for the production of educational engineering equipments in favor of customer interest. We also serve repairing & maintenance services for our products. Our all products are manufactured under the phenomenal supervision of our highly experienced engineers and they make sure to provide the best material as per industrial requirements. We also have various service centers across the Indian Subcontinent.</p>
                </div>
            </div>
        </main>
    )
}

export default About;
