import LandingNavigation from "./LandingNavigation";

export default {
  title: "Navigation/LandingNavigation",
  component: LandingNavigation,
};

const Template = (args) => <LandingNavigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  labels: ["Bread generator", "Browse your recipes"],
  size: "xlarge",
  route: ["/collection", "/generator"],
};
