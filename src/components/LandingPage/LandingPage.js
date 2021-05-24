import LandingSection from "./LandingSection/LandingSection";
import Collection from "./Collection/Collection";
import CollectionImg from "../../images/Collection.jpg";
import BrotHände from "../../images/BrotHände.jpg";
import "./LandingPage.css";

export default function LandingPage({ savedRecipes }) {
  function renderCollection() {
    if (savedRecipes.length !== 0)
      return (
        <div className="LandingPage_Scrolled">
          <img
            alt="different Breads"
            src={CollectionImg}
            className="ScrollImage"
          />
          <div className="LandingPage_Collection">
            <Collection savedRecipes={savedRecipes} />
          </div>
          <img
            alt="different Breads"
            src={BrotHände}
            className="ScrollImage2"
          />
        </div>
      );
  }

  return (
    <div
      className={
        savedRecipes.length !== 0 ? "LandingPage" : "LandingPage__Short"
      }
    >
      <div className="LandingPage_LandingSection">
        <LandingSection savedRecipes={savedRecipes} />
      </div>
      {renderCollection()}
    </div>
  );
}
