import "./Button.css";
import PropTypes from "prop-types";
//import { useHistory } from "react-router-dom";
export default function Button({
  onSelect,
  navigation,
  label,
  route,
  size,
  style,
}) {
  const mode = navigation ? "routing-button" : `select-button-${style}`;
  function handleSelectButton(event) {
    onSelect(event.target.label);
  }

  // let history = useHistory();
  // function handleClick() {
  //   history.push(`${route}`);
  //}
  return (
    <button
      type="button"
      onClick={handleSelectButton}
      className={["button", `button--${size}`, mode].join(" ")}
      route={route}
      label={label}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
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

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "large",
  onClick: undefined,
};
