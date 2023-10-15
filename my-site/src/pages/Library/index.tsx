import { useState } from "react";
import { CopyButton } from "../../component/CopyButton";

export const Library = () => {
  const [message, setMessage] = useState<string>("");

  const handleMessage = () => {
    setMessage("Copied!");
  };

  const handleCopy = (message: string) => {
    navigator.clipboard.writeText(message);
  };

  const handleClick = () => {
    handleCopy(message);
    handleMessage();
    alert(message);
  };

  return (
    <div className="library">
      <div>table of owned books</div>
      <CopyButton onClick={handleClick} />
    </div>
  );
};
