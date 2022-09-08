const postcssConfig = {
  plugins: [],
};

// If we are in production mode, then add cssnano

if (process.env.NODE_ENV === 'production') {
  postcssConfig.plugins.push(
    require('postcss-import'),
    require('cssnano')({
      preset: 'default',
    }),
    require('postcss-preset-env')
  );
} else {
  postcssConfig.plugins.push(require('postcss-import'), require('postcss-preset-env'));
}

module.exports = postcssConfig;