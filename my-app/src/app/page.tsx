import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function app() {
  return (
    <div>
      <Navbar/>
    <HeroSection/>
    </div>
  );
}
