import _hero from "./_hero.twig";
import {buildStory} from "../.storybook/async-helper";

export default {
  title: "partials/_hero"
};

const Template = () => _hero();

export const Default = buildStory({},Template);