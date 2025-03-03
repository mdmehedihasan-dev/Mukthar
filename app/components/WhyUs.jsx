"use client";

import { CreditCard, ShoppingCart, Truck } from "lucide-react";

export default function WhyUs() {
  return (
    <div className="bg-[#dde2c7]">
      <div className="max-w-7xl mx-auto  py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose Us</h2>
        <p className="text-gray-600 max-w-xl text-center mx-auto mt-2">
          Lorem ipsum dolor sit amet consectetur. Eu bibendum in mollis vitae
          lectus mauris sit integer. Ut ac.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 border-gray-300 pt-8">
          <div>
            <div className="text-3xl">
              <ShoppingCart/>
            </div>
            <h3 className="font-bold text-lg mt-2">Original Products</h3>
            <p className="text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur. Eu bibendum in mollis
              vitae lectus mauris sit integer. Ut ac.
            </p>
          </div>
          <div className=" border-l border-r border-[#22320F42] px-6">
            <div className="text-3xl">
            <CreditCard/>
            </div>
            <h3 className="font-bold text-lg mt-2">Secure Payment</h3>
            <p className="text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur. Eu bibendum in mollis
              vitae lectus mauris sit integer. Ut ac.
            </p>
          </div>
          <div >
            <div className="text-3xl">
            <Truck/>
            </div>
            <h3 className="font-bold text-lg mt-2">Fast Delivery</h3>
            <p className="text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur. Eu bibendum in mollis
              vitae lectus mauris sit integer. Ut ac.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Ataad is a registered and promising brand in the field of coffee
            equipment, tools, and accessories. We fulfill all your needs with
            best prices and unparalleled quality.
          </p>
        </div>
        {/* <div className="mt-8 flex flex-col items-center">
          <div className="text-xl font-bold">Ataad</div>
          <nav className="flex gap-6 mt-4 text-gray-700">
            <a href="#" className="hover:underline">
              Categories
            </a>
            <a href="#" className="hover:underline">
              Plans
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
          <div className="flex gap-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-gray-800">
              🔵
            </a>
            <a href="#" className="hover:text-gray-800">
              ⚫
            </a>
            <a href="#" className="hover:text-gray-800">
              🔗
            </a>
          </div>
          <p className="text-gray-600 mt-4">© 2024 Company Name</p>
        </div> */}
      </div>
    </div>
  );
}
