
import { CustomHeader } from "../../component/CustomHeader/CustomHeader";
import { NavButton } from "../../component/NavButton";
import { Gallery } from "../../component/Gallery";

// import "./styles.scss";

export const Hobby = () => {
  return (
    <div className="hobby-main">
      <CustomHeader label={"Hobby page"} />
      <NavButton label="Home" />
      <NavButton label="Gdynia" />
    </div>
  );
};
