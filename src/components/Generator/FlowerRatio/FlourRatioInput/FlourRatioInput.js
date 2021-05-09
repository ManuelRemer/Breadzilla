import "./FlourRatioInput.css";
export default function FlourRatioInput({
  label,
  size,
  ratioValue,
  onRatioInput,
}) {
  function handleRatioInput(event) {
    const value = Number(event.target.value);

    onRatioInput(label, value);
  }

  return (
    <div className="flour-ratio-input">
      <label className={`flour-ratio-input--label-${size}`}>{label}</label>
      <div className="flex">
        <input
          type="text"
          maxLength="3"
          className={[
            "flour-ratio-input--input",
            `flour-ratio-input--input-${size}`,
          ].join(" ")}
          text-align="right"
          value={ratioValue}
          onChange={handleRatioInput}
        ></input>
        <span className={`flour-ratio-input--span-${size}`}>%</span>
      </div>
    </div>
  );
}
