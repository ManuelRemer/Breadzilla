import "./LandingPage.css";

import RoutingButton from "../RoutingButton";
import LandingBreadSrc from "../../images/LandingBread.jpg";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1 className="landing-header-h1">Breadzilla</h1>
      </header>
      <img
        alt="crispy fresh bread"
        src={LandingBreadSrc}
        className="landing-image"
      />
      <div className="landing-rest">
        <div className="landing-text">
          <p>Design your own</p>
          <p className="landing-text-highlight">Bread</p>
          <p>with the ingredients</p> <p>you want</p>
        </div>
        <nav className="landing-nav">
          <RoutingButton
            name="Bread Generator"
            route="/generator"
            look="standard-button"
          />
          <RoutingButton
            name="Browse your recipes"
            route="/collection"
            look="standard-button"
          />
        </nav>
      </div>
    </div>
  );
}
