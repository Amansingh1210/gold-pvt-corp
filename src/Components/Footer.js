// import logo from "";
import prod1 from "../Data/images/chemistry_facts.jpg";
import prod2 from "../Data/images/Chemical_Analysis.jpg";
import prod3 from "../Data/images/chemical_bonding.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container-fluid py-4 f1-container">
          <div className="row d-md-flex gap-4">
            <div className="p-5 col-md-3">
              <h5 className="widget-title ">
                <img src="" alt="" className="size-img" />
                <span></span>
              </h5>
              <p className="f1-para">
                {" "}
                We feel pleasure to introduce ourselves as one of the leading
                and competitive manufacturer, supplier, exporters of various
                type of lab equipments for Mechanical Engineering, Automobile
                Engineering, Civil Engineering &amp; Workshop Lab Equipments in
                India.
              </p>
            </div>

            <div className="p-5 col-md-3">
              <h4 className="widget-title ">
                Popular Products
                <span></span>
              </h4>
              <ul className="thumbnail-widget">
                <li className="d-flex p-2">
                  <div className="thumb-img">
                    <img src={prod1} alt="" className="footer-img" />
                  </div>
                  <div className="thumb-content">
                    <Link to="/" title="Civil Engineering">
                      COMPRESSION TESTING MACHINE{" "}
                    </Link>
                    <br />
                    <span className="span-color">
                      {" "}
                      <i>Price on Demand</i>
                    </span>
                  </div>
                </li>
                <li className="d-flex p-2">
                  <div className="thumb-img">
                    <img src={prod2} alt="" className="footer-img" />
                  </div>
                  <div className="thumb-content">
                    <Link to="/" title="Computer science">
                      PELTON WHEEL TURBINE TEST RIG{" "}
                    </Link>
                    <br></br>
                    <span className="span-color">
                      {" "}
                      <i>Price on Demand</i>
                    </span>
                  </div>
                </li>
                <li className="d-flex p-2">
                  <div className="thumb-img">
                    <img src={prod3} alt="" className="footer-img" />
                  </div>
                  <div className="thumb-content">
                    <Link to="/" title="Sociology">
                      REFRIGERATION TEST RIG{" "}
                    </Link>
                    <br></br>
                    <span className="span-color">
                      {" "}
                      <i>Price on Demand</i>
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-5 col-md-3">
              <h4 className="widget-title ">Contact Details</h4>
              <div className="text-widget">
                <p className="f-para">Universal Engineering Equipments Corp.</p>
                <p className="f-para">
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Sales Office: 146 Sec-9 Awas Vikas
                  Colony, Sikandra, Agra-282007 (U.P.)
                </p>
                <p className="f-para">
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Branch Office: 302,7-1-275 AMRAVATI
                  RESIDENCY OPP YALLAMA TEMPLE BALKAMPET SECUNDERBAD
                </p>
                <p className="f-para">
                  {" "}
                  <i className="fa-solid fa-phone"></i>
                  &nbsp;Phone Number : 0562-3590517
                </p>
                <p className="f-para">
                  {" "}
                  <i className="fa-solid fa-phone"></i>
                  &nbsp;Mobile Number : +91-8171410007
                </p>
                <p className="f-para">
                  <i className="fa-solid fa-envelope"></i> &nbsp;Email - rht_uppal@rediffmail.com
                </p>
                <p className="f-para"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid f2-container">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-4 ">
                <p className="f2-para">
                  "Powered By "
                  <Link to="http://www.thenetlinker.com" >
                    NetLinker
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
