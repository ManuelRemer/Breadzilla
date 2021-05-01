import Welcome from "./Welcome";

export default {
  title: "Textboxes/Welcome",
  component: Welcome,
};

const Template = (args) => <Welcome {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
