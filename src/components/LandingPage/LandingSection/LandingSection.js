import LandingBreadSrc from "../../../images/LandingBread.jpg";
import { useHistory } from "react-router-dom";
import Headline from "../../StaticTextBoxes/LandingPage/Headline/Headline";
import Welcome from "../../StaticTextBoxes/LandingPage/Welcome/Welcome";
import NavButton from "../../Buttons/NavButtons/NavButton";
import ScrollButton from "../../Buttons/NavButtons/NavButton";
import { Link } from "react-scroll";
import "./LandingSection.css";
export default function LandingSection({ savedRecipes }) {
  let history = useHistory();
  function handleRoute(x) {
    history.push(`${x}`);
  }
  console.log(savedRecipes);

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
        <NavButton
          label="Bread Generator"
          size="xlarge"
          route="/Generator"
          onClick={handleRoute}
          action="route"
        />
        {savedRecipes.length !== 0 && (
          <Link to="Collection" smooth={true}>
            <ScrollButton label="Browse yor recipes" size="xlarge" />
          </Link>
        )}
      </div>
    </div>
  );
}
