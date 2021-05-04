import "./FlourRatioInput.css";
export default function FlourRatioInput({
  label,
  size,
  ratioValue,
  onRatioInput,
}) {
  function handleRatioInput(event) {
    let value = Number(event.target.value);

    onRatioInput(label, value);
    console.log(value);
  }
  console.log(label, ratioValue);
  return (
    <div className="flour-ratio-input">
      <label className="flour-ratio-input--label">{label}</label>
      <div className="flex">
        <input
          type="text"
          className={[
            "flour-ratio-input--input",
            `flour-ratio-input--input-${size}`,
          ].join(" ")}
          text-align="right"
          value={ratioValue}
          onChange={handleRatioInput}
        ></input>
        <span className="flour-ratio-input--span">%</span>
      </div>
    </div>
  );
}
