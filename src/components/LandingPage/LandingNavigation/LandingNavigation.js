import "./LandingNavigation.css";
import NavButton from "../../Buttons/NavButtons/NavButton";
import { useHistory } from "react-router-dom";

export default function LandingNavigation({ labels, size, routes }) {
  let history = useHistory();
  function handleRoute(x) {
    history.push(`${x}`);
  }

  return (
    <nav className="landing-nav">
      {labels.map((label) => (
        <NavButton
          label={label}
          labels={labels}
          key={label}
          size={size}
          route={label === labels[0] ? routes[0] : routes[1]}
          navigation="true"
          onClick={handleRoute}
        />
      ))}
    </nav>
  );
}
