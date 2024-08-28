"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

export default function ColorPalettePicker() {
  const [colors, setColors] = useState<string[]>([]);
  const [newColor, setNewColor] = useState("#ffffff");

  
  const addColor = () => {
    if (newColor && !colors.includes(newColor)) {
      setColors([...colors, newColor]);
      setNewColor("#ffffff");
    }
  };
  const removeColor = (index: number) => {
    const updatedColors = [...colors];
    updatedColors.splice(index, 1);
    setColors(updatedColors);
  };
  return (
    <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Color Palette</h2>
        <div className="flex items-center">
          <input
            type="color"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
          />
          <button
            onClick={addColor}
            className="ml-2 px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            Add
          </button>
        </div>
      </div>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {colors.map((color, index) => (
          <li
            key={index}
            className="relative w-full aspect-square rounded-md overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-[#ffffff] dark:bg-[#000000] opacity-50 hover:opacity-0 transition-opacity duration-200 cursor-pointer"
              onClick={() => removeColor(index)}
            >
              <XIcon className="absolute top-1 right-1 w-4 h-4 text-white" />
            </div>
            <div className="w-full h-full" style={{ backgroundColor: color }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
