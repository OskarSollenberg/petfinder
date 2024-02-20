import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Products from "./components/Products";
import PopupBig from "./components/PopupBig";
import Footer from "./components/Footer";
import Ratings from "./components/Ratings";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Products />
      <PopupBig />
      <Ratings />
      <Footer />
    </>
  );
}
