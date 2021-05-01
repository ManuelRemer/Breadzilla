import FlourSelectionButtons from "./FlourSelectionButtons";

export default {
  title: "Selection/FlourSelection",
  component: FlourSelectionButtons,
};

const Template = (args) => <FlourSelectionButtons {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
