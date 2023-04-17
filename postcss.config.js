module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-import")({
      path: ['node_modules', 'src']
    }),
    require("postcss-preset-env"),
  ],
};
