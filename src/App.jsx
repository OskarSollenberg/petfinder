import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Pets from "./components/Pets.jsx";
import Popup from "./components/Popup";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Process from "./components/Process";

import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Pet</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <meta property="og:title" content="Adoption Process" />
        <meta property="og:type" content="website" />
        <meta property="og:image" />
        <meta property="og:url" content="https://www.petfinder.com/process" />
      </Helmet>
      <Header />
      <main className="p-6 md:p-10 flex flex-col gap-[5rem]">
        <Hero />
        <Pets />
        <Process />
        <AboutUs />
        <Reviews />
        <Popup />
      </main>

      <Footer />
    </>
  );
}
