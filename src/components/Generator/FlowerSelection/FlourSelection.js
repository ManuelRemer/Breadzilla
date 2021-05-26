import FlourSelectionButtons from "./FlowerSelectionButtons/FlourSelectionButtons";
import FlourSelectionTextBox from "../../StaticTextBoxes/GeneratorPage/FlourSelection/FlourSelectionTextBox";
import ScrollButton from "../../Buttons/NavButtons/ScrollButton";
import "./FlourSelection.css";
import { Link } from "react-scroll";

export default function FlourSelection() {
  return (
    <div className="generator-select">
      <FlourSelectionTextBox />
      <div className="generator-select-selection">
        <FlourSelectionButtons />
      </div>

      <Link className="generator-select-scroll" to="ratio" smooth={true}>
        <ScrollButton label="%" size="small" />
      </Link>
    </div>
  );
}
