const sharedConfig = require('../postcss.config');

module.exports = {
  ...sharedConfig,
  plugins: {
    ...sharedConfig.plugins,
    'postcss-preset-env': {
      ...sharedConfig.plugins.postcssPresetEnv,
      'cascade-layers': true,
    },
    cssnano: {
      preset: 'lite',
    },
  },
};
