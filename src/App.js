import React from "react";
import "./App.css";
import BannerBottom from "./components/BannerBottom";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Features />
      <Testimonials />
      <BannerBottom />
      <Footer />
    </div>
  );
}

export default App;
