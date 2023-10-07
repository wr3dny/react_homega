import { Link } from "react-router-dom";
import { ButtonMode } from "../../component/ButtonMode";

export const Hobby = () => {
  return (
    <div className="hobby-main">
      <div>Hobby page</div>
      <ButtonMode />
      <div>
        Gallery to be
      </div>
      <Link to="/">Back to home</Link>
    </div>
  );
};
