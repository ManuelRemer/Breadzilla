import "./FlourRatioInput.css";
export default function FlourRatioInput({ label }) {
  return (
    <div className="flour-ratio-input">
      <label className="flour-ratio-input--label">{label}</label>
      <div className="flex">
        <input type="text" className="flour-ratio-input--input"></input>
        <span className="flour-ratio-input--span">%</span>
      </div>
    </div>
  );
}
