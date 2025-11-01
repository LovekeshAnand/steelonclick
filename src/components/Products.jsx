import React from "react";

const products = [
  {
    id: 1,
    name: "TMT Rebars",
    description: "High-strength steel bars for reliable construction.",
    image: "/images/TMT rebar.jpg",
    price: "₹65/kg",
  },
  {
    id: 2,
    name: "MS Angles",
    description: "Structural steel angles for frameworks and reinforcements.",
    image: "/images/MS angles.jpg",
    price: "₹80/kg",
  },
  {
    id: 3,
    name: "MS Plates",
    description: "Durable steel plates for construction and fabrication use.",
    image: "/images/MS plate.jpg",
    price: "₹95/kg",
  },
  {
    id: 4,
    name: "MS Beam",
    description: "Strong steel beams for structural and heavy-load projects.",
    image: "/images/MS beam.jpg",
    price: "₹72/kg",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
          Featured <span className="text-sky-400">Products</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg px-4">
          Check out what's popular right now
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-sky-500 transition-all duration-300 flex flex-col sm:flex-row"
          >
            <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden bg-black">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-between w-full sm:w-3/5">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{product.name}</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-6">{product.description}</p>
              </div>
              <div className="flex items-center justify-between">
                
                <span className="text-sky-400 font-bold text-xl sm:text-2xl">{product.price}</span>
 
                <button className="bg-sky-500 hover:bg-sky-400 text-white py-2.5 px-6 sm:px-8 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-200"> Enquire </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;