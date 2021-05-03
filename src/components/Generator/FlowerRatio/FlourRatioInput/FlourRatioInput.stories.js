import FlourRatioInput from "./FlourRatioInput";

export default {
  title: "Input/FlourRatioInput",
  component: FlourRatioInput,
};

const Template = (args) => <FlourRatioInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Wholemeal Wheat Flour",
};
