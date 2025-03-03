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
  const [isOpen, setIsOpen] = useState(false);
  //   const [language, setLanguage] = useState("EN");

  return (
    <div className="bg-black">
      <nav className="text-white p-4 max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center ">
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
          <Link href={'/'}>  <img src="./logo.png" alt="" /></Link>
          </div>

          {/* Navigation */}
          <div className="flex gap-x-5">
            <Link href={"/"} className="flex items-center text-sm gap-2">
              WHOLESALE
            </Link>

            <div className="">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2"
              >
                <span className="text-sm"> SHOP BY TYPE</span>{" "}
                <ChevronDown size={16} />
              </button>
              {isOpen && (
                <div className="absolute top-[120px] right-0 mt-2 w-full bg-black  justify-between p-10 flex z-50">
                  <div className="w-[203px]">
                    <h3 className="font-bold mb-2">1- A</h3>
                    <hr />
                    <ul className="space-y-1 mt-5">
                      <li>Manual</li>
                      <li>Electric</li>
                      <li>Burrs & Accessories</li>
                      <li className="font-bold">Coffee, Etc.</li>
                      <li>Roasted Coffee</li>
                      <li>Syrups</li>
                    </ul>
                  </div>

                  <div className="w-[203px]">
                    <h3 className="font-bold mb-2">B- C</h3>
                    <hr />
                    <ul className="space-y-1 mt-5">
                      <li>Manual</li>
                      <li>Electric</li>
                      <li>Burrs & Accessories</li>
                      <li className="font-bold">Coffee, Etc.</li>
                      <li>Roasted Coffee</li>
                      <li>Syrups</li>
                    </ul>
                  </div>

                  <div className="w-[203px]">
                    <h3 className="font-bold mb-2">D- 1</h3>
                    <hr />
                    <ul className="space-y-1 mt-5">
                      <li>Manual</li>
                      <li>Electric</li>
                      <li>Burrs & Accessories</li>
                      <li className="font-bold">Coffee, Etc.</li>
                      <li>Roasted Coffee</li>
                      <li>Syrups</li>
                      <li>Manual</li>
                      <li>Electric</li>
                      <li>Burrs & Accessories</li>
                      <li className="font-bold">Coffee, Etc.</li>
                      <li>Roasted Coffee</li>
                      <li>Syrups</li>
                    </ul>
                  </div>

                  <div className="w-[203px]">
                    <h3 className="font-bold mb-2">k- 0</h3>
                    <hr />
                    <ul className="space-y-1 mt-5">
                      <li>Manual</li>
                      <li>Electric</li>
                      <li>Burrs & Accessories</li>
                      <li className="font-bold">Coffee, Etc.</li>
                      <li>Roasted Coffee</li>
                      <li>Syrups</li>
                      <li>Manual</li>
                      <li>Electric</li>
                      <li>Burrs & Accessories</li>
                      <li className="font-bold">Coffee, Etc.</li>
                      <li>Roasted Coffee</li>
                      <li>Syrups</li>
                      <li>Manual</li>
                      <li>Electric</li>
                      <li>Burrs & Accessories</li>
                    </ul>
                  </div>

                  <div className="w-[203px]">
                    <h3 className="font-bold mb-2">D- Z</h3>
                    <hr />
                    <ul className="space-y-1 mt-5">
                      <li>Manual</li>
                      <li>Electric</li>
                      <li>Burrs & Accessories</li>
                      <li className="font-bold">Coffee, Etc.</li>
                      <li>Roasted Coffee</li>
                      <li>Syrups</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2"
              >
                <span className="text-sm"> SHOP BRAND</span>{" "}
                <ChevronDown size={16} />
              </button>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
