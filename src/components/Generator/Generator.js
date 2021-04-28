import FlourSelection from "./FlourSelection";

export default function Generator() {
  return (
    <div className="generator">
      <header>
        <h1>
          Which<p>Flours</p>do you want to use?
          <FlourSelection />
        </h1>
      </header>
    </div>
  );
}
