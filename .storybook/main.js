module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
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
      use: "twigjs-loader",
    });

    return config;
  }
}