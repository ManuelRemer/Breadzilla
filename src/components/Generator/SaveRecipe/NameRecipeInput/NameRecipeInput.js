import "./NameRecipeInput.css";

export default function NameRecipeInput() {
  return (
    <input
      type="text"
      placeholder="Name your recipe"
      className="name-recipe-input"
      maxLength="30"
    ></input>
  );
}
