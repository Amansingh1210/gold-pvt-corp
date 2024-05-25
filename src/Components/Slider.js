import React from 'react';
import banners from '../Data/banners';

function Slider() {

    return (
        <main>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {banners.map((index) => {
                        return <div key={index} className="carousel-item active">
                            <img src={index} className="d-block w-100" alt="..." />
                            <div className="carousel-caption ">
                                <p className='text-1 sm-hidden'> ISO 9001:2000 Certified Company</p>
                                <h3 className='text-2 sm-hidden'>GOLDSYS</h3>
                                <h3 className='text-3 sm-hidden'>Engineering Equipments Corp.</h3>
                                <p className='text-4 sm-hidden'> Opening up the world class products</p>
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
