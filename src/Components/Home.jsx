import React, { useState, useEffect } from "react";

const Home = () => {
  const greetingTexts = ["The Full Stack Developer..."].join(" ");
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex !== greetingTexts.length) {
        //   setCurrentIndex(0);
        //   setDisplayText(greetingTexts[currentIndex]);
        // }
        // else {
        setDisplayText(
          displayText
            ? displayText + greetingTexts[currentIndex]
            : greetingTexts[currentIndex]
        );
        setCurrentIndex(currentIndex + 1);
      }
    }, 150);
  }, [displayText]);

  return (
    <div className="md:w-1/2 sm:w-full absolute top-1/2 -translate-y-1/2 my-8">
      <div className="mx-4 rounded-lg h-fit pb-6 pt-1 home">
        <div className="text-3xl font-bold mt-12 mx-10 text-blue-600">
          Welcome to SK's Platform 🌐
          <span className="animate-bounce">|</span>
        </div>
        <div className="text-3xl font-bold mx-10 mt-4 px-4 text-green-500">
          {displayText}
        </div>
        <div className="text-1xl font-bold mx-10 mt-4 px-4 text-green-500">
          <p>
            Greetings and welcome to the digital realm of SK – where innovation
            meets execution in the world of Full Stack Web Development!
          </p>
          <button className="transition-opacity duration-500 ease-in-out hover:opacity-100 hover:bg-blue-700 bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
            Let's Connect ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
