import "./FlourRatio.css";
import { Link } from "react-scroll";
import FlourRatioTextBox from "../../StaticTextBoxes/GeneratorPage/FlourRatio/FlourRatioTextBox";
import NavButton from "../../Buttons/NavButtons/NavButton";
import FlourRatioInputSet from "./FlourRatioInputSet/FlourRatioInputSet";
export default function FlourRatio({ flours, onRatioInput }) {
  return (
    <div className="generator-ratio" id="ratio">
      <div className="generator-ratio-textbox">
        <FlourRatioTextBox />
      </div>

      <div className="generator-ratio-inputset">
        <FlourRatioInputSet flours={flours} onRatioInput={onRatioInput} />
      </div>
      <div className="generator-ratio-next">
        <Link
          className="generator-select-scroll"
          to="ingredients"
          smooth={true}
        >
          <NavButton label="i" size="small" />
        </Link>
      </div>
    </div>
  );
}
