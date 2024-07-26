import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import FirstHero from "@/components/FirstHero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <FirstHero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
