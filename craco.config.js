// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoAlias = require('@craco/craco');

module.exports = {
  babel: {
    plugins: ['babel-plugin-istanbul'],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
