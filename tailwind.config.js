module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, //init darkmode to false, darkmode is streatch feature

  theme: {
    screens: {
      xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: "1200px" }, // Desktop smallest.
      xl: { min: "1159px" }, // Desktop wide.
      xxl: { min: "1359px" }, // Desktop widescreen.
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
    colors: {
      darkBlue: {
        default: "#242A38",
      },
      blue: {
        default: "#4653B7",
        light: "#4C7BCB",
      },
      mint: {
        default: "#93ADB4",
      },
      yellow: {
        default: "#E9D7A8",
      },
      white: {
        default: "#FFFFFF",
        cream: "#fdfcfc",
      },
      black: {
        default: "#000000",
        slate: "#303134",
      },
      resolved: {
        default: '#37ce00'
      },
      open: {
        default: '#FF0000'
      }
    },

    extend: {
      outline: {
        yellow: "2px solid #E9D7A8",
      },
    },
  },

  variants: {
    extend: {
      animation: ["hover", "group-hover", "motion-safe"],
      rotate: ["active", "group-hover"],
    },
  },
  plugins: [],
};
