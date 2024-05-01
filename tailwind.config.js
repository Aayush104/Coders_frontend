module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        full: '100vh',
        half:'80vh',
        t_half:'75vh'
      },
      width: {
        occupied:'70%',
        half: '65%',
        photo:'50%',
        right:'50%',
        form:'90%'
        
      },
      backgroundImage: {
        'img': "url('/src/assets/img/clg_img.jpg')",
      },
      fontSize:{
        'medium':'2.7rem'
      }
    },
  },
  plugins: [],
}
