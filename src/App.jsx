import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Pets from "./components/Pets.jsx";
import Popup from "./components/Popup";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Process from "./components/Process";

export default function App() {
  return (
    <>
      <Header />
      <main className="p-10">
        <Hero />
        <Pets />
        <Process />
        <AboutUs />
        <Reviews />
        {/* <Popup /> */}
      </main>
      <Footer />
    </>
  );
}
