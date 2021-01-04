import React from "react";

function hero() {
  return (
    <div className="md:flex justify-between py-20 px-10 bg-gray-600 text-gray-100">
      <div side="left-hero" className="md:w-1/2 mb-10 mb:mb-0">
        <h2 className="md:text-4xl lg:text-6xl text-white mb-6">
          Digital Camera Expo!
        </h2>
        <p className="mb-6"> Looking around for taking snap 📷 </p>

        <a
          href="#"
          className="inline-block py-3 px-6 text-lg bg-gray-400 text-gray-800 hover:bg-gray-300 rounded mr-2 shadow-md"
        >
          Learn More
        </a>
        <a
          href="#"
          className="inline-block py-3 px-6 text-lg bg-green-400 text-green-800 hover:bg-green-100 rounded mr-2 shadow-md"
        >
          Get Started
        </a>
      </div>
      <div side="right-hero" className="md:w-1/2 mb-10 mb:mb-0">
        <img
          src="https://images.unsplash.com/photo-1501479276381-eee3729ebaf4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Doc Image"
          className="w-full rounded shadow-2xl"
        ></img>
      </div>
    </div>
  );
}

export default hero;
