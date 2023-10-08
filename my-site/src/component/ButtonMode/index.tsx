import { useState } from "react";
import "./styles.css";

interface Props {
  onClick: () => void;
}

export const ButtonMode = ({ onClick }: Props) => {
  return (
    <div className="mode-button">
      <button onClick={onClick}></button>
    </div>
  );
};
