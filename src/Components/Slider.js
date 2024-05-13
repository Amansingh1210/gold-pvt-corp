import React, { useEffect, useState } from 'react';
import banners from '../Data/banners';

function Slider() {
    const [showButton, setShowButton] = useState(true);

    return (
        <main>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" onMouseEnter={() => setShowButton(false)} onMouseOut={() => setShowButton(true)}>
                <div className="carousel-inner">
                    {banners.map((index) => {
                        return <div key={index} className="carousel-item active">
                            <img src={index} className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <p className='text-1'>00125:002 certified</p>
                                <h3 className='text-2'>Universal</h3>
                                <h3 className='text-3'>Engineering Equipments Corp.</h3>
                                <p className='text-4'> Opening up the world class products</p>
                            </div>
                        </div>
                    })}
                    ;
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className={`carousel-control-prev-icon prev`} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className={`carousel-control-next-icon next `} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    )
}

export default Slider;
