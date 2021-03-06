import "./FlourRatio.css";
import { Link } from "react-scroll";
import FlourRatioTextBox from "../../StaticTextBoxes/GeneratorPage/FlourRatio/FlourRatioTextBox";
import ScrollButton from "../../Buttons/NavButtons/ScrollButton";
import FlourRatioInputSet from "./FlourRatioInputSet/FlourRatioInputSet";
import { useContext } from "react";
import FloursContext from "../../../CustomHooks/FloursContext";

export default function FlourRatio({ onRatioInput }) {
  const { sumFlourRatio, totalRatioRyes, flours, selectedFlours } = useContext(
    FloursContext
  );

  function renderToMuchRye() {
    if (totalRatioRyes.ratioValue > 20) {
      return (
        <p>More then 20% rye flours? You need to bake with sour dough then.</p>
      );
    }
  }
  function renderPurist() {
    if (selectedFlours.length === 1) {
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
  function renderNot100() {
    if (sumFlourRatio.ratioValue > 100) {
      return <p>You've added to much!</p>;
    } else if (sumFlourRatio.ratioValue < 100) {
      return <p>{100 - sumFlourRatio.ratioValue}% still missing</p>;
    }
  }

  function renderScrollButtonIngredients() {
    if (sumFlourRatio.ratioValue === 100 && totalRatioRyes.ratioValue <= 20)
      return (
        <Link
          className="generator-select-scroll"
          to="ingredients"
          smooth={true}
        >
          <ScrollButton label="i" size="small" />
        </Link>
      );
  }

  return (
    <div className="generator-ratio" id="ratio">
      <div className="generator-ratio-textbox">
        <FlourRatioTextBox />
      </div>

      <div className="generator-ratio-inputset">
        <FlourRatioInputSet flours={flours} onRatioInput={onRatioInput} />
        {renderPurist()}
      </div>
      <div className="generator-ratio-next">
        <div className="generator-ratio-inputset__note">
          {renderToMuchRye()}
        </div>
        <div className="generator-ratio-inputset__note">{renderNot100()}</div>
        {renderScrollButtonIngredients()}
      </div>
    </div>
  );
}
