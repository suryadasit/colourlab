import React from "react";

function getLuminance(hex) {
  const rgb = hex.replace("#", "").match(/.{2}/g).map(x => parseInt(x, 16) / 255);
  const a = rgb.map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function getContrast(fg, bg) {
  const L1 = getLuminance(fg);
  const L2 = getLuminance(bg);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

function adjustColor(hex, amount) {
  let [r, g, b] = hex.replace("#", "").match(/.{2}/g).map(x => parseInt(x, 16));
  r = Math.min(255, Math.max(0, r + amount));
  g = Math.min(255, Math.max(0, g + amount));
  b = Math.min(255, Math.max(0, b + amount));
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}

export default function ContrastResults({ fgColor, bgColor, setFgColor, setBgColor }) {
  const contrast = getContrast(fgColor, bgColor);

  const passes = {
    normalAA: contrast >= 4.5,
    normalAAA: contrast >= 7,
    largeAA: contrast >= 3,
    largeAAA: contrast >= 4.5
  };

  const suggestions = [
    { label: "Lighter FG", fg: adjustColor(fgColor, 40), bg: bgColor },
    { label: "Darker FG", fg: adjustColor(fgColor, -40), bg: bgColor },
    { label: "Lighter BG", fg: fgColor, bg: adjustColor(bgColor, 40) },
    { label: "Darker BG", fg: fgColor, bg: adjustColor(bgColor, -40) }
  ];

  const Badge = ({ label, pass }) => (
    <span
      className={`px-3 py-1 text-sm rounded font-semibold ${
        pass ? "bg-green-500 text-white" : "bg-red-500 text-white"
      }`}
    >
      {label} {pass ? "Pass" : "Fail"}
    </span>
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <p className="text-lg font-semibold dark:text-white mb-3">
        Contrast Ratio: {contrast.toFixed(2)}:1
      </p>

      <div className="space-y-3 mb-4">
        <div>
          <p className="text-sm font-medium dark:text-gray-200">Normal Text</p>
          <div className="flex space-x-2 mt-1">
            <Badge label="AA" pass={passes.normalAA} />
            <Badge label="AAA" pass={passes.normalAAA} />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium dark:text-gray-200">Large Text</p>
          <div className="flex space-x-2 mt-1">
            <Badge label="AA" pass={passes.largeAA} />
            <Badge label="AAA" pass={passes.largeAAA} />
          </div>
        </div>
      </div>

      {!passes.normalAA && (
        <div>
          <p className="text-sm font-medium dark:text-white mb-2">
            💡 Suggestions to improve contrast:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => {
                  if (s.fg !== fgColor) setFgColor(s.fg);
                  if (s.bg !== bgColor) setBgColor(s.bg);
                }}
                className="flex flex-col items-center p-3 rounded-lg shadow hover:scale-105 transition-transform"
                style={{ backgroundColor: s.bg, color: s.fg }}
              >
                <span className="text-sm font-semibold">{s.label}</span>
                <span className="text-xs">{s.fg} / {s.bg}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
