import NameRecipeInput from "./NameRecipeInput";

export default {
  title: "Input/NameRecipeInput",
  component: NameRecipeInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <NameRecipeInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
