import { useState } from "react";
import Button from "../../../Buttons/Button";
export default function FlourSelectionButtons() {
  const initialFlours = [
    { name: "Wheat Flour 550", status: false },
    { name: "Wholemeal Wheat Flour", status: false },
    { name: "Wheat Spelt 550", status: false },
    { name: "Wholemeal Spelt Flour", status: false },
    { name: "Rye Flour 1150", status: false },
    { name: "Wholemeal Rye Flour", status: false },
  ];
  const [flours, setFlours] = useState(initialFlours);

  console.log(flours);

  function handleSelectButton(name) {
    const updateFlours = flours.map((flour) =>
      flour.name === name ? { ...flour, status: !flour.status } : flour
    );

    setFlours(updateFlours);
  }

  let selection = flours.map((flour) => (
    <Button
      label={flour.name}
      key={flour.name}
      onSelect={handleSelectButton}
      style={flour.status ? "selected" : "unselected"}
      size="xlarge"
    />
  ));
  return selection;
}
