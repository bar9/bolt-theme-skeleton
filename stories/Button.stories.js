import twigButton from "./button.twig";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Button",
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
        options: ["button", "submit"],
      },
    },
  },
};

const Template = ({ text, type }) =>
  twigButton({
    text,
    type,
  });

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: "Button",
  type: "button",
};