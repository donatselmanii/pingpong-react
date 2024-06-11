import React from "react";
import NavBar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import "./Style/AboutUs.css";
import { Helmet } from "react-helmet";

const lg = "../../../img/web/logoo.jpg";



const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Sport Store</title>
      </Helmet>
      <NavBar />
      <div className="about-page">
        <div className="photo" data-aos="fade-right">
          <img src={lg} alt="" />
        </div>
        <div className="about-txt" data-aos="fade-left" >
          <h3 class="title">Want to know more about us?</h3>
          <p className="txt">
            What we created is a place where you can find the newest features
            from Sport with the best prices.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
