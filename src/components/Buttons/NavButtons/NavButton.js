import "./NavButton.css";
import PropTypes from "prop-types";

export default function NavButton({ label, route, size, onClick }) {
  function handleClick(event) {
    event.preventDefault();
    onClick(route);
    console.log(route);
  }

  return (
    <button
      type="button"
      className={["button", `button--${size}`, "routing-button"].join(" ")}
      route={route}
      label={label}
      onClick={size !== "small" ? handleClick : null}
    >
      {label}
    </button>
  );
}

NavButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // navigation: PropTypes.bool,
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

NavButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "large",
  onClick: undefined,
};
