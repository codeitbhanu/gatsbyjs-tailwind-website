import React from "react";

function header() {
  return (
    <header className="bg-gray-700 p-4 flex justify-between items-center">
      <div side="left-side" className="flex items-center">
        <img
          src="https://cdn0.iconfinder.com/data/icons/social-23/100/social_iconfinder-256.png"
          alt="Logo"
          width="50"
          className="mr-2"
        />
        <a
          href="#"
          className="inline-block p-2 text-gray-200 hover:text-gray-100 transition ease-in duration-150"
        >
          Home
        </a>
        <a
          href="#"
          className="inline-block p-2 text-gray-200 hover:text-gray-100 transition ease-in duration-150"
        >
          About
        </a>
      </div>
      <div side="right-side">
        <a
          href="#"
          className="inline-block p2 text-gray-200 hover:text-gray-100 transition ease-in duration-150 mr-2 "
        >
          Login
        </a>
        <a
          href="#"
          className="inline-block py-2 px-4 text-gray-700 bg-blue-400 hover:bg-blue-100 transition ease-in duration-150 rounded-lg "
        >
          Signup
        </a>
      </div>
    </header>
  );
}

export default header;
