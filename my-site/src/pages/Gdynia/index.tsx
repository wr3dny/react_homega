import { CustomHeader } from "../../component/CustomHeader/CustomHeader";
import { Gallery } from "../../component/Gallery";
import { NavButton } from "../../component/NavButton";


export const Gdynia = () => {
    return (
        <div className="gdynia-main">
            <CustomHeader label={"Gdynia in view"} />
            <NavButton label="Home" />
            <NavButton label="Hobby" />
            <Gallery />
        </div>
    );
}
