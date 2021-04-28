import SelectionButton from "./SelectionButton";
// import { useState } from "react";

let flours = [
  { name: "Wheat Flour 550", style: "unselected" },
  { name: "Wholemeal Wheat Flour", style: "unselected" },
  { name: "Wheat Spelt 550", style: "unselected" },
  { name: "Wholemeal Spelt Flour", style: "unselected" },
  { name: "Rye Flour 1150", style: "unselected" },
  { name: "Wholemeal Rye Flour", style: "unselected" },
];

export default function FlourSelection() {
  let selection = flours.map((flour) => (
    <SelectionButton name={flour.name} key={flour.name} />
  ));
  return selection;
}
