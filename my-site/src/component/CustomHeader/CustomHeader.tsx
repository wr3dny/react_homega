import "./CustomHeader.css";
import mySvg from "../../img/myFinger.svg";

interface Props {
  label?: string | null | JSX.Element;
}

export const CustomHeader = ({ label }: Props) => {
  return (
    <div className="filter-header">
      <img src={mySvg} alt="My SVG" className="my-svg" />
      <span className="title">{label}</span>
    </div>
  );
};
