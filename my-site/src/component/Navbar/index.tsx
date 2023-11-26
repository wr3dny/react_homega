import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <input type="checkbox" id="toggle" checked />
            <label className="button" htmlFor="toggle">
                <nav className="navbar-inner">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <i className="ri-home-2-line"></i>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                            <i className="ri-message-2-line"></i>
                        </li>
                        <li>
                            <Link to="/hobby">Hobby</Link>
                            <i className="ri-file-line"></i>
                        </li>
                        <li>
                            <Link to="/library">Library</Link>
                            <i className="ri-send-plane-2-line"></i>
                        </li>

                    </ul>
                </nav>
            </label>
        </div>
    );
}