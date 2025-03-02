'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'La Marzocco GB5 S',
    price: 'SAR 44,850.00',
    oldPrice:'SAR 44,850.00',
    image: './Marzocco.jpg',
    colors: ['black', 'white', 'red'],
  },
  {
    id: 2,
    name: 'La Marzocco GB5 S',
    price: 'SAR 44,850.00',
    oldPrice:'SAR 44,850.00',
    image: './Marzocco.jpg',
    colors: ['black', 'white'],
  },
  {
    id: 3,
    name: 'La Marzocco GB5 S',
    price: 'SAR 44,850.00',
    oldPrice:'SAR 44,850.00',
    image: './Marzocco.jpg',
    colors: ['black', 'white'],
  },
  {
    id: 4,
    name: 'La Marzocco GB5 S',
    price: 'SAR 44,850.00',
    oldPrice:'SAR 44,850.00',
    image: './Marzocco.jpg',
    colors: ['black', 'white'],
  },
  
];

export default function Espresso() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) => Math.min(prev + 1, products.length - 1));
  };

  return (
    <div className="bg-[#f6f4ed]">
         <div className="p-8 max-w-7xl overflow-hidden mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-[#403427]">Espresso</h2>
      <div className="relative flex ">
        <div
          className="flex gap-x-5 transition-transform duration-300"
          style={{transform:`translateX(-${scrollPosition * 100}%)`}}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[272px] mx-2 border relative bg-white p-4 shadow-sm">
              <span className="bg-[#69704d] text-white px-2 py-1 text-sm rounded top-[-10px] absolute inline-block">20% Off</span>
              <img src={product.image} alt={product.name} className="w-full h-32 object-contain mb-2" />
              <h3 className="font-bold text-[#403427] text-lg">{product.name}</h3>
              <div className='flex gap-x-2 '><p className="text-[#403427] text-sm">{product.price}</p> <p className="text-[#959b87] line-through text-sm">{product.oldPrice}</p></div>
              <div className="flex gap-2 mt-10">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`w-8 rounded-4xl h-3  border ${color === 'black' ? 'bg-black' : color === 'white' ? 'bg-white border-gray-300':'bg-red-600'}`}
                  ></span>
                ))}
              </div>
              <button className="mt-4 w-full flex items-center justify-center gap-2  px-4 py-2  bg-[#f2efe8]">
                Add to Cart <ShoppingCart size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
     <div className='flex justify-between'>
     <button className="mt-6 bg-[#69704d] text-white px-4 py-2  hover:bg-[#818b5a]">
        View All Deals
      </button>
     <div className="flex gap-x-2 mt-4">
        <button className="p-2 bg-white  hover:bg-gray-100" onClick={scrollLeft}>
          <ArrowLeft/>
        </button>
        <button className="p-2 bg-white hover:bg-gray-100" onClick={scrollRight}>
          <ArrowRight/>
        </button>
      </div>
      
     </div>
    </div>
    </div>
   
  );
}
