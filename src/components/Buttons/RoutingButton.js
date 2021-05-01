import "./RoutingButton.css";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
export default function RoutingButton({ navigation, label, route, size }) {
  const mode = navigation ? "routing-button" : "select-button";

  let history = useHistory();
  function handleClick() {
    history.push(`${route}`);
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className={["button", `button--${size}`, mode].join(" ")}
    >
      {label}
    </button>
  );
}

RoutingButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  navigation: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "large", "xlarge"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

RoutingButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "large",
  onClick: undefined,
};
