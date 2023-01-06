export function buildStory(storyArgs, template) {
  const asyncComp = (_, { loaded: { component } }) => component;
  asyncComp.render = async (args) => template({...storyArgs, ...args});
  return asyncComp;
}

export default {buildStory};