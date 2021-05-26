import "./NavButton.css";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import handleRoute from "../../../services/handleRoute";
export default function NavButton({ label, route, size }) {
  let history = useHistory();
  function handleClick(event) {
    event.preventDefault();
    handleRoute(history, route);
  }

  return (
    <button
      type="button"
      className={["button", `button--${size}`, "routing-button"].join(" ")}
      route={route}
      label={label}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

NavButton.propTypes = {
  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(["small", "large", "xlarge"]),

  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

NavButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "large",
  onClick: undefined,
};
