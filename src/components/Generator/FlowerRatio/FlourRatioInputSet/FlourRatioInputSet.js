import FlourRatioInput from "../FlourRatioInput/FlourRatioInput";
import "./FlourRatioInputSet.css";

export default function FlourRatioInputSet({ flours, onRatioInput }) {
  const selectedFlours = flours.filter((flour) => flour.status === true);

  if (selectedFlours.length !== 0) {
    const selection = selectedFlours.map((flour) => (
      <div className="test">
        <FlourRatioInput
          label={flour.name}
          key={flour.name}
          size={selectedFlours.length > 3 ? "small" : "large"}
          ratioValue={flour.ratioValue}
          onRatioInput={onRatioInput}
        />
      </div>
    ));
    return selection;
  } else {
    return (
      <div>
        <p className="error">
          There is no bread without flour.{" "}
          <span className="error-highlight">Choose</span> at least one type of
          <span className="error-highlight">&nbsp;flour!</span>
        </p>
      </div>
    );
  }
}
