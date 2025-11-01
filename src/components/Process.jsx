import React from "react";
import { ShoppingCart, UserPlus, Package, Eye, Wallet } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <ShoppingCart className="w-10 h-10 text-sky-400" />,
    title: "Add Products",
    description: 'Hit "Shop Now" and throw whatever you need into your cart.',
  },
  {
    id: 2,
    icon: <UserPlus className="w-10 h-10 text-sky-400" />,
    title: "Sign Up",
    description: "Quick signup - nothing fancy, just the basics.",
  },
  {
    id: 3,
    icon: <Package className="w-10 h-10 text-sky-400" />,
    title: "Place Order",
    description:
      "Order online or give us a ring at 7217714976. Pay Rs. 5,000 to lock it in.",
  },
  {
    id: 4,
    icon: <Eye className="w-10 h-10 text-sky-400" />,
    title: "Check",
    description:
      "We'll send pics/videos to your email, or swing by the store if you want to see it yourself.",
  },
  {
    id: 5,
    icon: <Wallet className="w-10 h-10 text-sky-400" />,
    title: "Pay & Delivery",
    description: "Finish up with RTGS payment and we'll get your stuff to you on schedule.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="bg-black flex justify-center items-center">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">

          How It <span className="text-sky-400">Works</span>
        </h2>

        <p className="text-gray-400 text-center text-lg mb-16">
          Getting steel delivered is pretty straightforward
        </p>

        <div className="relative border-l-2 border-gray-800 pl-10 space-y-12">
          {steps.map((step) => (
            <div key={step.id} className="relative flex items-start gap-6">

              <div className="shrink-0 bg-linear-to-br from-gray-900 to-gray-950 border border-gray-800 p-4 rounded-xl">
                {step.icon}
              </div>

              <div>
                <p className="text-sm font-semibold text-sky-400 mb-1">Step {step.id}</p>

                <h3 className="text-xl font-bold text-white mb-2"> {step.title}  </h3>
                <p className="text-gray-400 text-sm leading-relaxed"> {step.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;