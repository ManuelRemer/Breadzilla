import FlourSelectionButtons from "./FlowerSelectionButtons.js/FlourSelectionButtons";
import FlourSelectionTextBox from "../../StaticTextBoxes/GeneratorPage/FlourSelection/FlourSelectionTextBox";
// import ScrollButton from "../ScrollButton";
import "./FlourSelection.css";
export default function FlourSelection() {
  return (
    <div className="generator-select">
      <FlourSelectionTextBox />
      <div className="generator-select-selection">
        <FlourSelectionButtons />
      </div>

      <nav className="generator-select-scroll">
        {/* <ScrollButton name="%" look="scrollbutton" /> */}
      </nav>
    </div>
  );
}
