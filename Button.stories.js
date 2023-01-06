import twigButton from "./button.twig";
import {buildStory} from "./.storybook/async-helper";

export default {
  title: "Button",
  argTypes: {
    text: {
      control: {
        type: "select",
        options: ['Default Button', 'Button', 'Hello world']
      },
    },
  },
};

const Template = ({ text, type }) =>
  twigButton({ text, type });

export const DefaultButton = buildStory({
  text: "Default Button",
  type: "Button"
}, Template);

export const Button = buildStory( {
  text: "Button",
  type: "Button"
}, Template);

