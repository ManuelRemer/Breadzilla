import "./FlourRatio.css";
import { Link } from "react-scroll";
import FlourRatioTextBox from "../../StaticTextBoxes/GeneratorPage/FlourRatio/FlourRatioTextBox";
import NavButton from "../../Buttons/NavButtons/NavButton";
import FlourRatioInputSet from "./FlourRatioInputSet/FlourRatioInputSet";

export default function FlourRatio({
  flours,
  onRatioInput,
  sumFlourRatio,
  totalRatioRyes,
}) {
  const selectedFlours = flours.filter((flour) => flour.status === true);
  function renderToMuchRye() {
    if (totalRatioRyes.ratioValue > 20) {
      return <p>Not more then 20% rye flours!</p>;
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
    if (sumFlourRatio > 100) {
      return <p>You've added to much!</p>;
    } else if (sumFlourRatio < 100) {
      return <p>{100 - sumFlourRatio}% still missing</p>;
    }
  }

  function renderScrollButtonIngredients() {
    if (sumFlourRatio === 100 && totalRatioRyes.ratioValue <= 20)
      return (
        <Link
          className="generator-select-scroll"
          to="ingredients"
          smooth={true}
        >
          <NavButton label="i" size="small" />
        </Link>
      );
  }

  return (
    <div className="generator-ratio" id="ratio">
      <div className="generator-ratio-textbox">
        <FlourRatioTextBox />
      </div>

      <div className="generator-ratio-inputset">
        <FlourRatioInputSet
          flours={flours}
          onRatioInput={onRatioInput}
          totalRatioRyes={totalRatioRyes}
        />
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
