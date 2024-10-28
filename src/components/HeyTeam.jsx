import React, { useState } from "react";
import items from "./HeyData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function HeyTeam() {
  const [index, setIndex] = useState(0);
  const { name, img, job, description } = items[index];

  const checkNumber = (number) => {
    if (number > items.length - 1) {
      return 0;
    }
    if (number < 0) {
      return items.length - 1;
    }
    return number;
    
};


  const plzBack = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const plzNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 p-8">
      <div className="bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-lg mx-auto transition transform hover:-translate-y-2 duration-300">
        <div className="flex justify-center p-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-t-xl">
          <img
            src={img}
            alt={name}
            className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg"
          />
        </div>
        <div className="text-center p-8 space-y-4">
          <h3 className="text-3xl font-bold text-gray-800">{name}</h3>
          <p className="text-xl font-semibold text-purple-600">{job}</p>
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
          <div className="flex justify-center space-x-8 pt-6">
            <button
              className="text-purple-500 text-4xl hover:text-purple-700 transition-transform transform hover:scale-110 focus:outline-none"
              onClick={plzBack}
            >
              <FaArrowCircleLeft />
            </button>
            <button
              className="text-purple-500 text-4xl hover:text-purple-700 transition-transform transform hover:scale-110 focus:outline-none"
              onClick={plzNext}
            >
              <FaArrowCircleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeyTeam;
