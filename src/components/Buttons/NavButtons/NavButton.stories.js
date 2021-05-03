import NavButton from "./NavButton";

export default {
  title: "NavButtons/NavButton",
  component: NavButton,
};

const Template = (args) => <NavButton {...args} />;

export const ToGenerator = Template.bind({});
ToGenerator.args = {
  navigation: true,
  label: "Bread Generator",
  size: "large",
};

export const ToCollection = Template.bind({});
ToCollection.args = {
  navigation: true,
  label: "Browse your Recipes",
  size: "large",
};

export const ToRatio = Template.bind({});
ToRatio.args = {
  navigation: true,
  label: "%",
  size: "small",
};

export const ToIngredients = Template.bind({});
ToIngredients.args = {
  navigation: true,
  label: "i",
  size: "small",
};

export const Delete = Template.bind({});
Delete.args = {
  navigation: true,
  label: "X",
  size: "small-smallfont",
};

export const Select = Template.bind({});
Select.args = {
  navigation: false,
  label: "Wholemeal Wheat Flour",
  size: "xlarge",
};
