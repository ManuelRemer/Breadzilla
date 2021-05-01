import Headline from "./Headline";
import PropTypes from "prop-types";

export default {
  title: "TextBoxes/Headline",
  component: Headline,
};

const Template = (args) => <Headline {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Breadzilla",
};

Headline.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),

  label: PropTypes.string.isRequired,
};

Headline.defaultProps = {
  label: "Breadzilla",
  size: "medium",
};
