import React from "react";
import { TrendingUp, Users, Award, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: <TrendingUp size={40} />, value: "15+", label: "Years of Experience" },
    { icon: <Users size={40} />, value: "5K+", label: "Happy Customers" },
    { icon: <Award size={40} />, value: "50+", label: "Product Types" },
    { icon: <Star size={40} />, value: "4.9", label: "Customer Rating" },
  ];

  return (
    <section className="w-full py-10 bg-linear-to-b from-gray-950 via-gray-900 to-gray-800 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-30 px-12">
        {stats.map((item, index) => (
          <div
            key={index}
            className=" rounded-2xl p-5 text-center"
          >
            <div className="relative bg-sky-500 text-white w-45 h-24 flex items-center justify-center rounded-2xl mx-auto mb-8 ">
              <div className="absolute inset-0 rounded-2xl shadow-inner shadow-sky-900/50"></div>
              {item.icon}
            </div>
            <h3 className="text-4xl font-bold text-gray-100">{item.value}</h3>
            <p className="text-gray-100 font-medium mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
