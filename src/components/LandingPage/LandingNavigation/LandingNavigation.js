import "./LandingNavigation.css";
import Button from "../../Buttons/Button";

export default function LandingNavigation({ labels, size, route }) {
  return (
    <nav className="landing-nav">
      {labels.map((label) => (
        <Button
          label={label}
          size={size}
          route={label === labels[0] ? route[0] : route[1]}
          navigation="true"
        />
      ))}
    </nav>
  );
}
