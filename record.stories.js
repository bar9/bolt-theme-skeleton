import recordComponent from './record.twig';
import {buildStory} from "./.storybook/async-helper";

export default {
  title: "Record",
  argTypes: {
    // text: {
    //   control: {
    //     type: "select",
    //     options: ['Default Button', 'Button', 'Hello world']
    //   },
    // },
  },
  parameters: {
    layout: 'centered'
  }
};

const Template = ({ record }) =>
  recordComponent({ record });

export const DefaultRecord = buildStory({
  record: {
    title: 'Hello Record',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
}, Template);