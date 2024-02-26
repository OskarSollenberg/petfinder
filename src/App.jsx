import Hero from './components/Hero';
import Header from './components/Header';
import Pets from './components/Pets.jsx';
import Popup from './components/Popup';
import Reviews from './components/Reviews';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Process from './components/Process';

import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Adoption Process</title>
        <meta
          name='description'
          content='Follow our simple 4-step process to adopt a pet. Find your friend, meet & greet, apply with ease, and bring them home. Start your pet adoption journey with us today.'
        />
        <meta
          name='keywords'
          content='Pet Adoption, Adoption Process, Adopt a Pet, Pet Adoption Steps, Find a Pet'
        />

        <meta property='og:title' content='Adoption Process' />
        <meta property='og:type' content='website' />
        <meta property='og:image' />
        <meta
          property='og:url'
          content='https://www.petfinder.com/process'
        />
      </Helmet>
      <Header />
      <main className='p-6 md:p-10 flex flex-col gap-[5rem]'>
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
