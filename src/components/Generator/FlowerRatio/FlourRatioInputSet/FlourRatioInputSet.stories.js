import FlourRatioInputSet from "./FlourRatioInputSet";

export default {
  title: "Input/FlourRatioInputSet",
  component: FlourRatioInputSet,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <FlourRatioInputSet {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
