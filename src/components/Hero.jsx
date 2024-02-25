/* eslint-disable react/no-unescaped-entities */
import hero from '../assets/catanddog.png';

export default function Hero() {
  return (
    <section aria-label='Hero Section'>
      <div className='relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src={hero}
            alt='Cute cat and dog'
            className='object-cover object-center w-full h-full'
            loading='lazy'
          />
        </div>

        <div className='relative z-10 flex flex-col justify-center items-center h-full text-center'>
          <h1 className='text-5xl font-bold leading-tight mb-4'>
            Don't buy your pet, adopt it.
          </h1>
          <p className='text-lg text-white mb-8'>
            Heartwarming stories and testimonials from people who have
            adopted pets from Pet Salvation.
          </p>
          <a
            href='/adoption'
            className='bg-[#DDE5B6] text-gray-900 hover:bg-[#bedc29] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
          >
            Find Your Perfect Companion
          </a>
        </div>
      </div>
    </section>
  );
}
