import React from "react";

export default function Process() {
  function Steps() {
    const stepsInfo = [
      {
        id: 1,
        title: "This is the first step",
        description:
          "We will start with the first step and move on to the next step.",
      },
      {
        id: 2,
        title: "This is the second step",
        description:
          "We will start with the first step and move on to the next step.",
      },
      {
        id: 3,
        title: "This is the third step",
        description:
          "We will start with the first step and move on to the next step.",
      },
      {
        id: 4,
        title: "This is the fourth step",
        description:
          "We will start with the first step and move on to the next step.",
      },
    ];
    return stepsInfo.map((step) => (
      <div className="md:max-w-[15rem] border p-6 rounded-xl shadow-sm bg-white">
        <div className="flex items-center justify-center w-14 h-14 bg-[#1354FD] rounded-full">
          <span className="text-white text-[1.5rem]">{step.id}</span>
        </div>
        <h3 className="text-xl font-bold mt-4">{step.title}</h3>
        <p className="text-gray-500 mt-2">{step.description}</p>
      </div>
    ));
  }

  return (
    <section className="mb-10 flex justify-around flex-col items-center gap-[5rem]">
      <div>
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Simple Process
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-x-[6rem] sm:gap-y-[4rem] lg:gap-x-10 ">
        <Steps />
      </div>
    </section>
  );
}
