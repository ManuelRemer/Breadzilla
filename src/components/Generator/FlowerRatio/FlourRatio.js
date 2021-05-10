import "./FlourRatio.css";
import { Link } from "react-scroll";
import FlourRatioTextBox from "../../StaticTextBoxes/GeneratorPage/FlourRatio/FlourRatioTextBox";
import NavButton from "../../Buttons/NavButtons/NavButton";
import FlourRatioInputSet from "./FlourRatioInputSet/FlourRatioInputSet";
export default function FlourRatio({ flours, onRatioInput }) {
  const sumFlourRatio = flours.reduce((a, b) => ({
    ratioValue: a.ratioValue + b.ratioValue,
  }));

  function over100() {
    const selectedFlours = flours.filter((flour) => flour.status === true);
    console.log(selectedFlours);
    if (selectedFlours.length !== 1) {
      if (sumFlourRatio.ratioValue > 100) {
        return <p>You've added to much</p>;
      } else if (sumFlourRatio.ratioValue < 100) {
        return <p>{100 - sumFlourRatio.ratioValue}% still missing</p>;
      }
    } else {
      return (
        <p className="generator-ratio--note-pure">
          Ah! You are a purist, so then only&nbsp;
          {selectedFlours.map((flour) => {
            return flour.name;
          })}
          .
        </p>
      );
    }
  }

  return (
    <div className="generator-ratio" id="ratio">
      <div className="generator-ratio-textbox">
        <FlourRatioTextBox />
      </div>

      <div className="generator-ratio-inputset">
        <FlourRatioInputSet flours={flours} onRatioInput={onRatioInput} />
        <div className="generator-ratio-inputset__note">{over100()}</div>
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
