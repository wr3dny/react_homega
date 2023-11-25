import { Link } from "react-router-dom";

export const BackToHome = () => {
    return (
        <div className="back-to-home">
            <Link to="/">Back to home</Link>
        </div>
    );
}