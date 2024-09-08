import React from "react";
import gallery from "../Data/gallery";

function Gallery() {
  return (
    <div className="container m-5 ">
      <p className="text-center fs-1 mt-5">Our Gallery</p>
      <div className="underline my-4"></div>
      <p className="text-center fs-5">
        You can see our gallery just below here.
      </p>
      <div className="row ml-5 gallery-border">
        {gallery.map((index) => {
          return (
            <div key={index} className="container col-md-4 my-4 px-1">
              <img
                src={index}
                alt="gallery"
                className="contain shadow-lg shadow-lg-hover custom-hover"
              />
            </div>
          );
        })}
        <div className="catalogue-download">
          <a href="GOLDSYS_INTRODUCATION.pdf" download="GOLDSYS_INTRODUCATION.pdf">
            <button className="catalogue-download-button "> Download Catalogue</button>
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Gallery;
