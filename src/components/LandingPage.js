import "./LandingPage.css";
import LandingBread from "../images/LandingBread.jpg";
export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1 className="leanding-header-h1">Breadzilla</h1>
      </header>
      <img alt="crispy fresh bread" src={LandingBread} />
      <p>Create your own Bread with the ingrediants you want</p>
      <nav className="LandingNav">
        <button>Bread generator</button>
        <button>Browse your recipes</button>
      </nav>
    </div>
  );
}
