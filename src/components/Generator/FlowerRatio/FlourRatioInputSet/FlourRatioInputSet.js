import FlourRatioInput from "../FlourRatioInput/FlourRatioInput";
import "./FlourRatioInputSet.css";

export default function FlourRatioInputSet({ flours }) {
  const selectedFlours = flours.filter((flour) => flour.status === true);
  let selection = selectedFlours.map((flour) => (
    <div className="test">
      <FlourRatioInput label={flour.name} />
    </div>
  ));
  return selection;
}
