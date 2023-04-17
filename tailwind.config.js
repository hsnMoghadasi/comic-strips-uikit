/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "#E6F8F5",
          light: "#84DCCE",
          DEFAULT: "#08B89D",
          dark: "#07A68D",
        },
        secondary: {
          lighter: "#FAE9E7",
          light: "#E48F88",
          DEFAULT: "#C81E11",
          dark: "#B41B0F",
          blue: "#065482",
          "light-blue": "#E6EEF3",
        },
        neutrals: {
          90: "#02111A",
          80: "#021A29",
          70: "#032133",
          40: "#4F6470",
          30: "#9AA6AD",
          20: "#E6E9EB",
          10: "#F4F5F7",
          0: "#FFFFFF",
        },
        semantic: {
          warning: {
            lighter: "#FFF9E7",
            light: "#FFDC80",
            DEFAULT: "#FEB900",
            dark: "#E5A700",
          },
          error: {
            lighter: "#FDECEC",
            light: "#F39FA1",
            DEFAULT: "#E63F43",
            dark: "#CF393C",
          },
          success: {
            lighter: "#E7FAEF",
            light: "#86E8AD",
            DEFAULT: "#0DD15B",
            dark: "#0CBC52",
          },
          info: {
            lighter: "#E6F7FF",
            light: "#80D5FF",
            DEFAULT: "#00AAFF",
            dark: "#0099E6",
          },
        },
      },
      fontSize: {
        s8: "8px",
        s10: "10px",
        s12: "12px",
        s14: "14px",
        s16: "16px",
        s18: "18px",
        s22: "22px",
        s24: "24px",
        s32: "32px",
      },
      spacing: {
        s2: "2px",
        s4: "4px",
        s6: "6px",
        s8: "8px",
        s10: "10px",
        s12: "12px",
        s14: "14px",
        s16: "16px",
        s18: "18px",
        s20: "20px",
        s24: "24px",
        s32: "32px",
        s36: "36px",
        s40: "40px",
        s48: "48px",
        s56: "56px",
        s64: "64px",
        s128: "128px",
      },
      borderRadius: {
        DEFAULT: "8px",
        s50: "50px",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    margin: ["even", "odd"],
    extend: {},
  },
  plugins: [],
}
