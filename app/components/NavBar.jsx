"use client";

import { useState } from "react";
import {
  ChevronDown,
  ShoppingCart,
  Search,
  User,
  ArrowBigDown,
} from "lucide-react";
import Link from "next/link";

export default function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);
  //   const [language, setLanguage] = useState("EN");

  return (
    <nav className="bg-black text-white p-4 relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Icons */}
        <div className="flex gap-4">
          <div className="relative">
            <button className="flex items-center gap-2 px-4">
              <span>EN</span>
              <ArrowBigDown size={16} />
            </button>
            {/* <div className="absolute left-0 mt-2 w-auto   shadow-md">
        <ul>
          {["EN", "BAN", "ARB"].map((lang) => (
            <li
              key={lang}
              className="px-4 py-2 cursor-pointer"
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </li>
          ))}
        </ul>
      </div> */}
          </div>
          <ShoppingCart size={20} />
          <Search size={20} />
          <User size={20} />
        </div>
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="./logo.png" alt="" />
        </div>

        {/* Navigation */}
        <div className="flex gap-x-5">
          <Link href={"/"} className="flex items-center text-sm gap-2">
            WHOLESALE
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2"
            >
             <span className="text-sm"> SHOP BY TYPE</span>  <ChevronDown size={16}    />
            </button>
            {/* {isOpen && (
              <div className="absolute mt-2 w-7xl bg-black p-6 shadow-lg grid grid-cols-4 gap-4 z-50">
        

                <div>
                  <h3 className="font-bold mb-2">GRINDERS</h3>
                  <ul className="space-y-1">
                    <li>Manual</li>
                    <li>Electric</li>
                    <li>Burrs & Accessories</li>
                    <li className="font-bold">Coffee, Etc.</li>
                    <li>Roasted Coffee</li>
                    <li>Syrups</li>
                  </ul>
                </div>

             
                <div>
                  <h3 className="font-bold mb-2">BREWING GEAR</h3>
                  <ul className="space-y-1">
                    <li>Espresso</li>
                    <li>Moka Pot</li>
                    <li>Pour Over</li>
                    <li>Immersion | Press</li>
                    <li>Drip (Automatic)</li>
                    <li>Cold Brew</li>
                    <li className="font-bold">Tea</li>
                    <li>Filters | Etc.</li>
                  </ul>
                </div>

             
                <div>
                  <h3 className="font-bold mb-2">TOOLS & ACCESSORIES</h3>
                  <ul className="space-y-1">
                    <li>Barista Tools</li>
                    <li>Milk Frothers & Pitchers</li>
                    <li>Kettles</li>
                    <li>Stands & Supports</li>
                    <li>Scales & Sensors</li>
                    <li>Sifters</li>
                    <li>Cleaning & Maintenance</li>
                  </ul>
                </div>

          
                <div>
                  <h3 className="font-bold mb-2">CUPWARE</h3>
                  <ul className="space-y-1">
                    <li>Ceramics</li>
                    <li>Glassware</li>
                    <li>Travel | Reusable</li>
                    <li className="font-bold">Service & Storage</li>
                    <li>Servers | Carafes</li>
                    <li>Trays & Saucers</li>
                  </ul>
                </div>
              </div>
            )} */}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2"
            >
              <span className="text-sm"> SHOP BRAND</span>  <ChevronDown size={16}    />
            </button>
            {/* {isOpen && (
              <div className="absolute mt-2 w-7xl bg-black p-6 shadow-lg grid grid-cols-4 gap-4 z-50">
              
                <div>
                  <h3 className="font-bold mb-2">GRINDERS</h3>
                  <ul className="space-y-1">
                    <li>Manual</li>
                    <li>Electric</li>
                    <li>Burrs & Accessories</li>
                    <li className="font-bold">Coffee, Etc.</li>
                    <li>Roasted Coffee</li>
                    <li>Syrups</li>
                  </ul>
                </div>

          
                <div>
                  <h3 className="font-bold mb-2">BREWING GEAR</h3>
                  <ul className="space-y-1">
                    <li>Espresso</li>
                    <li>Moka Pot</li>
                    <li>Pour Over</li>
                    <li>Immersion | Press</li>
                    <li>Drip (Automatic)</li>
                    <li>Cold Brew</li>
                    <li className="font-bold">Tea</li>
                    <li>Filters | Etc.</li>
                  </ul>
                </div>

          
                <div>
                  <h3 className="font-bold mb-2">TOOLS & ACCESSORIES</h3>
                  <ul className="space-y-1">
                    <li>Barista Tools</li>
                    <li>Milk Frothers & Pitchers</li>
                    <li>Kettles</li>
                    <li>Stands & Supports</li>
                    <li>Scales & Sensors</li>
                    <li>Sifters</li>
                    <li>Cleaning & Maintenance</li>
                  </ul>
                </div>

     
                <div>
                  <h3 className="font-bold mb-2">CUPWARE</h3>
                  <ul className="space-y-1">
                    <li>Ceramics</li>
                    <li>Glassware</li>
                    <li>Travel | Reusable</li>
                    <li className="font-bold">Service & Storage</li>
                    <li>Servers | Carafes</li>
                    <li>Trays & Saucers</li>
                  </ul>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
}
