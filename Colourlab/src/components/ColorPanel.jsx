import React from "react";

export default function ColorPanel({ label, color, setColor }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-3 dark:text-white">{label}</h2>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full h-20 cursor-pointer mb-3 rounded-lg border"
      />

      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full border rounded p-3 text-center dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
}
