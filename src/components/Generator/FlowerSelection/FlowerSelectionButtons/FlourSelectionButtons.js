import { useContext } from "react";
import FloursContext from "../../../../CustomHooks/FloursContext";
import SelectButton from "../../../Buttons/SelectButton/SelectButton";
export default function FlourSelectionButtons() {
  const { handleSelectButton, flours } = useContext(FloursContext);

  let selection = flours.map((flour) => (
    <SelectButton
      label={flour.name}
      key={flour.name}
      onClick={handleSelectButton}
      style={flour.status ? "selected" : "unselected"}
      size="xlarge"
      action="none"
    />
  ));
  return selection;
}
