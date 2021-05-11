import LandingSection from "./LandingSection/LandingSection";
import Collection from "./Collection/Collection";

export default function LandingPage({ savedRecipes }) {
  return (
    <div>
      <LandingSection />
      <Collection savedRecipes={savedRecipes} />
    </div>
  );
}
