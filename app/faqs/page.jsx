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
          FAQ's
        </h1>

        
      </div>
      <Footer />
    </div>
  );
}

export default financeaid;
