import "./LandingPage.css";
import LandingBread from "../images/LandingBread.jpg";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1 className="landing-header-h1">Breadzilla</h1>
      </header>
      <img
        alt="crispy fresh bread"
        src={LandingBread}
        className="landing-image"
      />
      <div className="landing-text">
        <p>Design your own</p>
        <p className="landing-text-highlight">Bread</p>
        <p>with the ingrediants</p> <p>you want</p>
      </div>
      <nav className="LandingNav">
        <button>Bread generator</button>
        <button>Browse your recipes</button>
      </nav>
    </div>
  );
}
