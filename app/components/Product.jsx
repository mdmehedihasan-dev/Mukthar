'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const product = {
  name: 'La Marzocco GB5 S Espresso Machine',
  price: 52000,
  originalPrice: 58000,
  discount: 11,
  image: '/product.png', 
  thumbnailImages: ['/product.png', '/product.png', '/product.png', '/product.png'],
  colors: ['black', 'white', 'gray', 'green', 'red'],
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <div className="max-w-7xl mx-auto p-6 py-20 flex space-x-6 items-center">
    {/* Image Section */}
   <div className='w-1/2'>
   <div className='flex space-x-5'>
         <div className=" flex flex-col space-y-5">
        {product.thumbnailImages.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            width={100}
            height={100}
            className="cursor-pointer border rounded- hover:border-gray-600"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      <Image src={selectedImage} alt={product.name} width={456} height={456} className="rounded-lg" />
     
    </div>
   </div>

    {/* Product Info Section */}
    <div className='w-1/2'>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <div className="flex space-x-2 py-8">
        {product.colors.map((color) => (
          <div
            key={color}
            className="w-6 h-2 rounded-full border border-gray-300 cursor-pointer"
            style={{ backgroundColor:color}}
          ></div>
        ))}
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-gray-500 line-through">SAR {product.originalPrice.toLocaleString()}.00 </span>
        <span className="text-red-500 text-sm">-{product.discount}%</span>
      </div>
      <p className="text-3xl  py-8">SAR {product.price.toLocaleString()}.00</p>
      <p className="text-sm text-gray-600 mt-2">4 interest-free payments of SAR {(product.price / 4).toLocaleString()}. No fees. Shariah-compliant.</p>
    
      <button className="mt-6 px-20 py-3 bg-[#69704d] text-white flex gap-x-2.5">
        <span>Add to Cart</span>
        <ShoppingCart size={20} />
      </button>
    </div>
  </div>
  );
}
