import React, { useState, useEffect } from "react";
import ColorPanel from "./components/ColorPanel";
import ContrastResults from "./components/ContrastResults";
import Preview from "./components/Preview";

export default function App() {
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("fg")) setFgColor(params.get("fg"));
    if (params.get("bg")) setBgColor(params.get("bg"));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("fg", fgColor);
    params.set("bg", bgColor);
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [fgColor, bgColor]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className="p-4 bg-white dark:bg-gray-900 shadow flex justify-between items-center">
        <h1 className="text-xl font-semibold dark:text-white">🎨 Advanced Color Review</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Sidebar (Fixed) */}
      <aside className="fixed right-0 top-16 w-96 h-[calc(100%-4rem)] p-6 border-l bg-gray-50 dark:bg-gray-800 space-y-6 overflow-y-auto">
        <ColorPanel label="Foreground" color={fgColor} setColor={setFgColor} />
        <ColorPanel label="Background" color={bgColor} setColor={setBgColor} />
        <ContrastResults
          fgColor={fgColor}
          bgColor={bgColor}
          setFgColor={setFgColor}
          setBgColor={setBgColor}
        />
      </aside>

      {/* Main Preview Area */}
      <main className="p-6 pr-[25rem]">
        <Preview fgColor={fgColor} bgColor={bgColor} />
      </main>
    </div>
  );
}
