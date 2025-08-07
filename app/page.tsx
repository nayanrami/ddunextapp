import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Courses from "./components/Courses";
import AboutDDU from "./components/AboutDDU";

export default function Home() {
  return (
  <div>
    <Header/>
    <Navbar/>
    <Courses/>
    <AboutDDU/>
    <Footer/>
    </div>
  );
}
