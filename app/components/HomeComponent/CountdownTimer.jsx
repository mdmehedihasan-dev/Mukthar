'use client'

import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4 text-center">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="bg-gray-800 text-white p-2 rounded-md w-16">
          <p className="text-2xl font-bold">{timeLeft[interval]}</p>
          <p className="text-sm uppercase">{interval}</p>
        </div>
      ))}
    </div>
  );
}
