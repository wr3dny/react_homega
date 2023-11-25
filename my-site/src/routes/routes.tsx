import { Library } from "../pages/Library";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Hobby } from "../pages/Hobby";
import { Resume } from "../pages/Resume";

const NoMatch = () => {
    return <div>NoMatch</div>;
};




export const routes = [
    { path: "/", component: Home },
    { path: "*", component: NoMatch },
    { path: "/about", component: About },
    { path: "/resume", component: Resume },
    { path: "/hobby", component: Hobby },
    { path: "/library", component: Library },

];
