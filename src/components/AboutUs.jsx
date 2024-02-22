import React from "react";
import dogImage from "../assets/holding-dog.webp";

export default function AboutUs() {
  return (
    <section className="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:max-h-[40rem] lg:grid-cols-2 gap-8 lg:gap-10 justify-center items-center mx-auto lg:max-w-7xl ">
      <div className="h-full overflow-hidden rounded-xl lg:max-h-[40rem] max-h-[25rem] sm:max-h-[30rem]">
        <img
          src={dogImage}
          alt="Person holding a dog"
          className="object-cover object-center"
        />
      </div>
      <div className="flex items-start gap-5 flex-col h-full justify-around text-[18px] sm:text-lg md:text-xl lg:text-xl sm:px-5">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          About Us
        </h2>
        <p className="max-w-[40rem]">
          We know pet adoption, because we're adopters too. We think it's just
          about the best thing you can do. But we'll be real: it can be a
          lengthy (paperwork-filled) process.
        </p>
        <p className="max-w-[40rem]">
          So we're making it easier, with the tools, advice, and transparency
          you need—from the first search through to daily life as a pet parent.
        </p>
        <p className="max-w-[40rem]">
          Because we'll do whatever it takes to help millions of people and pets
          find each other.
        </p>
        <p className="max-w-[40rem]">
          Because we'll do whatever it takes to help millions of people and pets
          find each other.
        </p>
        <p>
          {" "}
          <a
            className="text-blue-500 hover:text-blue-800 visited:text-purple-600"
            href=""
          >
            Ready to find your pet?
          </a>{" "}
          Let's do it.
        </p>

        <div className="flex justify-center items-center gap-4§">
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-8 py-4 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            More about us
          </button>
        </div>
      </div>
    </section>
  );
}
