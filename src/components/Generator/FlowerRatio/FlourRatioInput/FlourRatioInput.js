import "./FlourRatioInput.css";
export default function FlourRatioInput({
  label,

  size,
  ratioValue,
  onRatioInput,
}) {
  function handleRatioInput(event) {
    let value = event.target.value;

    onRatioInput(label, value);
  }

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
          key={label}
          text-align="right"
          value={ratioValue}
          onChange={handleRatioInput}
        ></input>
        <span className="flour-ratio-input--span">%</span>
      </div>
    </div>
  );
}
