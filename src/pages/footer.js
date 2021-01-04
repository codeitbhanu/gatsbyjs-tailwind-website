import React from "react";

function footer() {
  return (
    <div className="md:flex p-10 bg-gray-900 text-gray-400 justify-between">
      <div className="md:w-1/2">
        <h3 className="text-lg mb-2">Join the Newsletter</h3>
        <form className="flex">
          <input
            type="email"
            className="w-full rounded-l py-3 px-4 outline-none focus:bg-gray-200"
          />
          <button className="bg-blue-300 text-blue-800 rounded-r px-4 hover:bg-blue-400">
            Join
          </button>
        </form>
      </div>
      <div className="flex items-center">
        <div>Copyright © Kammera 2020 - Inifinity</div>
      </div>
    </div>
  );
}

export default footer;
