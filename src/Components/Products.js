import React, { useState, useEffect } from 'react';

import log1 from "../Data/images/MMV lab/ARBOR PRESS HAND OPERATED 2 TON CAPACITY.jpg";
import log2 from "../Data/images/MMV lab/CUT SECTION WORKING MODEL OF SINGLE PLATE CLUTCH.jpg";
import log3 from "../Data/images/MMV lab/FRONT AXLE (RZEEPA JOINT) WITH STAND FOR DISMANTLING AND ASSEMBLY- RZEEPA JOINT OF LMV.jpg";
import log4 from "../Data/images/MMV lab/FUEL INJECTION PUMP ( DIESEL) INLINE 4-6 CYLINDERS.jpg";
// import log5 from "../Data/images/MMV lab/FUEL INJECTION PUMP DISTRIBUTOR FUEL ROTARY PUMP (DPC) PUMPS ALONG WITH SPECIAL TOOLS AND ACCESSORIES.jpg";
import log6 from "../Data/images/MMV lab/FUEL INJECTION PUMP VE PUMP ALONG WITH SPECIAL TOOLS AND ACCESSORIES.jpg";
import log7 from "../Data/images/MMV lab/FUEL_INJECTION_PUMP_DISTRIBUTOR_FUEL_ROTARY_PUMP__DPC__PUMPS_ALONG_WITH_SPECIAL_TOOLS_AND_ACCESSORIES.jpg";
// import log8 from "../Data/images/MMV lab/RADIATOR CUT SECTION-CROSS FLOW.jpg";
import log9 from "../Data/images/MMV lab/TANDEM MASTER CYLINDER WITH BOOSTER WORKING MODEL WITH TMC & BOOSTER, ALTERNATOR DRIVEN VACCUM PUMP, BRAKE OIL RESERVOIR, TWO BRAKE DRUMS, PEDAL, HOSES.jpg";
// import log10 from "../Data/images/MMV lab/TURBOCHARGER CUT SECTIONAL VIEW.jpg";
import log11 from "../Data/images/RAC lab/CASSETTE AIR CONDITIONER.jpg";
import log12 from "../Data/images/RAC lab/DE SCALING PUMP SET WITH STAINLESS STEEL IMPELLER AND HOUSING COMPLETE WITH MOTOR ½ HP AND ACCESSORIES.jpg";
import log13 from "../Data/images/RAC lab/DUCT_ABLE_SPLIT_A.C_1.5_TON_WITH_R-134A_OR_R-22_RECIPROCATING_COMPRESSOR.jpg";
import log14 from "../Data/images/RAC lab/EVACUATING_AND_REFRIGERANT_CHARGING_STATION.jpg";
import log15 from "../Data/images/RAC lab/FAN COIL UNIT WITH WATER VALVES (2 & 3 WAY).jpg";

const images = [ log1,log2,log3,log4,log6,log7,log9,log11,log12,log13,log14,log15];

const AutoSlider = ({ interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / 4));
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [images.length, interval]);

  const getVisibleImages = () => {
    const startIndex = currentIndex * 4;
    return images.slice(startIndex, startIndex + 4);
  };

  return (

    <div className="auto-slider">
      <p className='text-center fs-1'>Our Featured Product</p>
      <div className="container underline my-5"></div>
      <div className="slider-track">
        {getVisibleImages().map((image, index) => (
          <div key={index} className="product-slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
