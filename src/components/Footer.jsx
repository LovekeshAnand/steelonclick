import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-45"
            />
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Your trusted partner for premium steel products and solutions since
            2010.
          </p>
          <div className="flex space-x-3">
            {[
              { Icon: FaFacebookF, href: "#" },
              { Icon: FaInstagram, href: "#" },
              { Icon: FaTwitter, href: "#" },
              { Icon: FaLinkedinIn, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-md hover:bg-[#0096c7] hover:text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            {["Home", "About Us", "Products", "Contact"].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#0096c7] transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-lg">Products</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              "Steel Bars",
              "Steel Beams",
              "Coated Sheets",
              "Stainless Steel",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#0096c7] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#0096c7]" />
              <a href="mailto:info@steelonclick.com">
                info@steelonclick.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#0096c7]" />
              <a href="tel:+9198xxxxxxxx">+91 98xxxxxxxx</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0096c7] mt-1" />
              <span>
                Y-36, Loha Mandi, <br /> Naraina, New Delhi, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-6">
        © 2025 SteelOnClick. All rights reserved.
      </div>
    </footer>
  );
}
