import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import ScrollTop from "./components/ScrollTop";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      {/* <BgAnimation /> */}
      <Navbar />
      <ScrollTop />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
