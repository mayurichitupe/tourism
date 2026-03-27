import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Packages from "./components/Packages";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Home />
        <AboutUs />
        <Packages />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
