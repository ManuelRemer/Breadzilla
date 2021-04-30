import FlourSelectionButtons from "./FlourSelectionButtons";
import ScrollButton from "../ScrollButton";
import "./FlourSelection.css";
export default function FlourSelection() {
  return (
    <div className="generator-select">
      <header className="generator-select-header">
        <h1 className="generator-select-header-headline">
          <p>
            Which
            <span className="generator-select-header-headline-highlight">
              {" "}
              Flours{" "}
            </span>
          </p>
          <p>do you want to use?</p>
        </h1>{" "}
      </header>
      <div className="generator-select-selection">
        <FlourSelectionButtons />
      </div>

      <nav className="generator-select-scroll">
        <ScrollButton name="%" look="scrollbutton" />
      </nav>
    </div>
  );
}
