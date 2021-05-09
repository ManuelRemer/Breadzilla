import FlourSelection from "../Generator/FlowerSelection/FlourSelection";
import FlourRatio from "../Generator/FlowerRatio/FlourRatio";
import SaveRecipe from "./SaveRecipe/SaveRecipe";
import LandingBreadSrc from "../../images/LandingBread.jpg";
import { useState } from "react";

export default function Generator() {
  const initialFlours = [
    {
      name: "Wheat Flour 550",
      status: false,
      ratioValue: 0,
      absorption: 0.65,
      yeast: 0.008333,
    },
    {
      name: "Wholemeal Wheat Flour",
      status: false,
      ratioValue: 0,
      absorption: 0.7,
      yeast: 0.005,
    },
    {
      name: "Spelt Flour 630",
      status: false,
      ratioValue: 0,
      absorption: 0.65,
      yeast: 0.005,
    },
    {
      name: "Wholemeal Spelt Flour",
      status: false,
      ratioValue: 0,
      absorption: 0.7,
      yeast: 0.005,
    },
    {
      name: "Rye Flour 1150",
      status: false,
      ratioValue: 0,
      absorption: 0.92,
      yeast: 0.008333,
    },
    {
      name: "Wholemeal Rye Flour",
      status: false,
      ratioValue: 0,
      absorption: 1,
      yeast: 0.005,
    },
  ];
  const [flours, setFlours] = useState(initialFlours);

  function handleSelectButton(name) {
    const selectedFlours = flours.filter((flour) => flour.status === true);
    if (selectedFlours.length + 1 === 1) {
      const updateFlours = flours.map((flour) =>
        flour.name === name
          ? {
              ...flour,
              status: !flour.status,
              ratioValue: 100,
              ratioLiquids: 100 * 6 * flour.absorption,
              ratioYeast: 100 * 6 * flour.yeast,
            }
          : flour
      );

      setFlours(updateFlours);
    } else {
      const updateFlours = flours.map((flour) =>
        flour.name === name
          ? { ...flour, status: !flour.status, ratioValue: 0 }
          : flour
      );

      setFlours(updateFlours);
    }
  }

  function handleRatioInput(label, value) {
    if (!isNaN(value)) {
      const updateFlours = flours.map((flour) =>
        flour.name === label
          ? {
              ...flour,
              ratioValue: value,
              ratioLiquids: value * 6 * flour.absorption,
              ratioYeast: value * 6 * flour.yeast,
            }
          : flour
      );

      setFlours(updateFlours);
    } else {
      const updateFlours = flours.map((flour) =>
        flour.name === label
          ? {
              ...flour,
              ratioValue: 0,
              ratioLiquids: value * 6 * flour.absorption,
              ratioYeast: value * 6 * flour.yeast,
            }
          : flour
      );

      setFlours(updateFlours);
    }
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
