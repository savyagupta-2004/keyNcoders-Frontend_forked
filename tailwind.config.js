/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(99.32deg, rgba(232, 232, 232, 0.6) 0.56%, rgba(168, 168, 168, 0.6) 59.52%, rgba(194, 194, 194, 0.6) 117.27%)",
      },
      boxShadow: {
        custom: "0 0 10px 2.5px rgba(255, 115, 0, 0.5)",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
        roboto: ['"Roboto"'],
      },
      screens: {
        small: "830px",
        medium: "1000px",
      },
      backgroundColor: {
        "white-opacity-20": "rgba(255, 255, 255, 0.2)", // Custom opacity for white background
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right,#212121,#313131, #616161)",
      },
    },
  },
  plugins: [],
};
