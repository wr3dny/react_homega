import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div>About
            <Link to="/">Back to home</Link>
            <Link to="/resume">Resume</Link>
        </div>
    );

};