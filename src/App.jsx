import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Products from "./components/Products";
import Popup from "./components/Popup";
import Ratings from "./components/Ratings";
import Happenings from "./components/Happenings";
import Footer from "./components/Footer";
import Process from "./components/Process";

export default function App() {
  return (
    <>
      <Header />
      <main className="p-10">
        <Hero />
        <Process />
        <Products />
        <Happenings />
        <Ratings />
        <Footer />

        <Popup />
      </main>
    </>
  );
}
