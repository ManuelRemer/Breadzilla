import FlourSelection from "../Generator/FlowerSelection/FlourSelection";
import FlourRatio from "../Generator/FlowerRatio/FlourRatio";
import { useState } from "react";

export default function Generator() {
  const initialFlours = [
    { name: "Wheat Flour 550", status: false },
    { name: "Wholemeal Wheat Flour", status: false },
    { name: "Wheat Spelt 550", status: false },
    { name: "Wholemeal Spelt Flour", status: false },
    { name: "Rye Flour 1150", status: false },
    { name: "Wholemeal Rye Flour", status: false },
  ];
  const [flours, setFlours] = useState(initialFlours);

  function handleSelectButton(name) {
    const updateFlours = flours.map((flour) =>
      flour.name === name ? { ...flour, status: !flour.status } : flour
    );

    setFlours(updateFlours);
  }
  return (
    <div>
      <FlourSelection onClick={handleSelectButton} flours={flours} />
      <FlourRatio flours={flours} />
    </div>
  );
}
