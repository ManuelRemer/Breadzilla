import LandingBreadSrc from "../../../images/LandingBread.jpg";
import LandingNavigation from "../LandingNavigation/LandingNavigation";
import Headline from "../../StaticTextBoxes/LandingPage/Headline/Headline";
import Welcome from "../../StaticTextBoxes/LandingPage/Welcome/Welcome";
import "./LandingSection.css";
export default function LandingSection() {
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

        <LandingNavigation
          labels={["Bread generator", "Browse your recipes"]}
          size="xlarge"
          routes={["/generator", "/collection"]}
          action="route"
        />
      </div>
    </div>
  );
}
