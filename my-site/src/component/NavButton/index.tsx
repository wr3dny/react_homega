import { Link } from "react-router-dom";

interface Propos {
    label: string;
    onClick?: () => void;
    path?: string;
}

export const NavButton = ({ label, path, onClick }: Propos) => {
    return (
        <div className="back-to-home" onClick={onClick}>
            <Link to={path || "/"}>{label}</Link>
        </div>
    );
}