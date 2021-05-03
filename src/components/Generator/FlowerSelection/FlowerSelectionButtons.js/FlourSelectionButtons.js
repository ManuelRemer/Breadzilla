import SelectButton from "../../../Buttons/SelectButton/SelectButton";
export default function FlourSelectionButtons({ onClick, flours }) {
  let selection = flours.map((flour) => (
    <SelectButton
      label={flour.name}
      key={flour.name}
      onClick={onClick}
      style={flour.status ? "selected" : "unselected"}
      size="xlarge"
    />
  ));
  return selection;
}
