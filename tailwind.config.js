/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'landingImage':"url('public/images/LVM3_M4,_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_(SLP)_of_SDSC-SHAR,_Sriharikota_03.webp')",
      'photograph1':"url('public/images/homibhabha8.webp')",
      'photograph2':"url('public/images/Indian-physicist-CV-Raman-1930.webp')",
    }
  },
  plugins: [],
}

