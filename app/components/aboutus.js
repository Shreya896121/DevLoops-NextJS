"use client";
import { useEffect, useState } from "react";
export default function AboutUs() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.jsonblob.com/019a95bd-a55b-7481-8c76-1eaaa65b9b78")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="w-full text-white p-10 flex flex-col md:flex-row bg-gray-900">
      <div  className="w-full md:w-1/2 flex items-center justify-center ">
      <h1 className="font-bold text-center  text-8xl">
        {data.title}
      </h1>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
       <h1 className="font-bold text-center text-3xl mt-10">
        {data.vision_title}
      </h1>
      <p className="mt-4 whitespace-pre-line">
        {data.vision_text}
      </p>
      <h1 className="font-bold text-center  text-3xl mt-10">
        {data.mission_title}
      </h1>
      <p className="mt-4 whitespace-pre-line">
        {data.mission_text}
      </p>
      </div>
    </div>
  );
}
