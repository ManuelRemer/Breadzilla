import FlourSelection from "./FlourSelection";
import StandardButton from "../StandardButton";
import "./FlourSelection.css";

export default function Generator() {
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
        <FlourSelection />
      </div>
      <footer className="generator-select-footer">
        <StandardButton name="%" look="button-round" />
      </footer>
    </div>
  );
}
