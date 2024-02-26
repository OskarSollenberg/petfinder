/* eslint-disable react/no-unescaped-entities */
import hero from '../assets/catanddogg.webp';

export default function Hero() {
  return (
    <section aria-label='Hero Section'>
      <div className='relative  h-screen text-white overflow-hidden'>
        <div className='absolute inset-0 h-full overflow-hidden rounded-xl lg:max-h-[40rem] max-h-[25rem] sm:max-h-[30rem]'>
          <img
            src={hero}
            alt='Cute cat and dog'
            className='object-cover bg-[#adc178] object-center w-full h-full'
          />
        </div>

        <div className='relative z-10 flex flex-col justify-center items-center h-full text-center lg:max-h-[40rem] max-h-[25rem] sm:max-h-[30rem]'>
          <h1 className='text-3xl sm:text-5xl font-bold leading-tight mb-4'>
            Don't buy your pet, adopt it.
          </h1>
          <p className='text-lg text-white mb-8'>
            Heartwarming stories and testimonials from people who have
            adopted pets from Pet Finder.
          </p>
          <a
            href='/adoption'
            className='bg-[#beda71] text-gray-900 hover:bg-[#bedc29] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
          >
            Find Your Companion
          </a>
        </div>
      </div>
    </section>
  );
}
