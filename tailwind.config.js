import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
export default withMT( {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        transformUp: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(-30%)", opacity: "1" },
        },
        rotateMoon: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        transformUp: "transformUp 2s ease forwards",
        rotateMoon: "rotateMoon 13s linear infinite",
      },
       screens: {
        '853': '854px',
        '912': '912px',
        
        'wide': '1400px',
        'regular': {'max': '1399px'},
        'tablet': {'max': '1024px'},
        'mid': {'max': '768px'},
        'mid-low': {'max': '550px'},
        'sm': {'max': '400px'},
        'xs': {'max': '300px'}
      },
    },
  },
  plugins: [],
});
