
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "340px",
      md: "540",
      lg: "768px",
      xl: "1180px"
    },
    extend: {},
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)" }
      },
      rotate:{
        "0%":{ transform:"rotate(0deg)"},

        "100%":{ transform:"rotate(360deg)"},
      },
      scaleUp:{
        "0%":{transform:"scale(0.8)"},
        "50%":{transform:"scale(1.2)"},
        "100%":{transform:"scale(0.8)"},

      }
    },

    animation: {
      movingY: "move 3s linera infinite",
      rotating:"rotate 15s linear infinite",
      scalingUp:"scaleUp 3s linear infinite"
    },

    fontFamily: {
      jost: ["Jost", "sans-serif"],
      Loster: ["Lobster", "sans-seri"]
    },
    container: {
      center: true,
      padding: {
        default: "12px",
        md: "32px"
      }
    },
  },
  plugins: [],
}