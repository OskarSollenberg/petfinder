import React from "react";

import { Helmet } from "react-helmet";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineWavingHand } from "react-icons/md";
import { LuClipboardPaste } from "react-icons/lu";
import { GiDogHouse } from "react-icons/gi";

export default function Process() {
  function Steps() {
    const stepsInfo = [
      {
        id: 1,
        title: "Find Your Friend",
        description:
          "Browse our online profiles to find your perfect pet match.",
        icon: <FaMagnifyingGlass />,
      },
      {
        id: 2,
        title: "Meet & Greet",
        description:
          "Schedule a visit to meet your potential new family member.",
        icon: <MdOutlineWavingHand />,
      },
      {
        id: 3,
        title: "Apply With Ease",
        description: "Complete a simple application to ensure a perfect fit.",
        icon: <LuClipboardPaste />,
      },
      {
        id: 4,
        title: "Bring Them Home",
        description: "Finalize the adoption and welcome your new pet home.",
        icon: <GiDogHouse />,
      },
    ];
    return stepsInfo.map((step) => (
      <div
        key={step.id}
        className="md:max-w-[15rem] border p-6 rounded-xl shadow-sm bg-white"
        aria-label={`Step: ${step.title}`}
      >
        <div className="flex items-center justify-center w-14 h-14 bg-[#1354FD] rounded-full">
          <span aria-label="Icon representing step">
            {step.icon} className="text-white text-[1.5rem]">{step.icon}
          </span>
        </div>
        <h3 className="text-xl font-bold mt-4">{step.title}</h3>
        <p className="text-gray-500 mt-2">{step.description}</p>
      </div>
    ));
  }

  return (
    <>
      <Helmet>
        <title>Adoption Process</title>
        <meta
          name="description"
          content="Follow our simple 4-step process to adopt a pet. Find your friend, meet & greet, apply with ease, and bring them home. Start your pet adoption journey with us today."
        />
        <meta
          name="keywords"
          content="Pet Adoption, Adoption Process, Adopt a Pet, Pet Adoption Steps, Find a Pet"
        />

        <meta property="og:title" content="Adoption Process" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="https://www.petfinder.com/process" />
      </Helmet>
      <section className="mb-10 flex justify-around flex-col items-center gap-[5rem]">
        <div>
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            A Simple Process
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-x-[6rem] sm:gap-y-[4rem] lg:gap-x-10 ">
          <Steps />
        </div>
      </section>
    </>
  );
}
