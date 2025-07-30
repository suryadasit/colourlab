import React from "react";

export default function Preview({ fgColor, bgColor }) {
  return (
    <div
      className="w-full h-full p-10 flex flex-col justify-start overflow-y-auto"
      style={{ color: fgColor, backgroundColor: bgColor }}
    >
      {/* Main Heading */}
      <h1 className="text-4xl font-extrabold mb-3 tracking-tight">
        Colors & Accessibility
      </h1>
      <p className="text-lg opacity-90 mb-8">
        Learn how color contrast impacts usability, accessibility, and design
        quality. Follow WCAG standards to ensure readability for everyone.
      </p>

      {/* Key Information Sections */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">👁 Why Contrast Matters</h2>
        <p className="leading-relaxed text-base mb-3">
          Our eyes perceive contrast differently depending on colors. Blue text
          on white is easier to read than yellow on white. More than{" "}
          <strong>217 million people</strong> have visual impairments, so good
          contrast is essential for inclusive design.
        </p>
        <p className="leading-relaxed text-base">
          Poor contrast makes reading harder for people with low vision or color
          blindness. Good contrast improves readability for everyone.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">📏 WCAG Contrast Guidelines</h2>
        <p className="leading-relaxed text-base mb-3">
          The WCAG 2.1 standard defines two levels:
          <span className="font-semibold text-blue-500"> AA </span> and
          <span className="font-semibold text-blue-500"> AAA </span>.
        </p>

        <div className="border-l-4 border-blue-500 pl-4 italic text-sm opacity-90">
          <p>
            AA → 4.5 for normal text, 3.0 for large text <br />
            AAA → 7.0 for normal text, 4.5 for large text
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">🎨 Design Responsibly</h2>
        <p className="leading-relaxed text-base mb-3">
          Ensuring good color contrast helps make content readable by as many
          people as possible. Always test combinations for accessibility, and
          provide options for light and dark modes.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:scale-105 transition">
            Example Button
          </button>
          <a
            href="#"
            className="underline text-base font-medium hover:text-blue-500 transition"
          >
            Example Link →
          </a>
        </div>
      </section>

      {/* ✅ NEW CONTENT BELOW */}

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">🧠 Tips for Better Readability</h2>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>Use large font sizes for headlines and important text.</li>
          <li>Choose high-contrast color pairs for body text.</li>
          <li>Limit using pure saturated colors for long paragraphs.</li>
          <li>Always test your design in both light and dark backgrounds.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">🌍 Accessibility Benefits</h2>
        <p className="leading-relaxed text-base mb-3">
          Accessible colors don't just help people with visual impairments.
          They improve the overall user experience for everyone – making content
          easier to scan, read, and understand.
        </p>
        <p className="leading-relaxed text-base">
          Accessibility improves SEO, audience reach, and inclusivity in your
          digital products.
        </p>
      </section>

      <footer className="mt-10 text-sm opacity-60">
        © 2025 Color Review Demo | Built for Accessibility Awareness
      </footer>
    </div>
  );
}
