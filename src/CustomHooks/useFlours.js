import { useState } from "react";
import { flourRatioReducer } from "../components/Generator/libGenerator";

export default function useFlours() {
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
  const sumFlourRatio = flours.reduce((a, b) => ({
    ratioValue: a.ratioValue + b.ratioValue,
  }));
  const ryes = flours.filter((flour) => flour.name.includes("Rye"));
  const totalRatioRyes = ryes.reduce(flourRatioReducer, { ratioValue: 0 });
  const selectedFlours = flours.filter((flour) => flour.status === true);

  function handleSelectButton(name) {
    const selectedFlours = flours.filter((flour) => flour.status === true);
    if (selectedFlours.length === 0) {
      const updateFlours = flours.map((flour) =>
        flour.name === name
          ? {
              ...flour,
              status: !flour.status,

              ratioLiquids: 600 * flour.absorption,
              ratioYeast: 600 * flour.yeast,
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

  function clearGenerator() {
    setFlours(initialFlours);
  }

  return {
    handleRatioInput,
    handleSelectButton,
    sumFlourRatio,
    totalRatioRyes,
    flours,
    selectedFlours,
    clearGenerator,
  };
}
