import LandingBreadSrc from "../../../images/LandingBread.jpg";
import { useHistory } from "react-router-dom";
import Headline from "../../StaticTextBoxes/LandingPage/Headline/Headline";
import Welcome from "../../StaticTextBoxes/LandingPage/Welcome/Welcome";
import NavButton from "../../Buttons/NavButtons/NavButton";
import ScrollButton from "../../Buttons/NavButtons/NavButton";
import "./LandingSection.css";
export default function LandingSection() {
  let history = useHistory();
  function handleRoute(x) {
    history.push(`${x}`);
  }

  return (
    <div className="landing-page">
      <Headline className="landing-headline" />
      <img
        alt="crispy fresh bread"
        src={LandingBreadSrc}
        className="landing-image"
      />
      <div className="landing-rest">
        <Welcome />
        <NavButton
          label="Bread Generator"
          size="xlarge"
          route="/Generator"
          onClick={handleRoute}
          action="route"
        />
        <ScrollButton label="Browse yor recipes" size="xlarge" />
        {/* <LandingNavigation
          labels={["Bread generator", "Browse your recipes"]}
          size="xlarge"
          routes={["/generator", "/collection"]}
          action="route"
        /> */}
      </div>
    </div>
  );
}
