import FlourSelectionTextBox from "./FlourSelectionTextBox";

export default {
  title: "Textboxes/FlourSelectionTextBox",
  component: FlourSelectionTextBox,
};

const Template = (args) => <FlourSelectionTextBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
