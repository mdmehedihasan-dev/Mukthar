import Footer from "./components/Footer";
import CountdownTimer from "./components/HomeComponent/CountdownTimer";
import Espresso from "./components/HomeComponent/Espresso";
import HeroSection from "./components/HomeComponent/HeroSection";
import NavBar from "./components/NavBar";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      {/* <CountdownTimer/> */}
      <Espresso />
      <Espresso />
      <Espresso />
      <WhyUs/>
      <Footer/>
    </div>
  );
}
