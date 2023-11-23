import { Link } from "react-router-dom";
import { CustomHeader } from "../../component/CustomHeader/CustomHeader";
import { CurrentTime } from "../../component/CurrenTime";

// import "./styles.scss";

export const Hobby = () => {
  return (
    <div className="hobby-main">
      <CustomHeader label={"Hobby page"} />
      <div>Gallery to be</div>
      <Link to="/">Back to home</Link>
      <CurrentTime />
    </div>
  );
};
