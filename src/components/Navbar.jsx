import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between text-white py-4 px-4 sm:px-6 md:px-8">
        <div className="flex items-center cursor-pointer">
          <img src="/images/logo.png" alt="Logo" className="w-32 sm:w-36 md:w-40" />
        </div>

        <ul className="hidden md:flex space-x-8 lg:space-x-12 text-base font-medium">
          <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => scrollToSection("hero")}>Home</li>

          <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => scrollToSection("about")}>About</li>

          <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => scrollToSection("products")}>Products</li>

          <li className="cursor-pointer hover:text-sky-400 transition" onClick={() => scrollToSection("contact")}>Contact Us</li>
          
        </ul>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <ul className="flex flex-col space-y-4 px-6 py-6 text-base font-medium">

            <li className="cursor-pointer text-white transition" onClick={() => scrollToSection("hero")}>Home</li>

            <li className="cursor-pointer  text-white transition" onClick={() => scrollToSection("about")}>About</li>

            <li className="cursor-pointer text-white transition" onClick={() => scrollToSection("products")}>Products</li>

            <li className="cursor-pointer text-white transition" onClick={() => scrollToSection("contact")}>Contact Us</li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;