"use client";

import React from "react";

const Reviews = () => {
  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto p-6 bg-[#F0EDE5] ">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <button className=" px-20 py-3 bg-[#69704d] text-white">
            + Add Review
          </button>
        </div>

        <div className="mt-10">
          <div className="space-y-6 ">
            {[1, 2, 3].map((review, index) => (
              <div key={index} className="border bg-white  py-10 px-7 flex space-x-4">
                <img
                  src="/product.png"
                  alt="Espresso Machine"
                  className="w-24 h-24 object-cover"
                />
                <div>
                  <h3 className="font-semibold">
                    Perspiciatis esse molestiae vel qui.
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Quasi quo sit suscipit tempora aperiam rerum placeat id.
                    Voluptatem praesentium excepturi id. Repudiandae incidunt
                    doloremque. Error est et ullam.
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="text-yellow-500">★★★★★</div>
                    <span className="ml-2 font-semibold">User Name</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       <div className="flex justify-center pt-10">
       <button className="bg-white font-bold text-[#224737] px-10 py-4 rounded mt-6 block mx-auto">
          Load More
        </button>
       </div>
      </div>
    </div>
  );
};

export default Reviews;
