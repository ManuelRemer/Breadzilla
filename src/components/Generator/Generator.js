import FlourSelection from "../Generator/FlowerSelection/FlourSelection";
import FlourRatio from "../Generator/FlowerRatio/FlourRatio";
import SaveRecipe from "./SaveRecipe/SaveRecipe";
import LandingBreadSrc from "../../images/LandingBread.jpg";
import { useState } from "react";

export default function Generator() {
  const initialFlours = [
    { name: "Wheat Flour 550", status: false, ratioValue: 0, absorption: 0.65 },
    {
      name: "Wholemeal Wheat Flour",
      status: false,
      ratioValue: 0,
      absorption: 0.7,
    },
    { name: "Spelt Flour 630", status: false, ratioValue: 0, absorption: 0.65 },
    {
      name: "Wholemeal Spelt Flour",
      status: false,
      ratioValue: 0,
      absorption: 0.7,
    },
    { name: "Rye Flour 1150", status: false, ratioValue: 0, absorption: 0.92 },
    {
      name: "Wholemeal Rye Flour",
      status: false,
      ratioValue: 0,
      absorption: 1,
    },
  ];
  const [flours, setFlours] = useState(initialFlours);

  function handleSelectButton(name) {
    const updateFlours = flours.map((flour) =>
      flour.name === name
        ? { ...flour, status: !flour.status, ratioValue: 0 }
        : flour
    );

    setFlours(updateFlours);
    console.log(flours);
  }

  function handleRatioInput(label, value) {
    console.log(flours);
    const updateFlours = flours.map((flour) =>
      flour.name === label
        ? {
            ...flour,
            ratioValue: value,
            ratioLiquids: flour.ratioValue * 6 * flour.absorption,
          }
        : flour
    );

    setFlours(updateFlours);
  }

  return (
    <div>
      <FlourSelection onClick={handleSelectButton} flours={flours} />
      <img
        alt="crispy fresh bread"
        src={LandingBreadSrc}
        className="landing-image"
      />
      <FlourRatio flours={flours} onRatioInput={handleRatioInput} />
      <img
        alt="crispy fresh bread"
        src={LandingBreadSrc}
        className="landing-image"
      />
      <SaveRecipe flours={flours} />
    </div>
  );
}
