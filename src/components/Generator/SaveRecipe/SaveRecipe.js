import "./SaveRecipe.css";
import SaveRecipeTextBox from "../../StaticTextBoxes/GeneratorPage/SaveRecipe/SaveRecipeTextBox";
import RoutingButton from "../../Buttons/RoutingButton";
import NameRecipeInput from "./NameRecipeInput/NameRecipeInput";
export default function SaveRecipe() {
  return (
    <div className="save-recipe">
      <div className="save-recipe-name">
        <SaveRecipeTextBox />
        <NameRecipeInput />
      </div>
      <section className="save-recipe-ingredients">
        <h3>All you need is:</h3>
        <p>420 g wholemeal wheat flour</p>
        <p>180 g wholemeal Spelt flour</p>
        <p>525 g water</p>
        <p>15 g lemon juice</p>
        <p>0.4 g yeast</p>
      </section>
      <div className="save-recipe--buttons">
        <RoutingButton size="xlarge" label="lets bake" />
        <RoutingButton size="xlarge" label="save" />
      </div>
    </div>
  );
}
