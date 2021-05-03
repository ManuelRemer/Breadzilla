import SaveRecipe from "./SaveRecipe";

export default {
  title: "Pages/SaveRecipe",
  component: SaveRecipe,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <SaveRecipe {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
