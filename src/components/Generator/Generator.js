import FlourSelection from "../Generator/FlowerSelection/FlourSelection";
import FlourRatio from "../Generator/FlowerRatio/FlourRatio";
import SaveRecipe from "./SaveRecipe/SaveRecipe";
import BrotImTopf from "../../images/BrotimTopf.jpg";
import Mehl from "../../images/mehl2.jpg";
import "./Generator.css";
import FloursContext from "../../CustomHooks/FloursContext";
import { useContext } from "react";

export default function Generator({ onSaveUpdateSavedRecipes, savedRecipes }) {
  const { sumFlourRatio, totalRatioRyes, flours } = useContext(FloursContext);

  return (
    <div className="Generator">
      <div className="Generator_FlourSelection">
        <FlourSelection />
      </div>
      <img alt="crispy fresh bread" src={Mehl} className="Generator_Image1" />
      <div className="Generator_FlourRatio">
        <FlourRatio />
      </div>
      <img
        alt="crispy fresh bread"
        src={BrotImTopf}
        className="Generator_Image2"
      />
      {sumFlourRatio.ratioValue === 100 && totalRatioRyes.ratioValue <= 20 && (
        <div className="Generator_SaveRecipe">
          <SaveRecipe
            flours={flours}
            sumFlourRatio={sumFlourRatio.ratioValue}
            totalRatioRyes={totalRatioRyes}
            onSaveUpdateSavedRecipes={onSaveUpdateSavedRecipes}
            savedRecipes={savedRecipes}
          />
        </div>
      )}
    </div>
  );
}
