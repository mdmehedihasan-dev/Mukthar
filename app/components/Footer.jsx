import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
    return (
      <footer className="bg-[#dde2c7] text-gray-800 pt-10">
        <div className="container mx-auto text-center">
          {/* Logo */}
          <div className="mb-4">
            <img src="/logo.png" alt="Company Logo" className="mx-auto w-30 h-14"/>
          </div>
          {/* Navigation Links */}
          <ul className="flex justify-center space-x-8 text-sm font-medium mb-6">
            <li><Link href="#" className="text-white">Categories</Link></li>
            <li><Link href="#" className="text-white">Plans</Link></li>
            <li><Link href="#" className="text-white">About</Link></li>
            <li><Link href="#" className="text-white">Blog</Link></li>
            <li><Link href="#" className="text-white">Contact</Link></li>
          </ul>
  
          {/* Separator */}
          <hr className="w-2/4 mx-auto border-[#FFFFFF57] mb-6" />
  
          {/* Contact & Social Links */}
          <p className="font-medium mb-3 text-white">Contact Us</p>
          <div className="flex justify-center space-x-4 mb-6">
            <Link href="#" className="p-2 bg-white border-2 border-[#dfe4ea] rounded-full shadow-md hover:bg-gray-200">
            <FaFacebookF/>
            </Link>
            <Link href="#" className="p-2 bg-white border-2 border-[#dfe4ea] rounded-full shadow-md hover:bg-gray-200">
              <FaTwitter/>
            </Link>
            <Link href="#" className="p-2 bg-white border-2 border-[#dfe4ea] rounded-full shadow-md hover:bg-gray-200">
              <FaYoutube/>
            </Link>
            <Link href="#" className="p-2 bg-white border-2 border-[#dfe4ea] rounded-full shadow-md hover:bg-gray-200">
              <FaLinkedinIn/>
            </Link>
          </div>
  
          {/* Copyright Section */}
        </div>
        <div className="bg-[#69704D] text-center text-white py-3">
            <p className="text-sm">© 2024 Company Name</p>
          </div>
      </footer>
    );
  }
  