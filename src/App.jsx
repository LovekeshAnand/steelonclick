import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import StatsSection from "./components/Stats";
import LeadForm from "./components/Form";
import FeaturedProducts from "./components/Products";
import ProcessSteps from "./components/Process";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div id="hero"><HeroSection /></div>

      <StatsSection />

      <div id="contact"><LeadForm /></div>

            <div id="products"><FeaturedProducts /></div>

      <div id="about"><ProcessSteps /></div>


      <Testimonials />

      <Footer />
    </>
  );
}

export default App;