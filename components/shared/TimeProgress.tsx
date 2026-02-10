"use client";

import { useEffect, useState } from "react";

export default function TimeProgress() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getProgress = (current: number, total: number) => (current / total) * 100;

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const dayProgress = getProgress(hours * 3600 + minutes * 60 + seconds, 86400);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h3 className="text-3xl font-bold mb-4">Current Time</h3>
      <p className="text-2xl mb-6">{time.toLocaleTimeString()}</p>
      <div className="space-y-2">
        <p>Day Progress: {dayProgress.toFixed(2)}%</p>
        {/* Week / Month / Year progress placeholders */}
      </div>
    </section>
  );
}
