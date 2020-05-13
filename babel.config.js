module.exports = {
  compact: false,
  presets: [
    ['@babel/preset-env', {
      modules: false,
    }],
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
  ],
};
