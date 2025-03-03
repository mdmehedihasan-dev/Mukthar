"use client";

import React from "react";

const ProductDescription = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 bg-[#DEE1D2] border-2 border-[#414660]">
      <h2 className="text-2xl font-bold mb-4">Product Description</h2>
      <h3 className="text-xl font-semibold mb-2">
        La Marzocco GB5 S Espresso Machine
      </h3>
      <p className="text-gray-700 mb-4">
        La Marzocco 2gr GB5 S accompanied by cup warming feature in the La
        Marzocco GB5 S is the latest version with new style and additions to the
        device without sacrificing the appearance or classic character of La
        Marzocco. This device is characterized by elegant shape and high-quality
        performance and fits intensive commercial use in busy cafes. It comes
        with a durable stainless steel body in addition to two groups for
        espresso brewing and dual PID in order to improve quality and
        performance. It’s also characterized by its elegant design and the
        presence of the new logo on the sides.
      </p>

      <div className="flex justify-between">
        <div className="w-1/2">
          <h4 className="text-lg font-semibold mb-2">Features</h4>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Thermally insulated boilers. Rotary pump for more effective
              performance.
            </li>
            <li>
              PID system to control the temperature of coffee and steam boiler.
            </li>
            <li>
              Programmable buttons and control the volume of the espresso dose.
            </li>
            <li>
              Digital control screen that allows easy access to all settings of
              the machine.
            </li>
            <li>Two steam wands and two groups.</li>
            <li>Ability to be connected to La Marzocco Pro App.</li>
            <li>USB to allow updating the firmware constantly.</li>
            <li>Cup warmer.</li>
            <li>Capable of holding tall cups.</li>
            <li>7 litre steam boiler.</li>
            <li>3 – 4 litre coffee boiler.</li>
          </ul>
        </div>
        <div className="w-1/2">
          <h4 className="text-lg font-semibold mb-2">Specifications</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Material: stainless steel.</li>
            <li>Pump Type: rotary.</li>
            <li>Boiler Type: dual.</li>
            <li>Steam Boiler Capacity: 7 litre.</li>
            <li>Coffee Boiler Capacity: 3.4 litre.</li>
            <li>Voltage: 220 V.</li>
            <li>Frequency: 50/60 Hz.</li>
            <li>Wattage: 5445 W.</li>
            <li>Color: silver steel.</li>
            <li>Weight: 70 kg.</li>
            <li>Dimensions: (H) 47 cm × (W) 77 cm × (D) 64 cm.</li>
            <li>Made in Italy.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
