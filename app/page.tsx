import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Courses from "./components/Courses";
import AboutDDU from "./components/AboutDDU";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Slider from "./components/Slider";

export default function Home() {
  return (
  <div>
    <Header/>
    <Navbar/>
    <Slider/>
    <Courses/>
    <AboutDDU/>
    <Reviews/>
    <Gallery/>
    <Footer/>
    </div>
  );
}
