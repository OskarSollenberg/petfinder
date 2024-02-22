import React from "react";
import dogImage from "../assets/holding-dog.webp";

export default function AboutUs() {
  return (
    <section className="grid grid-cols-1 lg:max-h-[40rem] md:grid-cols-2 gap-10 justify-center items-center overflow-hidden p-10">
      <div className=" overflow-hidden rounded-xl">
        <img src={dogImage} alt="Person holding a dog" />
      </div>
      <div className=" flex items-start flex-col h-full gap-5">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          About Us
        </h2>
        <p className="max-w-[30rem]">
          We know pet adoption, because we're adopters too. We think it's just
          about the best thing you can do. But we'll be real: it can be a
          lengthy (paperwork-filled) process.
        </p>
        <p className="max-w-[30rem]">
          So we're making it easier, with the tools, advice, and transparency
          you need—from the first search through to daily life as a pet parent.
        </p>
        <p className="max-w-[30rem]">
          Because we'll do whatever it takes to help millions of people and pets
          find each other.
        </p>
        <p className="max-w-[30rem]">
          Because we'll do whatever it takes to help millions of people and pets
          find each other.
        </p>
        <p>Ready to find your pet? Let's do it.</p>

        <div>
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Purple
          </button>
        </div>
      </div>
    </section>
  );
}
