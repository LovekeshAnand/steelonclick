import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Contractor, Delhi",
    message:
      "SteelOnClick made the whole process super smooth. The product quality and timely delivery were impressive!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Architect, Mumbai",
    message:
      "The customer service team was very responsive. I got my custom steel sections exactly as requested.",
    rating: 4,
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Business Owner, Jaipur",
    message:
      "Excellent experience! The booking process was easy, and I received real-time updates until delivery.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-16" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What Our Clients <span className="text-sky-400">Say</span>
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          Real stories from our valued customers who trust SteelOnClick
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex mb-4 text-sky-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" stroke="none" size={18} />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{t.message}"
                </p>
              </div>
              <div className="border-t border-gray-800 pt-4 mt-auto">
                <h4 className="font-semibold text-white">{t.name}</h4>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;