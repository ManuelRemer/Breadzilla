import LandingPage from "./LandingPage";

export default {
  title: "Pages/LandingPage",
  component: LandingPage,
};

const Template = (args) => <LandingPage {...args} />;

export const ToGenerator = Template.bind({});
ToGenerator.args = {};
