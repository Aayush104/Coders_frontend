/** @type {import('tailwindcss').Config} */


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
        half: '60%',
        d_size:'%',
        photo:'50%',
        right:'50%',
        form:'90%',
        l_md:'80%'
       

        
      },
      backgroundImage: {
        'img': "url('/src/assets/img/clg_img.jpg')",
      },
      fontSize:{
        'large':'2.5rem',
        'w_lg':'2.7rem',
        'medium':'2.2rem',
        'label':'1rem',
        'sm_text':'0.5rem',
        'md_text': '1rem'
      },
      screens: {
        'sm': '300px',
        // => @media (min-width: 640px) { ... }
        'mobile':'560px',

        'm-mobile':'700px',
'lmd':'850px',
  
        'md': '765px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1030px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  's_photo':'945px',
       
        // => @media (min-width: 1536px) { ... }
        'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1070px',
      'l_desktop':'1200px'
      }
    },
  },
  plugins: [],
}
