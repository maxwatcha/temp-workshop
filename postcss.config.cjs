// CommonJS PostCSS config to ensure PostCSS picks up Tailwind's plugin name
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
