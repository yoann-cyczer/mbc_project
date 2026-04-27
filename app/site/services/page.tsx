import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <Footer />
    </>
  );
}
