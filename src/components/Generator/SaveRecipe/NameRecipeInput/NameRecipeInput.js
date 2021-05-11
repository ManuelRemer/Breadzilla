import "./NameRecipeInput.css";

export default function NameRecipeInput({ onChange }) {
  function handleChange(event) {
    const name = event.target.value;

    onChange(name);
  }

  return (
    <input
      type="text"
      placeholder="Name your recipe"
      className="name-recipe-input"
      maxLength="30"
      onChange={handleChange}
    ></input>
  );
}
