import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Reviews from './components/Reviews';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Process from './components/Process';

export default function App() {
  return (
    <>
      <Navbar />
      <main className='p-10'>
        <Hero />
        <Products />
        <Process />
        <AboutUs />
        <Reviews />
        {/* <Popup /> */}
      </main>
      <Footer />
    </>
  );
}
