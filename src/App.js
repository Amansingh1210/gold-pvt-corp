import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Products from "./Components/Products";
import Banner from "./Components/Banner";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import Mission from "./Components/Mission";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Products />
      <Banner />
      <Gallery />
      {/* <About /> */}
      {/* <Team /> */}
      {/* <Mission /> */}
      <Footer />
    </>
  );
}

export default App;
