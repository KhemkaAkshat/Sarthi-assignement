"use client";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState<{
    error?: string;
    emotion?: string;
    confidence?: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/analysis", { description });
      setResponse(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (err) {
      setLoading(false);
      console.log("API cann failed: ", err);
    }
  };

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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {loading ? (
          <div className="text-center text-gray-700">Loading...</div>
        ) : response ? (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-800">
            {response.error ? (
              <p>Error: {response.error}</p>
            ) : (
              <>
                <p>Emotion: {response.emotion}</p>
                <p>Confidence: {response.confidence}</p>
              </>
            )}
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default Home;
