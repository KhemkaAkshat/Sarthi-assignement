import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Enter Your Description
          </label>
          <textarea
            rows={5}
            placeholder="Type your emotions here"
            className="w-full resize-none rounded-lg border border-gray-300 p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
