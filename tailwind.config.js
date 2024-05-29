/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'toast': {
          '50': '#f8f5f2',
          '100': '#eae1db',
          '200': '#d3c1b4',
          '300': '#bc9e8d',
          '400': '#ac8573',
          '500': '#9b6c5e',
          '600': '#8c5a53',
          '700': '#754948',
          '800': '#623e3e',
          '900': '#513637',
          '950': '#2d1b1c',
        },
        'steel-blue': {
          '50': '#f3f7fc',
          '100': '#e7f0f7',
          '200': '#c9dfee',
          '300': '#9ac5df',
          '400': '#64a6cc',
          '500': '#408bb7',
          '600': '#347cac',
          '700': '#275a7d',
          '800': '#244c68',
          '900': '#224158',
          '950': '#172a3a',
        },
        'redwood': {
          '50': '#fef9ec',
          '100': '#fcebc9',
          '200': '#f9d68e',
          '300': '#f6ba53',
          '400': '#f4a12b',
          '500': '#ed7f13',
          '600': '#d25c0d',
          '700': '#ae3f0f',
          '800': '#8e3012',
          '900': '#5e210f',
          '950': '#431305',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
