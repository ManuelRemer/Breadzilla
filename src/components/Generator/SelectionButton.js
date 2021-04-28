import { useState } from "react";
import "./SelectionButton.css";
export default function SelectionButton({ name }) {
  const [status, setStatus] = useState("unselected");

  function handleSelectionButton() {
    if (status === "unselected") {
      setStatus("selected");
    } else {
      setStatus("unselected");
    }
  }

  return (
    <button type="button" className={status} onClick={handleSelectionButton}>
      {name}
    </button>
  );
}
