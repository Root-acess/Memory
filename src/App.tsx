import React from "react";
import HeroSection from "./component/Hero";
import Feature from "./component/Feature";
import Contact from "./component/Contact";
import BlogCards from "./component/Blogcard";
import Footer from "./component/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <Feature />
      <BlogCards />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
