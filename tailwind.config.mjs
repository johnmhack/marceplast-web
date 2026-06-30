/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      // ===========================================
      // COLORES DE MARCA
      // Cambia estos valores cuando tengas la paleta
      // definitiva de Marceplast. Se usan como:
      // bg-primario, text-secundario, border-primario-oscuro, etc.
      // ===========================================
      colors: {
  primario: {
    DEFAULT: '#006bab',
    claro: '#259fe6',
    oscuro: '#0b507f',
  },
  acento: {
    DEFAULT: '#1fa9da',
    claro: '#2cbaee',
  },
  fondo: {
    DEFAULT: '#ffffff',
    alterno: '#f4f7fa',
  },
},
      fontFamily: {
        sans: ['"Segoe UI"', 'Inter', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
  'hero-gradient': 'linear-gradient(135deg, #006bab, #0b507f)',
},
    },
  },
  plugins: [],
};
