"use client";
import { useEffect, useState } from "react";
export default function AboutUs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.jsonblob.com/019a92a6-20f2-7faa-ae5e-73a2035b4374")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="font-bold text-center text-gray-800 text-5xl">
        {data.aboutUs.title}
      </h1>

      <p className="mt-4 text-gray-700 whitespace-pre-line">
        {data.aboutUs.description}
      </p>

      <h1 className="font-bold text-center text-gray-800 text-5xl mt-10">
        {data.mission.title}
      </h1>

      <p className="mt-4 text-gray-700 whitespace-pre-line">
        {data.mission.description}
      </p>
    </div>
  );
}
