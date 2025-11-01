import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `url('/images/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl">
        Your One Stop Solution<br />for your every{" "}
        <span className="text-sky-400 italic font-bold">solid</span> needs
      </h1>

      <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl px-4">
        Industry-leading steel solutions for construction, manufacturing, and industrial projects.<br/>Trusted by over 5,000 professionals nationwide.
      </p>

      <button className="mt-6 sm:mt-8 px-8 sm:px-10 py-3 bg-gray-200 text-gray-900 rounded-full font-semibold text-sm sm:text-base">
        Explore our products
      </button>
    </section>
  );
};

export default HeroSection;