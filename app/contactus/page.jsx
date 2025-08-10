import React from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import Slider from "../components/Slider";
import Courses from "../components/Courses";
import AboutDDU from "../components/AboutDDU";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import { Footer } from "../components/Footer";

function financeaid() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto m-10">
        <h1 className="inline border-b-4 p-2 border-red-500 text-4xl font-bold font-sans">
          Contact Us
        </h1>

        <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
          <div className="flex-1">
          <i class="fa-regular fa-building"></i> Address: 11062 156 St NW #210, Edmonton, AB T5P 4M8, Canada<br/>
          <i class="fa-solid fa-mobile-screen"></i>Call :+1 780-728-3838<br/>
          <i className="fa-solid fa-envelope"></i>info@dentaldreamsunlocked.ca<br/>
          </div>
          <div className="flex-1">
            {" "}
            <div class="map_container">
              <div class="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9479.879170277423!2d-113.5913662!3d53.5583067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa22ea823d5120b35%3A0x9702999390870255!2sDental%20Dreams%20Unlocked%20Corp!5e0!3m2!1sen!2sin!4v1717865808706!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default financeaid;
