module.exports = {
  options: {
    output:"docs"
  },
  use: [
    ['neutrino-preset-airbnb-base'], // first the linting!
    ['neutrino-middleware-styles-loader'], // then the compilation
    [
    'neutrino-preset-web',
    {
      html: {
        title: 'My App',
      }
    }
    ],
  ]
};
