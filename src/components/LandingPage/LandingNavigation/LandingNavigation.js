import "./LandingNavigation.css";
import RoutingButton from "../../Buttons/RoutingButton";

export default function LandingNavigation({ labels, size, route }) {
  return (
    <nav className="landing-nav">
      {labels.map((label) => (
        <RoutingButton
          label={label}
          size={size}
          route={label === labels[0] ? route[0] : route[1]}
          navigation="true"
        />
      ))}
    </nav>
  );
}
