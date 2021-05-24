import useFlours from "../../CustomHooks/useFlours";
export default function AlertMessages() {
  const { sumFlourRatio, totalRatioRyes } = useFlours;

  function renderToMuchRye() {
    if (totalRatioRyes.ratioValue > 20) {
      return (
        <p>More then 20% rye flours? You need to bake with sour dough then.</p>
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
  return (
    <section>
      {" "}
      <div className="generator-ratio-inputset__note">{renderToMuchRye()}</div>
      <div className="generator-ratio-inputset__note">{renderNot100()}</div>
    </section>
  );
}
