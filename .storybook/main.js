module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options :{
        postcssLoaderOptions: {
          implementation: require('postcss'),
        }
      }
    }
  ],
  "framework": "@storybook/html",
  "webpackFinal": async (config, { configType }) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: {
        loader: "twing-loader",
        options: {
          environmentModulePath: require.resolve('./twing-environment.js')
        }
      },
    });

    return config;
  }
}