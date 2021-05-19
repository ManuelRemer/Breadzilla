import LandingSection from "./LandingSection/LandingSection";
import Collection from "./Collection/Collection";
import CollectionImg from "../../images/Collection.jpg";
import BrotHände from "../../images/BrotHände.jpg";
import "./LandingPage.css";

export default function LandingPage({ savedRecipes, onRecipe }) {
  return (
    <div className="LandingPage">
      <div className="LandingPage_LandingSection">
        <LandingSection />
      </div>

      <img alt="different Breads" src={CollectionImg} className="ScrollImage" />
      <div className="LandingPage_Collection">
        <Collection savedRecipes={savedRecipes} onRecipe={onRecipe} />
      </div>
      <img alt="different Breads" src={BrotHände} className="ScrollImage2" />
    </div>
  );
}
