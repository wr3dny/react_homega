import { useState } from "react";
import "./styles.css";

export const ButtonMode = () => {
  const [mode, setMode] = useState<string>("day");

  const toggleMode = () => {
    if (mode === "day") {
      setMode("night");
    } else {
      setMode("day");
    }
  };

  return (
    <div className={`${mode}`}>
      <button onClick={toggleMode}>{mode}</button>
    </div>
  );
};
