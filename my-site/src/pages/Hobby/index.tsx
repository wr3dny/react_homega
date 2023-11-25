
import { CustomHeader } from "../../component/CustomHeader/CustomHeader";
import { BackToHome } from "../../component/ButtonHome";
import { Gallery } from "../../component/Gallery";

// import "./styles.scss";

export const Hobby = () => {
  return (
    <div className="hobby-main">
      <CustomHeader label={"Hobby page"} />
      <Gallery />
      <BackToHome />
    </div>
  );
};
