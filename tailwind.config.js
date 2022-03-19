const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: "class",
  theme: {
    screens: {
      // "2xsm": "320px",
      // => @media (min-width: 320px) { ... }

      xsm: "360px",
      // => @media (min-width: 375px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1100px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xlPlus: "1400px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1600px",
      // => @media (min-width: 1536px) { ... }

      "2xlPlus": "1700px",
      // => @media (min-width: 1700px) { ... }

      "3xl": "1900px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        tBlue50: "hsl(197, 100%, 46%)",
        tBlue40: "hsl(197, 100%, 35%)",
        tBlue35: "hsl(220, 100%, 8%)",
        tLime50: "hsl(120, 61%, 50%)",
      },
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        white_egg: "hsl(216, 33%, 100%) 0%",
        // white_egg_nav20: "hsla(216, 33%, 100%, 0.5) 20%",
        // white_egg_90: "hsla(0, 100%, 100%, 0.9) 15%",
        // white_egg_60: "hsla(0, 100%, 100%, 0.2) 40%",
        // white_egg_20: "hsla(0, 100%, 100%, 0.1) 60%",
        "white_semi": "hsl(200, 20%, 82%) 90%",
        // black_clear: "hsla(0, 100%, 0%, 0) 0%",
        // "black_semi+": "hsla(0, 100%, 0%, 0.9) 60%", 
        // tBlueBright: "hsl(196, 100%, 46%) 20%",
        // tBlueDark: "hsl(200, 100%, 32%) 60%"
      }),
      boxShadow: {
        // sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        // DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        // md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 3px 6px -2px rgba(0, 0, 0, 0.07), 0 1px 3px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 12px -4px rgba(0, 0, 0, 0.05)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 16px 24px -8px rgba(0, 0, 0, 0.02)",
        // "3xl": "15px 30px 60px -20px rgba(0, 0, 0, 0.25), 0 32px 48px -16px rgba(0, 0, 0, 0.05)",
        // "3xl": "20px 40px 60px -15px rgba(0, 0, 0, 1), 10px 20px 30px -8 rgba(0,0,0,0.5)",
        // inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        // innerxl: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.25)",
        // none: "none",
      },
      letterSpacing: {
        // tightest: "-.075em",
        // tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        normalPlus: "0.03em",
        smidge: ".05em",
        smidgeplus: ".1em",
        wide: ".15em",
        wideish: ".2em",
        wider: ".25em",
        // slightlywider: ".3em",
        // widest: ".35em",
        // morewide: ".45em"
        // morewider: ".55em"
      },
      fontSize: {
        // "4xs": ".45rem",
        // "5xs": ".45rem",
        // "4xs": ".5rem",
        "3xs": ".65rem",
        "2xs": ".7rem",
        xs: ".75rem",
        xsplus: ".775rem",
        xsxmini: ".8rem",
        xsxminiplus: ".815rem",
        mini: ".825rem",
        minixsm: ".85rem",
        sm: ".875rem",
        smplus: ".9rem",
        tinyxsm: ".925rem",
        tiny: ".95rem",
        base: "1rem",
        md: "1.075rem",
        mdplus: "1.1rem",
        lg: "1.125rem",
        lgplus: "1.15rem",
        "xl": "1.25rem",
        "2xl": "1.35rem",
        "3xl": "1.45rem",
        "4xl": "1.65rem",
        // "5xl": "1.875rem",
        // "5.5xl": "3.5rem",
        // "6xl": "2rem",
        "7xl": "2.25rem",
        // "4.5xl": "2.5rem",
        // "5xl": "3rem",
        // "6xl": "4rem",
        // "6.5xl": "4.5rem",
        // "7xl": "5rem",
        // "7.5xl": "5.5rem" yetsetes
      },
      height: {
        4.5: "1.15rem",
        13: "3.25rem",
        // 13.5: "3.3rem",
        14: "3.5rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        // 70: "17rem",
        88: "20rem",
        90: "21.5rem",
        92: "24rem",
        // 100: "25rem",
        // 105: "27.5rem",
        // 110: "32rem",
        // 115: "35rem",
        // 117: "37.5rem",
        // 120: "40rem",
        // 130: "50rem",
        // 135: "55rem",
        // 140: "60rem",
        // 150: "70rem",
      },
      lineHeight: {
        // "extra-loose": "2.5",
        4.5: "1.1rem",
        12: "3rem",
      },
      width: {
        13: "3.25rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        21: "5.5rem",
        22: "5.75rem",
        50: "12.5rem",
        66: "17rem",
        74: "18.5rem",
        78: "19rem",
        84: "21rem",
        85: "85%",
        88: "22rem",
        "10%": "2.5%",
        "45%": "47.5%",
        // 90: "23rem",
        // 100: "25rem",
        // 105: "27.5rem",
        // 110: "30rem",
        // 115: "35rem",
        // 117: "37.5rem",
        // 120: "40rem",
        // 130: "50rem",
        // 135: "55rem",
        // 140: "60rem",
        // 150: "70rem",
      },
      padding: {
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        7: "7px",
        // 8: "8px",
        10: "10px",
      },
      // borderRadius: {
      //   "lg": "0.5rem",
      // },
      borderRadius: {
        'mdPlus': '0.4rem',
        '4xl': '32px',
        '5xl': '40px',
      },
      borderOpacity: {
        15: "0.15",
      },
      opacity: {
        "0": "0",
        "02": "0.02",
        "03": "0.03",
        "04": "0.04",
        "05": "0.05",
        "06": "0.06",
        "07": "0.07",
        "08": "0.08",
        "10": ".1",
        "15": ".15",
        "20": ".2",
        "25": ".25",
        "30": ".3",
        "40": ".4",
        "50": ".5",
        "60": ".6",
        "70": ".7",
        "75": ".75",
        "80": ".8",
        "85": ".85",
        "90": ".9",
        "93": ".93",
        "95": ".95",
        "98": ".98",
        "100": "1"
      },
      // ringWidth: {
      //   "DEFAULT": "2px",
      //   "3": "3px",
      //   "4": "4px",
      //   "5": "5px",
      //   "6": "6px",
      //   "7": "7px",
      //   "10": "10px",
      // },
      // zIndex: {
      //   '80': '80',
      //   '90': '90',
      //   '100': '100',
      // },
    },
  },

  plugins: [
    // require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ]
}