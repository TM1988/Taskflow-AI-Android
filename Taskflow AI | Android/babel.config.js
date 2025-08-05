module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
            '@theme': './src/theme',
          },
        },
      ],
      'inline-dotenv',
      ['@babel/plugin-proposal-decorators', { 'legacy': true }],
      'react-native-reanimated/plugin',
    ],
  };
};
