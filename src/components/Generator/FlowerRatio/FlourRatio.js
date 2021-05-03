// import ScrollButton from "../ScrollButton";
import "./FlourRatio.css";
import FlourRatioTextBox from "../../StaticTextBoxes/GeneratorPage/FlourRatio/FlourRatioTextBox";
import NavButton from "../../Buttons/NavButtons/NavButton";
import FlourRatioInputSet from "./FlourRatioInputSet/FlourRatioInputSet";
export default function FlourRatio({ flours, scrollRef }) {
  return (
    <div className="generator-ratio">
      <div className="generator-ratio-textbox" id="ratio">
        <FlourRatioTextBox />
      </div>
      <div className="generator-ratio-inputset">
        <FlourRatioInputSet flours={flours} />
      </div>
      <div className="generator-ratio-next">
        <NavButton label="i" size="small" />
      </div>
    </div>
  );
}
