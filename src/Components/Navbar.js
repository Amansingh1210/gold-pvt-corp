import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


  
const Navbar = ({ products , getId }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-blue h-5">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="logo-color">
              <p className="nav-logo logo-font fs-6 fw-normal">
                GOLDSYS ENGINEERING PRIVATE LIMITED
                <br />
              </p>
                <p className="text-dark logo-font">
                  Manufacturer of Technical Education Equipments
                  <br />
                  GSTIN NO. 09AAKCG9297N1ZG
                </p>
              <br />
            </div>
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse custom-bg" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link
                  className=" text-dark link-color-hover px-3 nav-link active fs-3"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item dropdown fs-3">
                <Link
                  className="nav-link dropdown-toggle  text-dark link-color-hover px-3"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/about">
                      Company profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/team">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/mission">
                      Our Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/certifications">
                      Our Certifications
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown fs-3">
                <Link
                  className="nav-link dropdown-toggle  text-dark link-color-hover px-3"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu">
                  {products.map((lab) => (
                    <li key={lab.id}>
                      <Link className="dropdown-item uppercase" to="/lab" id={lab.id} onClick={getId}>
                        {lab.name} 
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fs-3  text-dark link-color-hover px-3"
                  aria-current="page"
                  to="/quality"
                >
                  Quality Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fs-3  text-dark link-color-hover px-3"
                  aria-current="page"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="d-flex justify-content-evenly">
              <li className="dot p-2">
                <Link to="" className="link-hover fs-3 link-color ">
                  <TiSocialGooglePlus />
                </Link>
              </li>
              <li className="dot p-2">
                <Link to="" className="link-hover fs-3  link-color">
                  <FaFacebook />
                </Link>
              </li>
              <li className="dot p-2">
                <Link to="" className="link-hover fs-3  link-color">
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
