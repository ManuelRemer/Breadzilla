import ScrollButton from "../ScrollButton";
import "./FlourRatio.css";
export default function FlourRatio() {
  return (
    <div className="generator-ratio">
      <h2 className="generator-ratio-header-headline">
        Fill up to{" "}
        <span className="generator-select-header-ratio-highlight">100%</span>
      </h2>
      <label>Flour</label>
      <input type="number"></input>
      <ScrollButton name="breadify" look="scrollbutton" />
    </div>
  );
}
