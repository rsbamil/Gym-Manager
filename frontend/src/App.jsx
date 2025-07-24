import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSession from "./components/WorkoutSession";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <WorkoutSession />
        <Gallery />
        <Pricing />
        <Contact />
        <BMICalculator />
        <Footer />

        <ToastContainer theme="dark" position="top-center" />
      </Router>
    </>
  );
};

export default App;
