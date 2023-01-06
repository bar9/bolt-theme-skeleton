import "../css/output.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// workaround for promises issue: https://github.com/NightlyCommit/twing-loader/issues/33
export const loaders = [
  async ({ args, originalStoryFn }) => {
    if (originalStoryFn.render) {
      const component = await originalStoryFn.render(args);
      return { component };
    }
  }
]
