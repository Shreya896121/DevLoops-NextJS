"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Hero() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.jsonblob.com/019a95aa-b3eb-7974-b03f-01c1d48f3f28")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error:", err));
  }, []);
  if (!data) {
    return <p className="text-center text-lg py-20">Loading...</p>;
  }
  return (
    <section className="text-white bg-gray-800 py-30">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl font-bold">{data.subtitle}</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={data.image}
            width={600}
            height={700}
            alt="Hero Image"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
