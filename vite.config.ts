import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          blogs: path.resolve(__dirname, 'blogs.html'),
          about: path.resolve(__dirname, 'about.html'),
          notFound: path.resolve(__dirname, '404.html'),
          typesOfCafes: path.resolve(__dirname, 'blogs/types-of-cafes.html'),
          coffeeDrinksForBeginners: path.resolve(__dirname, 'blogs/coffee-drinks-for-beginners.html'),
          popularCafeFood: path.resolve(__dirname, 'blogs/popular-cafe-food.html'),
          cafeDesserts: path.resolve(__dirname, 'blogs/cafe-desserts.html'),
          cafeDateIdeas: path.resolve(__dirname, 'blogs/cafe-date-ideas.html'),
          cafesForStudying: path.resolve(__dirname, 'blogs/cafes-for-studying.html'),
          coffeeBeansAndRoasts: path.resolve(__dirname, 'blogs/coffee-beans-and-roasts.html'),
          cafePhotographyTips: path.resolve(__dirname, 'blogs/cafe-photography-tips.html'),
          cafeEtiquette: path.resolve(__dirname, 'blogs/cafe-etiquette.html'),
          choosingACafe: path.resolve(__dirname, 'blogs/choosing-a-cafe.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
