import LandingBreadSrc from "../../../images/LandingBread.jpg";
import Headline from "../../StaticTextBoxes/LandingPage/Headline/Headline";
import Welcome from "../../StaticTextBoxes/LandingPage/Welcome/Welcome";
import NavButton from "../../Buttons/NavButtons/NavButton";
import ScrollButton from "../../Buttons/NavButtons/ScrollButton";
import { Link } from "react-scroll";
import "./LandingSection.css";
export default function LandingSection({ savedRecipes }) {
  return (
    <div className="LandingSection">
      <Headline className="LandingSection_Headline" />
      <img
        alt="crispy fresh bread"
        src={LandingBreadSrc}
        className="LandingSection_Image"
      />
      <div className="LandingSectin_Text">
        <Welcome />
        <nav className="LandingSectin_Nav">
          <NavButton label="Bread Generator" size="xlarge" route="/Generator" />
          {savedRecipes.length !== 0 && (
            <Link to="Collection" smooth={true}>
              <ScrollButton label="Browse yor recipes" size="xlarge" />
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
