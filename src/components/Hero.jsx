import React, { useEffect, useState } from "react";
import puppyImage from "../assets/puppy.jpg";
import catImage from "../assets/cat.jpg";
import hamsterImage from "../assets/hamster.webp";

export default function Hero() {
  const images = [puppyImage, catImage, hamsterImage];

  // image animation
  const [imageIndex, setImageIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Slideshow"
              src={images[imageIndex]}
              className={`absolute inset-0 h-full w-full object-cover ${
                animating
                  ? "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
              onLoad={() => setAnimating(false)}
              style={{ transition: "transform 1s, opacity 1s" }}
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Grow your audience
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
